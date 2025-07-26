import { EditorFormProps } from "@/lib/type";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import WorkExperieceForm from "./forms/WorkExperieceForm";
import EducationForm from "./forms/EducationForm";

export const steps: {
  title: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  { title: "General info", component: GeneralInfoForm, key: "general-info" },
  { title: "Personal info", component: PersonalInfoForm, key: "personal-info" },
  {
    title: "Work experience",
    component: WorkExperieceForm,
    key: "work-experience",
  },
  { title: "Education", component: EducationForm, key: "education" },
];
