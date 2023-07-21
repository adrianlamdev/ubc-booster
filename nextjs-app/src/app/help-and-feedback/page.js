"use client";

import { Collapse, Spacer, Link, Button } from "@nextui-org/react";
import Image from "next/image";

export default function HelpFeedbackPage() {
  return (
    <div className="">
      <div className="px-10 py-32 lg:px-64">
        <h1 className="text-3xl lg:text-5xl font-bold">Help and Feedback</h1>
        <Spacer y={1} />
        <p className="lg:text-lg">
          Here's some frequently asked questions. Feel free to contact us if you
          have any other questions.
        </p>
        <Collapse.Group className="mt-4">
          <Collapse title="Are you affiliated with UBC or UBC Grades?">
            <p>
              No, we are not affiliated with UBC or UBC Grades. Check out UBC
              Grades{" "}
              <Link isExternal href="https://ubcgrades.com">
                here
              </Link>
              .
            </p>
          </Collapse>
          <Collapse title="Why did you create this site?">
            <p>
              We created this site because as UBC students, we were curious what
              the best GPA boosting courses were. We also wanted to create a
              site that was easy to use and receive notifications if a course
              had open spots.
            </p>
          </Collapse>
          <Collapse title="How can I help/contribute?">
            <p>
              Currently, this site isn't open source. However, if you have any
              suggestions or feedback, feel free to contact us using the form
              below.
            </p>
          </Collapse>
          <Collapse title="What technologies were used for this site?">
            <p>
              This site was built using{" "}
              <Link isExternal href="https://nextjs.org/">
                Next.js
              </Link>
              ,{" "}
              <Link isExternal href="https://tailwindcss.com/">
                Tailwind CSS
              </Link>
              ,{" "}
              <Link isExternal href="https://planetscale.com/">
                Planet Scale
              </Link>
              ,
              <Link isExternal href="https://vercel.com/">
                Vercel
              </Link>
              , <Link href="https://prisma.io/">Prisma</Link>, and{" "}
              <Link isExternal href="https://clerk.dev">
                Clerk
              </Link>
              .
            </p>
          </Collapse>
        </Collapse.Group>
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
      <div className="bg-slate-900 px-10 py-32 lg:px-64">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          Contact Us
        </h1>
        <Spacer y={1} />
        <p className="lg:text-lg text-gray-400">
          Have any questions, feedback, or suggestions?
        </p>
        <Spacer y={1} />
        <div className="flex justify-center lg:flex-row lg:items-center lg:justify-between">
          <form className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex flex-col">
                <label className="text-white">Full Name</label>
                <Spacer y={0.25} />
                <input
                  className="rounded-md bg-slate-800 text-white px-4 py-2"
                  type="text"
                  placeholder="John Doe"
                />
              </div>
              <Spacer y={0.75} />
              <div className="flex flex-col">
                <label className="text-white">Email</label>
                <Spacer y={0.25} />
                <input
                  className="rounded-md bg-slate-800 text-white px-4 py-2"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <Spacer y={0.75} />
              <div className="flex flex-col">
                {/* MAKE THIS DROPDOWN MENU */}
                <label className="text-white">Subject</label>
                <Spacer y={0.25} />
                <input
                  className="rounded-md bg-slate-800 text-white px-4 py-2"
                  type="text"
                  placeholder="Question"
                />
              </div>
              <Spacer y={0.75} />
              <div className="flex flex-col">
                <label className="text-white">Message</label>
                <Spacer y={0.25} />
                <textarea
                  className="rounded-md bg-slate-800 text-white px-4 py-2"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
            <Spacer y={1} />
            <button className="rounded-md bg-blue-600 hover:bg-blue-500 transition text-white px-4 py-2">
              Submit
            </button>
          </form>
          <div className="hidden lg:flex">IMAGE</div>
        </div>
      </div>
    </div>
  );
}
