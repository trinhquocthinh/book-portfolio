import React from 'react';
import type { BookPageProps } from '../types';
import NavigationButton from './NavigationButton';

const BookPage: React.FC<BookPageProps> = ({ 
  pageId,
  onPageTurn, 
  isTurned, 
  children,
  className = ''
}) => {
  return (
    <div 
      className={`book-page page-right ${isTurned ? 'turn' : ''} ${className}`}
      id={pageId}
    >
      {children}
      <NavigationButton
        direction="next"
        pageId={pageId}
        onPageTurn={onPageTurn}
      />
      <NavigationButton
        direction="prev"
        pageId={pageId}
        onPageTurn={onPageTurn}
      />
    </div>
  );
};

export default BookPage;