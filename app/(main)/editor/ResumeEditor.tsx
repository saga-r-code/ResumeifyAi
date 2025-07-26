"use client";

import React, { useState } from "react";

import { useSearchParams } from "next/navigation";
import { steps } from "./step";
import BreadCrumbs from "./BreadCrumbs";
import EditorFooter from "./EditorFooter";
import { ResumeValues } from "@/lib/validation";

const ResumeEditor = () => {
  // get the current step from the search params
  const searchparams = useSearchParams();
  const currentStep = searchparams.get("step") || steps[0].key;

  const [resumeData, setResumeData] = useState<ResumeValues>({});

  // set the current step and update the url
  const setStep = (key: string) => {
    const newSearchParamas = new URLSearchParams(searchparams);
    newSearchParamas.set("step", key);
    window.history.pushState(null, "", `?${newSearchParamas.toString()}`);
  };

  // get the Form component that match the current step
  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design Your Resume</h1>
        <p className="text-muted-foreground text-sm">
          Follow the steps below to cr eate a professional resume. Your progress
          will be saved automatically.
        </p>
      </header>

        <main className="relative flex grow">
          <div className="absolute top-0 bottom-0 flex w-full">
            <div className="w-full space-y-6 overflow-y-auto p-3 md:w-1/2">
              <BreadCrumbs currentStep={currentStep} setCurrentStep={setStep} />
              {FormComponent && (
                <FormComponent
                  resumeData={resumeData}
                  setResumeData={setResumeData}
                />
              )}
            </div>
            <div className="grow md:border-r" />
            <div className="hidden w-1/2 md:flex">
              <pre>{JSON.stringify(resumeData, null, 2)}</pre>
            </div>
          </div>
        </main>

      <EditorFooter currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
};

export default ResumeEditor;
