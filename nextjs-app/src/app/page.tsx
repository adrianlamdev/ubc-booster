"use client";
import { useEffect } from "react";
import Link from "next/link";
import Features from "../components/features";
import { Text, Spacer } from "@nextui-org/react";

export default function Home() {
  // Perform an action when the component mounts
  // useEffect(() => {
  //   // Define an asynchronous function to fetch courses
  //   const getCourses = async () => {
  //     // Make an HTTP GET request to retrieve courses from the specified URL
  //     const response = await fetch("http://127.0.0.1:5000/api/get_courses");

  //     // Parse the response body as JSON
  //     const data = await response.json();

  //     // Store the retrieved courses in a variable
  //     const courses = data;

  //     await fetch("/api/get_courses", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(courses),
  //       });
  //   };

  //   // Call the getCourses function to initiate the data retrieval
  //   getCourses();
  // }, []);

  return (
    <main className="flex flex-col justify-between">
      <div className="m-10 lg:m-64">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Your <span className="text-blue-500">UBC</span> course
            </h1>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              essentials in one place.
            </h1>
            <Spacer y={0.5} />
            <p className="lg:text-lg w-3/4 tracking-tighter">
              We combine the latest AI technologies with fitness tracking to
              give you the best experience possible.
            </p>
            {/* <Text h1 weight="bold" size="$6xl" className="tracking-tight">
              Your <span className="text-blue-500">UBC</span> course
            </Text>
            <Spacer y={-1.5} />
            <Text h1 weight="bold" size="$6xl" className="tracking-tight">
              essentials in one place.
            </Text>
            <Text size="$lg" className="w-3/4 tracking-tighter">
              We combine the latest AI technologies with fitness tracking to give you the best experience possible.
            </Text> */}
            <div className="mt-4 flex flex-row">
            <Link href="/sign-up" className="text-white">
              <button className="hover:pr-6 hero-button mr-4 flex-row hover:bg-blue-400 bg-blue-500 border-blue-600 border transition px-3 py-1 rounded-2xl flex items-center justify-center">
                  Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-1 w-5 h-auto text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
              </Link>
              <Link href="/help-and-feedback" className="text-blue-500">

              <button className="hover:pr-6 duration-300 hero-button flex-row hover:border-blue-500 border-gray-300 border-2 transition px-3 py-1 rounded-2xl flex items-center justify-center">
                  FAQ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="ml-1 w-5 h-auto text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
              </Link>
            </div>
          </div>
          <div>image</div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1689628893">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          >
            
          </path>
        </svg>
      </div>
      <Features />
    </main>
  );
}
