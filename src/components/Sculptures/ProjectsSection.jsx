"use client";
import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import ArtworkItem from "./ArtworkItem";
import { useRouter, useSearchParams } from "next/navigation";
import artworksData from "../../app/data/artworksData";
import './styles.css';

const ITEMS_PER_PAGE = 9;

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

  // Handle loading state correctly after page change
  useEffect(() => {
    setLoading(true); // Start loading when page changes
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 500);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleProjectClick = (projectId) => {
    router.push(`/sculptures/${projectId}`);
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setLoading(true);
      setCurrentPage(page);
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen p-6 bg-white transition-opacity duration-500 opacity-100 mt-8 flex-grow" id="projects">
      
      {/* Artwork Grid */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg transition-all duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        {loading ? (
          Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
            <div key={idx} className="aspect-w-16 aspect-h-9 bg-gray-200 animate-pulse rounded-lg" />
          ))
        ) : (
          selectedArtworks.map((artwork) => (
            <ArtworkItem
              key={artwork.id}
              artwork={artwork}
              handleProjectClick={handleProjectClick}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-8 mb-4 flex justify-center space-x-2 w-full">
        {totalPages > 1 && (
          Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index + 1}
              href={`?page=${index + 1}`}
              className={`mx-1 px-4 py-2 rounded-full transition-colors duration-300 ${
                currentPage === index + 1 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-400"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

const SuspendedProjectsSection = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ProjectsSection />
  </Suspense>
);

export default SuspendedProjectsSection;
