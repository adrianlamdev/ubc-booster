"use client"

import { Spacer } from "@nextui-org/react"


export default function GpaBoosterPage() {
  return (
    <div className="bg-slate-900 py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="text-white font-bold text-3xl lg:text-5xl">List of GPA boosters.</h1>
        <Spacer y={1} />
        <p className="text-gray-400 lg:text-lg">
          Here's a list of features that we offer.
        </p>
      </div>
    </div>
  )
}


