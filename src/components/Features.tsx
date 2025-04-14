
import React from 'react';
import { BookOpen, Users, Code, Trophy, Lightbulb, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="bg-primary-50 p-3 rounded-lg mb-5">
        {icon}
      </div>
      <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary-600" />,
      title: "Comprehensive Curriculum",
      description: "Carefully structured content that builds your skills from fundamentals to advanced topics."
    },
    {
      icon: <Users className="h-6 w-6 text-primary-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world development experience."
    },
    {
      icon: <Code className="h-6 w-6 text-primary-600" />,
      title: "Hands-on Projects",
      description: "Build real applications and solve actual problems to reinforce your learning."
    },
    {
      icon: <Trophy className="h-6 w-6 text-primary-600" />,
      title: "Earn Certificates",
      description: "Receive certificates upon completion to showcase your skills to employers."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary-600" />,
      title: "Community Support",
      description: "Join a thriving community of learners and mentors to get help when you need it."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: "Self-Paced Learning",
      description: "Learn at your own speed with lifetime access to all course materials."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Coding Path Foundry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best learning experience to help you achieve your development goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
