"use client";
import { useEffect } from "react";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

    </main>
  );
}
