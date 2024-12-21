import React from "react";
import pic2 from "../../public/bing.jpg";
import pic3 from "../../public/download.png";
import pic4 from "../../public/movie.png";
import pic5 from "../../public/insta2.jpg";
import pic6 from "../../public/prank2.png";
import pic7 from "../../public/more.png";

const Tools = () => {
  const cardItem = [
    {
      id: 1,
      logo: pic2,
      name: "Image Creator",
      description: "Create a amazing image using Ai ",
      link: "https://www.bing.com/images/create",
    },
    {
      id: 2,
      logo: pic3,
      name: "Yt video downloader",
      description: "Download 4k Youtube video ",
      link: "https://ssyoutube.com/en789Jb/",
    },
    {
      id: 3,
      logo: pic4,
      name: "Movie Downloader",
      description: "Download lastest movies ",
      link: "https://www.5movierulz.dev/",
    },
    {
      id: 4,
      logo: pic5,
      name: "video downloader",
      description: "Download insta videos and reels ",
      link: "https://snapinsta.app/",
    },
    {
      id: 5,
      logo: pic6,
      name: "Fake Screenshot",
      description: "Create fake social media screenshot",
      link: "https://prankshit.com/",
    },
    {
      id: 6,
      logo: pic7,
      name: "More Tools",
      description: "More Ai tools ,pdf maker, img tool,ai  write etc ",
      link: "https://tinywow.com/",
    },
  ];

  return (
    <>
      <div
        name="Tools"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Tools</h1>
          <span className="font-semibold">Featured Tools</span>
          {/* Responsive grid setup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
            {cardItem.map(({ id, logo, name, description, link }) => (
              <div
                className="w-full border rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo}
                    className="w-[120px] h-[120px] p-2 rounded-full border-2 mx-auto"
                    alt={name}
                  />
                  <div className="mt-3 text-center">
                    <div className="font-bold">{name}</div>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
