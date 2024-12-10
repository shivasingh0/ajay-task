import React from "react";
import {
  FaBook,
  FaUsers,
  FaBolt,
  FaGraduationCap,
  FaGreaterThan,
  FaBriefcase,
  FaRocket,
  FaChartLine,
  FaMicrochip,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { baseUrl } from "../lib/helper";
import AuthorsSection from "../components/AuthorsSection";
import StorySection from "../components/StorySection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={`${baseUrl()}/assets/client-first-images/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg`}
            alt="Hero background"
            className="object-cover brightness-50 h-full w-full"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-4">
              Step-by-step guide to becoming a real test guru
            </h1>
            <p className="text-gray-200 mb-6">
              Master the art of testing with our comprehensive resources
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-2xl font-semibold mb-4">Featured Post</h1>
            <div className="p-6 border bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`${baseUrl()}/assets/client-first-images/white-concrete-building-1838640.svg`}
                alt=""
                className="mb-4 h-[250px] w-full object-cover"
              />
              <h2 className="text-2xl font-semibold mb-2">
                How to write better test cases
              </h2>
              <p className="text-gray-600">
                Learn the essential techniques for creating effective test cases
              </p>
              <button className="bg-[#FFD050] flex items-center gap-3 mt-3 text-[#232536] font-bold text-lg px-5 py-2 rounded-md">
                <span>Read More</span> <FaGreaterThan />
              </button>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">All Posts</h2>
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-4 flex gap-4">
                  <div>
                    <div className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded w-fit mb-2">
                      Article
                    </div>
                    <h3 className="font-semibold mb-1">
                      Essential testing principles everyone should know
                    </h3>
                    <p className="text-sm text-gray-600">
                      Master the fundamentals of software testing
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About & Mission Section */}
        <div className="bg-[#F4F4F4] p-16 rounded-md">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                About us
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We are a community of content writers who share their learnings
              </h2>
              <p className="text-gray-600 mb-4">
                Every week, writers from our community share their expertise and
                experiences, helping others grow through detailed insights and
                practical advice.
              </p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center"
              >
                Read More &gt;
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Our mission
              </h3>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="text-gray-600 mb-4">
                We believe in the power of shared knowledge and experiences. Our
                platform enables creatives to connect, learn, and grow together
                through meaningful content.
              </p>
              <a
                href="#"
                className="text-gray-900 font-medium hover:text-gray-700 inline-flex items-center"
              >
                Read More &gt;
              </a>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="text-center mb-12 mt-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Choose A Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {[
            {
              icon: <FaBriefcase size={24} />,
              title: "Business",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              isActive: false,
            },
            {
              icon: <FaRocket size={24} />,
              title: "Startup",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              isActive: true,
            },
            {
              icon: <FaChartLine size={24} />,
              title: "Economy",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              isActive: false,
            },
            {
              icon: <FaMicrochip size={24} />,
              title: "Technology",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              isActive: false,
            },
          ].map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-200 hover:shadow-lg ${
                category.isActive
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        <StorySection />

        <AuthorsSection />

        <div className="bg-[#FEF6F0] p-8 md:p-16 rounded-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <span className="text-gray-600 uppercase tracking-wider text-sm font-semibold">
                Testimonials
              </span>
              <h2 className="text-3xl font-bold mt-2 mb-4">
                What people say about our blog
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-800 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={`${baseUrl()}/assets/client-first-images/Image.svg`}
                    alt="Jonathan Vallem"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">Jonathan Vallem</h3>
                    <p className="text-sm text-gray-600">New york, USA</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors">
                    <FaArrowLeft className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-[#232536] text-white hover:bg-gray-800 transition-colors">
                    <FaArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Join our team to be a part of our story
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-semibold transition-colors">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
