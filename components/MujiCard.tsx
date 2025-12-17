
import React from 'react';

interface MujiCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

const MujiCard: React.FC<MujiCardProps> = ({ children, className = '', padding = 'p-4' }) => {
  return (
    <div className={`muji-card ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default MujiCard;
