import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { baseUrl } from '../lib/helper';

const StorySection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[400px] w-full">
          <img
            src={`${baseUrl()}/assets/client-first-images/close-up-photography-of-man-wearing-sunglasses-1212984.svg`}
            alt="Three friends enjoying a scenic view"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="max-w-lg">
          <span className="text-gray-600 uppercase tracking-wider text-sm font-semibold">
            How We Started
          </span>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            It started out as a simple idea and evolved into our passion
          </h2>
          <p className="text-gray-600 mb-6">
            Our journey began with a shared love for storytelling. What started as casual conversations 
            among friends grew into a platform where writers from all walks of life could share their 
            experiences and insights, inspiring readers worldwide.
          </p>
          <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 transition-colors"
            aria-label="Discover our story"
          >
            Discover our story
            <FaArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
