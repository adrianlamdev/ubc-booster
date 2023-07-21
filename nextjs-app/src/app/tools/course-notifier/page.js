"use client";

import { Spacer } from "@nextui-org/react";

export default function CourseNotifierPage() {
  return (
    <div className="py-32 lg:px-64 px-10">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-5xl">Course Notifier</h1>
        <Spacer y={1} />
        <p className="lg:text-lg">
          Receive a notification when a course you want to take becomes
          available. We'll notify you by either email or text message.
        </p>
      </div>
    </div>
  );
}
