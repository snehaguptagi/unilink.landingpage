import React from 'react';
import { ArrowRight, CheckCircle, School, Users, BookOpen, Globe } from 'lucide-react';
import AIAdvisor from './AIAdvisor';

const LandingPage = () => {
  const stats = [
    { label: 'Partner Universities', value: '500+' },
    { label: 'Students Served', value: '100,000+' },
    { label: 'Application Success Rate', value: '85%' },
    { label: 'States Covered', value: '28' },
  ];

  const features = [
    { 
      title: 'One Application, Multiple Universities',
      description: 'Apply to multiple top institutions across India with a single application form',
      icon: School,
    },
    {
      title: 'Smart College Recommendations',
      description: 'Get personalized university suggestions based on your academic profile and preferences',
      icon: BookOpen,
    },
    {
      title: 'Streamlined Document Management',
      description: 'Upload your documents once and use them for all your applications',
      icon: CheckCircle,
    },
    {
      title: 'Pan-India Network',
      description: 'Access universities from every corner of India through our platform',
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Your Gateway to Indian Universities
            </h1>
            <p className="text-xl mb-8">
              Apply to multiple top institutions across India with a single application. 
              AI College Advisor simplifies your college admission journey.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                Start Your Application <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                For Universities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose AI College Advisor?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Admissions Advisor (Claude-powered) */}
      <AIAdvisor />

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your College Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who have simplified their college application process with AI College Advisor.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
              Create Your Account
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AI College Advisor</h3>
              <p className="text-sm">
                Simplifying college admissions across India
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-sm">
                <li>How It Works</li>
                <li>Browse Universities</li>
                <li>Application Guide</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Universities</h4>
              <ul className="space-y-2 text-sm">
                <li>Partner With Us</li>
                <li>Admin Portal</li>
                <li>Resources</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Blog</li>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
            © 2024 AI College Advisor. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
