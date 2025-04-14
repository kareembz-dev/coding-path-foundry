
import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  instructor: string;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  category,
  level,
  duration,
  students,
  rating,
  instructor,
  featured = false,
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] border ${featured ? 'border-primary-300' : 'border-gray-200'}`}>
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-primary-600 text-white px-3 py-1">Featured</Badge>
          </div>
        )}
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-white text-gray-800 hover:bg-gray-100">{category}</Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-xs text-primary-600 border-primary-200 bg-primary-50">
            {level}
          </Badge>
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="font-heading font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Clock className="h-4 w-4 mr-1" />
          <span className="mr-4">{duration}</span>
          <Users className="h-4 w-4 mr-1" />
          <span>{students.toLocaleString()} students</span>
        </div>
        
        <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm font-medium text-gray-700">By {instructor}</div>
          <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">View Course</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
