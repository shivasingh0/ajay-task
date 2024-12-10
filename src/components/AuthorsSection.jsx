import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { baseUrl } from '../lib/helper';

const authors = [
  {
    name: 'Floyd Miles',
    image: `${baseUrl()}/assets/client-first-images/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg`,
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Dianne Russell',
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Jenny Wilson',
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
  {
    name: 'Leslie Alexander',
    image: `${baseUrl()}/assets/client-first-images/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg`,
    socials: ['facebook', 'twitter', 'instagram', 'linkedin'],
  },
];

const featuredLogos = [
  { name: 'TechCrunch', image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
  { name: 'Forbes', image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
  { name: 'Wired', image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
  { name: 'CNN', image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
  { name: 'BBC', image: `${baseUrl()}/assets/client-first-images/Logo 1.svg` },
];

const AuthorsSection = () => (
  <section className="container mx-auto px-4 py-16">
    <h2 className="text-2xl font-bold text-center mb-12">Our Featured Authors</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
      {authors.map((author) => (
        <div key={author.name} className="bg-gray-50 p-6 rounded-lg text-center">
          <div className="mb-4">
            <img
              src={author.image}
              alt={author.name}
              width={96}
              height={96}
              className="rounded-full mx-auto"
            />
          </div>
          <h3 className="font-semibold mb-3">{author.name}</h3>
          <div className="flex justify-center gap-3">
            {author.socials.map((social) => (
              <a
                key={social}
                href={`https://www.${social}.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                aria-label={`Visit ${social} profile`}
              >
                {React.createElement(socialIcons[social], {
                  className: 'w-4 h-4 text-gray-600 hover:text-gray-900',
                })}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="text-center">
      <p className="text-gray-600 mb-6">Featured in</p>
      <div className="flex flex-wrap justify-center gap-8">
        {featuredLogos.map((logo) => (
          <div
            key={logo.name}
            className="grayscale opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={logo.image}
              alt={`${logo.name} logo`}
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const socialIcons = {
  facebook: FaFacebook,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
};

export default AuthorsSection;
