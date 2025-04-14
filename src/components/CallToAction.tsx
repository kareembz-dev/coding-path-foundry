
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CallToAction = () => {
  const benefits = [
    "Access to 100+ courses and tutorials",
    "Structured learning paths for career growth",
    "Real-world projects for portfolio building",
    "Community support and networking",
    "Expert instructor feedback",
    "Self-paced learning environment"
  ];

  return (
    <section className="py-20 bg-primary-600">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Coding Journey Today
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-lg">
              Join thousands of students who have successfully launched their tech careers with Coding Path Foundry.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-6 bg-white text-primary-600 hover:bg-primary-50 text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 border-white text-white hover:bg-primary-700 text-lg">
                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">Sign Up For Free</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="goal" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Learning Goal
                  </label>
                  <select
                    id="goal"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Select your goal</option>
                    <option value="career">Career Change</option>
                    <option value="skills">Learn New Skills</option>
                    <option value="project">Build a Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white">
                  Create Free Account
                </Button>
              </form>
              
              <p className="text-center text-sm text-gray-500 mt-6">
                No credit card required. Start learning instantly.
              </p>
            </div>
            
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-primary-500 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
