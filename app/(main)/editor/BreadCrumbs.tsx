import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { EditorBreadcrumbsProps } from "@/lib/type";
import React from "react";
import { steps } from "./step";

const BreadCrumbs = ({
  currentStep,
  setCurrentStep,
}: EditorBreadcrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {steps.map((step) => (
          <React.Fragment key={step.key}>
            <BreadcrumbItem>
              {step.key === currentStep ? (
                <BreadcrumbPage>{step.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <button onClick={() => setCurrentStep(step.key)}>
                    {step.title}
                  </button>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator className="last:hidden" />
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
