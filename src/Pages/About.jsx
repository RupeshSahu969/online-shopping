import React from "react";


const About = () => {
  return (
    <div className="min-h-screen mt-10 bg-gray-50 px-4 sm:px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        {/* <div className="md:w-1/2 w-full">
          <img
            src={aboutImage}
            alt="About our store"
            className="rounded-lg shadow-md w-full object-cover h-[250px] sm:h-[350px] md:h-[400px]"
          />
        </div> */}

        {/* Text Content */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            About Our Store
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4 leading-relaxed">
            Welcome to <span className="font-semibold text-blue-500">Shree Fashion</span>, your one-stop destination for elegant sarees, stylish kurtis, and ethnic wear that blends tradition with modern trends. We believe that fashion should be timeless, accessible, and rooted in cultural beauty.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Whether you're shopping for weddings, festivals, or everyday elegance, we bring you carefully curated collections from top Indian designers. Quality, comfort, and customer happiness are our top priorities.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-800">
          Our Mission
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          To empower every woman with confidence and beauty through clothing that tells a story — of tradition, grace, and style. We aim to deliver not just fashion, but also a feeling of celebration in every outfit.
        </p>
      </div>
    </div>
  );
};

export default About;
