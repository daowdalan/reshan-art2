import React from "react";
import Image from "next/image";
import artworksData from "../../data/artworksData";

// Dynamic metadata generation for each sculpture page
export async function generateMetadata({ params }) {
  const { id } = params;
  const artwork = artworksData.find(item => item.id === parseInt(id));

  if (!artwork) {
    return {
      title: "Artwork not found",
    };
  }

  return {
    title: artwork.title, // Set the artwork title as the page title
  };
}

// Dynamic Page for Each Sculpture
const SculpturePage = ({ params }) => {
  const { id } = params; // Get the dynamic id from the URL
  const artwork = artworksData.find(item => item.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-20">
        <h2 className="text-gray-600 text-3xl font-semibold">Artwork not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Work Date */}
      <div className="text-center pt-8 mt-8">
        <p className="text-gray-600 text-lg">{artwork.work_date}</p> {/* Displaying the work date */}
      </div>

      {/* Title */}
      <div className="text-center py-1">
        <h1 className="text-xl md:text-3xl font-bold text-black">{artwork.title}</h1>
      </div>

      {/* Image Section */}
      {artwork.images.length === 1 ? (
        <section className="flex items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src={artwork.images[0].image}
              alt={artwork.title}
              width={800}
              height={800}
              objectFit="cover"
              quality={100}
              className="opacity-90"
              loading="lazy"
            />
          </div>
        </section>
      ) : (
        <section className="p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {artwork.images.map((img, index) => (
              <div key={index} className="relative overflow-hidden group bg-gray-100">
                <Image
                  width={800}
                  height={600}
                  layout="responsive"
                  src={img.image}
                  alt={`${artwork.title} image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Description */}
      <div className="p-6 md:p-12 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-800 leading-loose">{artwork.description}</p>
      </div>
    </div>
  );
};

export default SculpturePage;
