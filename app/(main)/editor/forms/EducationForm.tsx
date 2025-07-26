import { EditorFormProps } from "@/lib/type";
import { EducationValues, educationSchema } from "@/lib/validation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const EducationForm = ({ resumeData, setResumeData }: EditorFormProps) => {
  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    
  });
  return <div>EducationForm</div>;
};

export default EducationForm;
