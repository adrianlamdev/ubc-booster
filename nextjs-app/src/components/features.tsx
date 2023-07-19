/* eslint react/no-unescaped-entities */

import React from "react";

import ListBulletIcon from "@heroicons/react/24/outline/ListBulletIcon";
import BellAlertIcon from "@heroicons/react/24/outline/BellAlertIcon";

const features = [
  {
    featureName: "List of GPA Boosters.",
    featureDescription: "Get a list of GPA boosters at UBC.",
    featureImage: <ListBulletIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    featureName: "Notifications.",
    featureDescription:
      "Receive email or text notifications when a seat opens up in a course.",
    featureImage: <BellAlertIcon className="h-6 w-6 text-blue-600" />,
  },
  {
    featureName: "Feature 3",
    featureDescription: "Feature 3 description",
  },
];

export default function Features() {
  return (
    <div className="bg-slate-900 min-h-screen py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-3xl lg:text-5xl">Features</h1>
        <p className="mt-2 text-gray-400 lg:text-lg">
          Here's a list of features that we offer.
        </p>
      </div>
      <ul className="flex flex-col mt-4">
        {features.map((feature, index) => (
          <li key="feature" className="flex flex-row mt-6">
            {feature.featureImage}
            <div className="ml-2 flex flex-col">
              <h2 className="text-blue-500 font-bold text-lg">
                {feature.featureName}
              </h2>
              <p className="text-gray-400">{feature.featureDescription}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
