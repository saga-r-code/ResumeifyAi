"use client";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { CreditCard } from "lucide-react";
import ThemeToggle from "../components/ui/ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

const Navbar = () => {
  
  const { theme } = useTheme();

  return (
    <div className="border-b shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3">
        <Link href="/resumes" className="flex items-center justify-center">
          <Image src={logo} alt="ResumeifyAi" width={50} height={50} />
          <span className="text-xl font-bold tracking-tight">ResumeifyAi</span>
        </Link>
        <div className="flex items-center justify-center gap-3">
          <ThemeToggle />
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
              elements: {
                avatarBox: {
                  width: 35,
                  height: 35,
                },
              },
            }}
          >
            <UserButton.MenuItems>
              <UserButton.Link
                label="Billing"
                href="/billing"
                labelIcon={<CreditCard size={16} />}
              />
            </UserButton.MenuItems>
          </UserButton>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
