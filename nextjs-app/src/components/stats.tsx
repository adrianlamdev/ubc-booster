"use client";
import React from "react";
import { Spacer, Card, Text } from "@nextui-org/react";

export default function StatSection() {
  return (
    <div className="py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl">Did you know?</h1>
        <Spacer y={1} />
        <p className="lg:text-lg">
          Here's some statistics about how many GPA boosters there are at UBC.
        </p>
      </div>
      <Spacer y={2} />{" "}
      <ul>
        <li>1409 undergraduate booster courses</li>
        <li>3164 total booster courses</li>
      </ul>
      <Spacer y={3} />
      <div>
        <h2 className="font-bold text-3xl">To break it down, there are</h2>

        <ul className="flex justify-between mt-4 mx-20">
          <li className="px-8 py-4 rounded-xl shadow-md border border-gray-300">
            <h2 className="text-gray-600 font-semibold">100-level courses</h2>
            <Spacer y={0.5} />
            <p className="text-center font-bold text-2xl">109</p>
          </li>
          <li className="px-10 py-4 rounded-xl shadow-md border border-gray-300">
            <h2 className="text-gray-600 font-semibold">200-level courses</h2>
            <Spacer y={0.5} />
            <p className="text-center font-bold text-2xl">140</p>
          </li>
          <li className="px-10 py-4 rounded-xl shadow-md border border-gray-300">
            <h2 className="text-gray-600 font-semibold">300-level courses</h2>
            <Spacer y={0.5} />
            <p className="text-center font-bold text-2xl">431</p>
          </li>
          <li className="px-10 py-4 rounded-xl shadow-md border border-gray-300">
            <h2 className="text-gray-600 font-semibold">400-level courses</h2>
            <Spacer y={0.5} />
            <p className="text-center font-bold text-2xl">729</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
