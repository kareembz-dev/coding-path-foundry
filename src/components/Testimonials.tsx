
import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  company,
  image,
  rating
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
      <div className="absolute -top-3 -left-3 bg-primary-500 rounded-full p-2">
        <Quote className="h-5 w-5 text-white" />
      </div>
      
      <div className="flex items-center mb-4 mt-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 text-base italic">"{quote}"</p>
      
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-medium text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The structured learning paths helped me transition from a complete beginner to landing my first developer job in just 8 months. The projects are real-world and practical.",
      name: "Alex Rivera",
      title: "Frontend Developer",
      company: "TechCorp",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      quote: "As a self-taught developer, I had knowledge gaps that were holding me back. This platform identified those gaps and filled them systematically.",
      name: "Sophia Chen",
      title: "Full Stack Developer",
      company: "StartupX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      quote: "The community support is outstanding. Whenever I got stuck, there was always someone ready to help, whether it was other students or the instructors themselves.",
      name: "Marcus Johnson",
      title: "Software Engineer",
      company: "DataTech",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive learning platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
