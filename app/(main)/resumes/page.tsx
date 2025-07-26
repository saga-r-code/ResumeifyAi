import React from "react";
import { Metadata } from "next";
import { Button } from "@/app/components/ui/button";
import { PlusSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Resumes",
};

const Page = () => {
  return (
    <main className="mx-auto max-w-7xl p-5">
      <Button asChild className="mx-auto flex w-fit gap-2">
        <Link href="/editor">
          <PlusSquare size={20} />
          New Resume
        </Link>
      </Button>
    </main>
  );
};

export default Page;
