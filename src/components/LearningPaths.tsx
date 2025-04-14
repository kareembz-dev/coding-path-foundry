
import React from 'react';
import { Code, Server, Database, Globe, BarChart, Smartphone, Shield, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface PathProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PathCard: React.FC<PathProps> = ({ title, description, icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Button variant="ghost" className="px-0 text-primary-600 hover:text-primary-700 hover:bg-transparent">
        Explore Path <span className="ml-1">→</span>
      </Button>
    </div>
  );
};

const LearningPaths = () => {
  const paths = [
    {
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, and popular frameworks like React to build stunning web interfaces.",
      icon: <Code className="h-6 w-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming with Node.js, Python, or Java and build powerful APIs and services.",
      icon: <Server className="h-6 w-6 text-white" />,
      color: "bg-green-500"
    },
    {
      title: "Database Engineering",
      description: "Explore SQL and NoSQL databases, data modeling, and efficient query optimization techniques.",
      icon: <Database className="h-6 w-6 text-white" />,
      color: "bg-amber-500"
    },
    {
      title: "Full Stack Development",
      description: "Combine frontend and backend skills to build complete web applications from scratch.",
      icon: <Globe className="h-6 w-6 text-white" />,
      color: "bg-purple-500"
    },
    {
      title: "Data Science & Analytics",
      description: "Learn to analyze data, build models, and derive insights using Python and popular data libraries.",
      icon: <BarChart className="h-6 w-6 text-white" />,
      color: "bg-indigo-500"
    },
    {
      title: "Mobile Development",
      description: "Build native or cross-platform mobile apps for iOS and Android using React Native or Flutter.",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      color: "bg-pink-500"
    },
    {
      title: "DevOps & Cloud",
      description: "Master deployment, CI/CD, and cloud platforms like AWS, Azure, and Google Cloud.",
      icon: <Server className="h-6 w-6 text-white" />,
      color: "bg-teal-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect systems and data by learning security concepts, tools, and best practices.",
      icon: <Shield className="h-6 w-6 text-white" />,
      color: "bg-red-500"
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Structured curriculum designed by industry experts to take you from beginner to professional developer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paths.map((path, index) => (
            <PathCard key={index} {...path} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="bg-primary-600 hover:bg-primary-700 text-white">
            View All Learning Paths
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
