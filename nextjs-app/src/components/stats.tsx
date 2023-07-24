"use client";
import React from "react";
import { Spacer, Card, Text } from "@nextui-org/react";

export default function StatSection() {
  return (
    <div className="">
      <div className="custom-shape-divider-bottom-1689628894 bg-slate-900">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="py-32 lg:px-64 px-10">
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl lg:text-5xl text-center">
            Did you know?
          </h1>
          <Spacer y={1} />
          <p className="lg:text-lg text-center">
            Here's some statistics about how many GPA boosters there are at UBC.
          </p>
        </div>
        <Spacer y={1} />{" "}
        <ul className="flex flex-row justify-center ">
          <li className="lg:mr-40">
            <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
              1,409
            </h1>
            <Spacer y={0.5} />
            <p className="text-gray-600 text-sm text-center lg:text-md">
              Undergraduate booster courses
            </p>
          </li>
          <li>
            <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
              1,755
            </h1>
            <Spacer y={0.5} />
            <p className="text-gray-600 text-sm text-center lg:text-md">
              Graduate booster courses
            </p>
          </li>
        </ul>
        <Spacer y={5} />
        <div>
          <h2 className="font-bold text-2xl lg:text-4xl text-center">
            To break it down, there are
          </h2>
          <Spacer y={2} />{" "}
          <ul className="flex flex-row justify-between lg:mx-32">
            <li className="">
              <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
                109
              </h1>
              <Spacer y={0.5} />
              <p className="text-gray-600 text-sm text-center lg:text-md">
                100-level courses
              </p>
            </li>
            <li>
              <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
                140
              </h1>
              <Spacer y={0.5} />
              <p className="text-gray-600 text-sm text-center lg:text-md">
                200-level courses
              </p>
            </li>
            <li className="">
              <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
                431
              </h1>
              <Spacer y={0.5} />
              <p className="text-gray-600 text-sm text-center lg:text-md">
                300-level courses
              </p>
            </li>
            <li>
              <h1 className="text-center font-bold text-2xl lg:text-4xl transition text-blue-500">
                729
              </h1>
              <Spacer y={0.5} />
              <p className="text-gray-600 text-sm text-center lg:text-md">
                400-level courses
              </p>
            </li>
          </ul>
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
          ></path>
        </svg>
      </div>
    </div>
  );
}
