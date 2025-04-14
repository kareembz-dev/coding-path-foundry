
import React from 'react';
import { ChevronRight, Code, Server, Database } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master<br />
              <span className="text-primary-600">Full Stack</span> Development
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Structured learning paths, expert-led courses, and hands-on projects to become a professional developer. Start your coding journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="px-8 py-6 bg-primary-600 hover:bg-primary-700 text-white text-lg">
                Get Started Free
              </Button>
              <Button variant="outline" className="px-8 py-6 border-primary-600 text-primary-600 hover:bg-primary-50 text-lg">
                View Courses <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-gray-600">
              <div className="mr-8 flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>20K+ Students</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span>50+ Courses</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-sm font-mono text-gray-500">main.js</div>
              </div>
              <pre className="text-sm bg-gray-50 p-4 rounded-md overflow-x-auto">
                <code className="language-javascript text-xs sm:text-sm font-mono">
{`// Welcome to Coding Path Foundry
function learnToCode() {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "Docker", "AWS"]
  };
  
  const career = new Developer(skills);
  return career.getLucrative();
}

// Your journey starts here
learnToCode();`}
                </code>
              </pre>
            </div>
            
            <div className="absolute -left-10 -bottom-10 z-0 w-24 h-24 bg-primary-500 rounded-lg opacity-20 animate-pulse"></div>
            <div className="absolute -right-5 -top-5 z-0 w-16 h-16 bg-accent-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
