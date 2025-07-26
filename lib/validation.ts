import { z } from "zod";

// Custom validation
export const optionString = z.string().trim().optional().or(z.literal(""));

//  Check the regex pattern
function optionalPattern(pattern: RegExp, message: string) {
  return optionString.refine(
    (val) => val === undefined || val === "" || pattern.test(val),
    { message: message },
  );
}

// Schemas
// General info
export const generalInfoSchema = z.object({
  title: optionString,
  description: optionString,
});

//  Personal info
export const personalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      { message: "File must be an image." },
    )
    .refine((file) => !file || file.size <= 1024 * 1024 * 4, {
      message: "File size must be less than 4MB.",
    }),

  firstName: optionString,
  lastName: optionString,
  jobTitle: optionString,
  country: optionString,
  city: optionString,
  phone: optionalPattern(/^\d+$/, "Phone number must only contain digits"),
  email: optionalPattern(/^[^@\s]+@[^@\s]+$/, "Invalid email address"),
});

//  Work experience
export const workExperienceSchema = z.object({
  workExperiences: z
    .array(
      z.object({
        position: optionString,
        company: optionString,
        startDate: optionString,
        endDate: optionString,
        description: optionString,
      }),
    )
    .optional(),
});

//  Education
export const educationSchema = z.object({
  educations: z
    .array(
      z.object({
        degree: optionString,
        school: optionString,
        startDate: optionString,
        endDate: optionString,
      }),
    )
    .optional(),
});

//  Resume
export const resumeSchema = z.object({
  ...generalInfoSchema.shape,
  ...personalInfoSchema.shape,
  ...workExperienceSchema.shape,
  ...educationSchema.shape,
});

// Scema Types
export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;
export type WorkExperienceValues = z.infer<typeof workExperienceSchema>;
export type EducationValues = z.infer<typeof educationSchema>;
export type ResumeValues = Omit<z.infer<typeof resumeSchema>, "photo"> & {
  id?: string;
  photo?: File | string | null;
};
