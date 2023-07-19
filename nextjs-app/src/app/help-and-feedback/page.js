"use client";

import { Collapse, Spacer } from "@nextui-org/react";

export default function HelpFeedbackPage() {
  return (
    <div className="min-h-screen px-10 py-32 lg:px-64">
      <h1 className="text-3xl lg:text-5xl font-bold">Help and Feedback</h1>
      <Spacer y={1} />
      <p className="lg:text-lg">
        Here's some frequently asked questions. Feel free to contact us if you
        have any other questions.
      </p>
      <Collapse.Group className="mt-4">
        <Collapse title="Option A">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Collapse>
        <Collapse title="Option B">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Collapse>
        <Collapse title="Option C">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}
