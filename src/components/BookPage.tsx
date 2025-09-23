import React from "react";
import type { BookPageProps } from "../types";
import NavigationButton from "./NavigationButton";

const BookPage: React.FC<BookPageProps> = ({ pageId, pageNumber, onPageTurn, isTurned, zIndex, children, className = "" }) => {
  return (
    <div
      className={`book-page page-right ${isTurned ? "turn" : ""} ${className}`}
      style={{ zIndex: zIndex }}
      id={pageId}
    >
      {children}
      
      {/* Page number */}
      <span className="number-page">{pageNumber}</span>
      
      {/* Navigation buttons */}
      <NavigationButton direction="next" pageId={pageId} onPageTurn={onPageTurn} />
      {pageNumber > 1 && (
        <NavigationButton direction="prev" pageId={pageId} onPageTurn={onPageTurn} />
      )}
    </div>
  );
};

export default BookPage;
