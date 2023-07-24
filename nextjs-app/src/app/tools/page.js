"use client";

import { Spacer, Link } from "@nextui-org/react";

export default function ToolsPage() {
  return (
    <div className="py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl">Tools</h1>
        <Spacer y={1} />
        <p className="lg:text-lg">
            Here's a list of course tools that you can use to help you with your courses.
        </p>
      </div>
      <ul className="flex justify-between ">
        <li className="border border-gray-400 rounded-lg px-2">
            <Link href="/tools/gpa-boosters">GPA Boosters</Link>
        </li>
        <li>
            <Link href="/tools/course-notifier">Course Notifier</Link>
        </li>
      </ul>
    </div>
  );
}
