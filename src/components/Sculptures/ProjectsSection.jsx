"use client";
import React, { useState, useEffect, Suspense } from "react";
import ArtworkItem from "./ArtworkItem";
import { useRouter, useSearchParams } from "next/navigation";
import artworksData from "../../app/data/artworksData";
import './styles.css';

const ITEMS_PER_PAGE = 10;

const ProjectsSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(() => parseInt(searchParams.get("page")) || 1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);
  }, [searchParams]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedArtworks = artworksData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(artworksData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500); // Ensure the spinner runs for at least one second
    };

    const images = document.querySelectorAll("img.lazy");
    let loadedCount = 0;
    images.forEach((img) => {
      if (img.complete) {
        loadedCount += 1;
      } else {
        img.addEventListener("load", () => {
          loadedCount += 1;
          if (loadedCount === images.length) {
            handleLoad();
          }
        });
      }
    });

    if (loadedCount === images.length) {
      handleLoad();
    }
  }, [selectedArtworks]);

  const handleProjectClick = (projectId) => {
    router.push(`/sculptures/${projectId}`);
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setLoading(true); // Set loading state when changing pages
      setCurrentPage(page);
      setTimeout(() => {
        router.push(`sculptures/?page=${page}`);
      }, 1000); // Simulate lazy loading with a timeout
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-white transition-opacity duration-500 opacity-100 mt-8" id="projects">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="spinner">Loading...</div>
        </div>
      ) : (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-screen-lg">
            {selectedArtworks.map((artwork) => (
              <ArtworkItem key={artwork.id} artwork={artwork} handleProjectClick={handleProjectClick} />
            ))}
          </ul>
          {totalPages > 1 && (
            <div className="pagination mt-8 flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={`mx-1 px-4 py-2 rounded-full ${currentPage === index + 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white"}`}
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </section>
  );
};

const SuspendedProjectsSection = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProjectsSection />
  </Suspense>
);

export default SuspendedProjectsSection;
