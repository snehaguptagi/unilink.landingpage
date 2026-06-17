import React, { useState } from 'react';
import { Sparkles, KeyRound, Loader2, GraduationCap } from 'lucide-react';

// Default model — change to any Claude model your API key can access.
const MODEL = 'claude-sonnet-4-6';

function AIAdvisor() {
  const [apiKey, setApiKey] = useState(
    () => localStorage.getItem('anthropic_api_key') || ''
  );
  const [showKey, setShowKey] = useState(
    () => !localStorage.getItem('anthropic_api_key')
  );
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState('');
  const [error, setError] = useState('');

  const saveKey = (k) => {
    setApiKey(k);
    localStorage.setItem('anthropic_api_key', k);
  };

  const getAdvice = async () => {
    if (!apiKey) {
      setError('Enter your Anthropic API key first.');
      setShowKey(true);
      return;
    }
    if (!profile.trim()) {
      setError('Tell us a bit about yourself first.');
      return;
    }
    setLoading(true);
    setError('');
    setAdvice('');

    const prompt =
      'You are a college admissions advisor for UniLink. Based on the student profile below, ' +
      'respond with:\n' +
      '1. A shortlist of 4-6 universities, each tagged (Reach / Match / Safety) with one line on why it fits.\n' +
      '2. Three concrete next steps for the next month.\n' +
      'Be specific, realistic, and encouraging. Do not invent admission statistics.\n\n' +
      `Student profile:\n${profile}`;

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error?.message || `API error ${res.status}`);
      }
      setAdvice(data?.content?.[0]?.text ?? 'No response returned.');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Request failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white py-20" id="ai-advisor">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-3">
            <Sparkles className="w-5 h-5" />
            AI Admissions Advisor
          </div>
          <h2 className="text-3xl font-bold mb-3">Find your university shortlist</h2>
          <p className="text-gray-600">
            Describe yourself and get an AI-built shortlist (reach / match / safety) plus your next steps.
          </p>
        </div>

        {showKey && (
          <div className="mb-4 bg-blue-50 rounded-lg p-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <KeyRound className="inline w-4 h-4 mr-1" />
              Anthropic API key (stored only in your browser)
            </label>
            <input
              type="password"
              placeholder="sk-ant-..."
              value={apiKey}
              onChange={(e) => saveKey(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Get one at{' '}
              <a
                href="https://console.anthropic.com/settings/keys"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                console.anthropic.com
              </a>
              .
            </p>
          </div>
        )}

        <textarea
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          rows={5}
          placeholder="e.g. 12th grade, 92% / 1450 SAT, love CS and design, want a strong startup scene, budget ~$30k/yr, open to US or Canada…"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between mt-3">
          <button
            onClick={() => setShowKey((s) => !s)}
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
          >
            <KeyRound className="w-4 h-4" />
            {apiKey ? 'Change key' : 'Set key'}
          </button>
          <button
            onClick={getAdvice}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg flex items-center gap-2 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Thinking…
              </>
            ) : (
              <>
                <GraduationCap className="w-4 h-4" /> Get my shortlist
              </>
            )}
          </button>
        </div>

        {error && (
          <div className="mt-4 text-sm text-red-600 bg-red-50 rounded-md p-3">{error}</div>
        )}

        {advice && (
          <div className="mt-6 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap bg-gray-50 rounded-lg p-5 border border-gray-200">
            {advice}
          </div>
        )}
      </div>
    </div>
  );
}

export default AIAdvisor;
