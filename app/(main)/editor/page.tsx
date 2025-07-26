import React, { Suspense } from "react";
import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Design Your Resume",
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResumeEditor />
    </Suspense>
  );
};

export default Page;
