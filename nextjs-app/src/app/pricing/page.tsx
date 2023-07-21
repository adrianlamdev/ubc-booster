"use client";

import Link from "next/link";
import { Spacer } from "@nextui-org/react";

export default function PricingPage() {
  return (
    <div className="p-12 lg:px-64">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-blue-500 font-semibold">Pricing</h1>
        <p className="mt-1 font-bold text-4xl">Pricing plans for your needs.</p>
        <Spacer y={1} />
        <p className="text-gray-600">
          What are you waiting for? It's time to get started.
        </p>
      </div>
      <Spacer y={4} />
      <ul className="flex flex-row justify-center">
        <li className="border border-l-gray-300 border-y-gray-300 rounded-3xl p-8 flex justify-center flex-col mr-10">
          <div>
            <h1 className="font-semibold text-xl">Free</h1>
            <p className="mt-4">Essentials to get started.</p>
            <h2 className="font-bold text-3xl mt-4">
              $0
              <span className="font-medium text-sm text-gray-600">/month</span>
            </h2>
            <ul className="mt-6">
              <li className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">4 GPA boosters</p>
              </li>
              <li className="flex flex-row items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">Feature 2</p>
              </li>
              <li className="flex flex-row items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">Feature 3</p>
              </li>
            </ul>
          </div>
          <button className="mt-20 border hover:border-blue-500 transition border-gray-300 text-blue-600 text-sm font-semibold py-2 px-4 rounded-lg">
            <Link href="/purchase/free">Get Started</Link>
          </button>
        </li>
        <li className="border-2 border-blue-500 rounded-3xl p-8 flex justify-center flex-col">
          <div>
            <div className="flex flex-row justify-between items-center">
              <h1 className="font-semibold text-xl text-blue-500">Free</h1>
              <div className="font-semibold text-xs text-blue-500 bg-blue-200 px-2 py-1 rounded-xl">
                most popular
              </div>
            </div>
            <p className="mt-4">Essentials to get started.</p>
            <h2 className="font-bold text-3xl mt-4">
              $4
              <span className="font-medium text-sm text-gray-600">/month</span>
            </h2>
            <ul className="mt-6">
              <li className="flex flex-row items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">Entire directory of GPA boosters</p>
              </li>
              <li className="flex flex-row items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">Get notifications for course registration</p>
              </li>
              <li className="flex flex-row items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2 text-blue-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">Feature 3</p>
              </li>
            </ul>
          </div>
          <button className="mt-20 border hover:border-blue-500 transition border-gray-300 text-blue-600 text-sm font-semibold py-2 px-4 rounded-lg">
            <Link href="/purchase">Get Started</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
