import React, { useState, useEffect, useCallback } from "react";
import type { PageState } from "../types";
import { LoadingWrapper } from "./Loading";
import BookCover from "./BookCover";
import BookPage from "./BookPage";
import ProfilePage from "./ProfilePage";
import WorkEducationPage from "./WorkEducationPage";
// import ServicesPage from "./ServicesPage";
// import SkillsPage from "./SkillsPage";
// import PortfolioPage from "./PortfolioPage";
// import ContactPage from "./ContactPage";
import { portfolioData } from "../data/portfolioData";

const BookPortfolio: React.FC = () => {
  const [pageState, setPageState] = useState<PageState>({
    currentPage: 0,
    isTurning: false,
    turnedPages: new Set(),
  });

  const [isOpening, setIsOpening] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [indexCover, setIndexCover] = useState(1);

  const handlePageTurn = useCallback(
    (pageId: string) => {
      if (pageState.isTurning) return;

      setPageState((prev) => ({ ...prev, isTurning: true }));

      const pageNumber = parseInt(pageId.split("-")[1]) || 0;
      const newTurnedPages = new Set(pageState.turnedPages);

      if (newTurnedPages.has(pageNumber)) {
        newTurnedPages.delete(pageNumber);
      } else {
        newTurnedPages.add(pageNumber);
      }

      setPageState((prev) => ({
        ...prev,
        turnedPages: newTurnedPages,
        currentPage: pageNumber,
      }));

      // Reset turning state after animation
      setTimeout(() => {
        setPageState((prev) => ({ ...prev, isTurning: false }));
      }, 1000);
    },
    [pageState.isTurning, pageState.turnedPages]
  );

  useEffect(() => {
    setTimeout(() => {
      setIndexCover(-1);
    }, 2800);
  }, []);

  // Handle loading and opening animation
  useEffect(() => {
    // Simulate loading time for assets
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const openingTimer = setTimeout(() => {
      setIsOpening(false);
      handlePageTurn("cover-right");
    }, 2100);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(openingTimer);
    };
  }, [handlePageTurn]);

  const handleContactMe = () => {
    // Turn all pages to reach contact page
    const pageIds = [1, 2, 3];
    pageIds.forEach((pageId, index) => {
      setTimeout(
        () => {
          setPageState((prev) => ({
            ...prev,
            turnedPages: new Set(prev.turnedPages).add(pageId),
          }));
        },
        (index + 1) * 200 + 100
      );
    });
  };

  // const handleBackToProfile = () => {
  //   // Turn back all pages
  //   const pageIds = [3, 2, 1];
  //   let pageNumber = 3;

  //   const reverseIndex = () => {
  //     pageNumber--;
  //     if (pageNumber < 0) pageNumber = 2;
  //   };

  //   pageIds.forEach((_, index) => {
  //     setTimeout(
  //       () => {
  //         reverseIndex();
  //         setPageState((prev) => {
  //           const newTurnedPages = new Set(prev.turnedPages);
  //           newTurnedPages.delete(pageNumber);
  //           return { ...prev, turnedPages: newTurnedPages };
  //         });
  //       },
  //       (index + 1) * 200 + 100
  //     );
  //   });
  // };

  // const handleContactSubmit = (formData: ContactForm) => {
  //   console.log("Form submitted:", formData);
  //   // Handle form submission logic here
  // };

  return (
    <LoadingWrapper isLoading={isLoading} loadingText="Preparing your portfolio book...">
      <div className="wrapper">
        <BookCover side="left" isTurned={false} />
        <BookCover side="right" isTurned={!isOpening} zIndex={indexCover} />

        <div className="book">
          {/* Profile Page (Left Side) */}
          <div className="book-page page-left">
            <ProfilePage
              personalInfo={portfolioData.personalInfo}
              socialMedia={portfolioData.socialMedia}
              onContactMe={handleContactMe}
            />
          </div>

          {/* Page 1 & 2 (Work Experience & Education) */}
          <BookPage pageId="turn-1" pageNumber={1} onPageTurn={handlePageTurn} isTurned={pageState.turnedPages.has(1)}>
            <div className="page-front">
              <WorkEducationPage items={portfolioData.workExperience} title="Work Experience" pageNumber={1} />
            </div>
            <div className="page-back">
              <WorkEducationPage items={portfolioData.education} title="Education" pageNumber={2} />
            </div>
          </BookPage>

          {/* Page 3 & 4 (Services & Skills) */}
          {/* <BookPage
          pageId="turn-2"
          pageNumber={2}
          onPageTurn={handlePageTurn}
          isTurned={pageState.turnedPages.has(2)}
        >
          <div className="page-front">
            <ServicesPage
              services={portfolioData.services}
              pageNumber={3}
            />
          </div>
          <div className="page-back">
            <SkillsPage
              skillCategories={portfolioData.skills}
              pageNumber={4}
            />
          </div>
        </BookPage> */}

          {/* Page 5 & 6 (Portfolio & Contact) */}
          {/* <BookPage
          pageId="turn-3"
          pageNumber={3}
          onPageTurn={handlePageTurn}
          isTurned={pageState.turnedPages.has(3)}
        >
          <div className="page-front">
            <PortfolioPage
              project={portfolioData.latestProject}
              pageNumber={5}
            />
          </div>
          <div className="page-back">
            <ContactPage
              onSubmit={handleContactSubmit}
              onBackToProfile={handleBackToProfile}
              pageNumber={6}
            />
          </div>
        </BookPage> */}
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default BookPortfolio;
