
import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white';
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  color = 'primary',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  const colorClasses = {
    primary: 'border-primary-600 border-t-transparent',
    white: 'border-white border-t-transparent'
  };

  return (
    <div 
      className={`
        inline-block rounded-full animate-spin 
        ${sizeClasses[size]} 
        ${colorClasses[color]}
        ${className}
      `}
      role="status"
      aria-label="loading"
    />
  );
};

export { Loading };
