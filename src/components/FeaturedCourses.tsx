
import React from 'react';
import CourseCard from './CourseCard';
import { Button } from './ui/button';

const FeaturedCourses = () => {
  const courses = [
    {
      title: "Complete JavaScript: From Zero to Expert",
      description: "Master modern JavaScript from the basics to advanced concepts like ES6+, OOP, and asynchronous programming.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      category: "JavaScript",
      level: "Beginner to Advanced",
      duration: "42 hours",
      students: 35420,
      rating: 4.8,
      instructor: "Sarah Johnson",
      featured: true
    },
    {
      title: "React Masterclass: Build Real-World Applications",
      description: "Learn React by building real applications. Covers hooks, context API, Redux, React Router, and more.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "React",
      level: "Intermediate",
      duration: "36 hours",
      students: 28750,
      rating: 4.9,
      instructor: "Michael Chen",
      featured: true
    },
    {
      title: "Node.js & Express: Building APIs from Scratch",
      description: "Create robust RESTful APIs with Node.js and Express. Learn authentication, error handling, and database integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Node.js",
      level: "Intermediate",
      duration: "28 hours",
      students: 19840,
      rating: 4.7,
      instructor: "David Rodriguez",
      featured: true
    },
    {
      title: "Python for Data Science and Machine Learning",
      description: "Comprehensive course covering Python libraries like NumPy, Pandas, Matplotlib, and scikit-learn for data analysis.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      category: "Python",
      level: "Intermediate",
      duration: "45 hours",
      students: 26320,
      rating: 4.8,
      instructor: "Emily Wu",
      featured: true
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Courses
            </h2>
            <p className="text-gray-600 max-w-2xl">
              Our most popular courses, highly rated by thousands of students and constantly updated with the latest technologies.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 border-primary-600 text-primary-600 hover:bg-primary-50">
            View All Courses
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
