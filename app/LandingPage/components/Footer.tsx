import { FileText } from "lucide-react";
import React, { createElement } from "react";
import { footerData } from "@/app/constant";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ResumeAI
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Build professional resumes with the power of AI.
            </p>
          </div>

          {footerData.links.map((link) => (
            <div key={link.title}>
              <h4 className="font-semibold mb-4">{link.title}</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {link.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between border-t mt-8 pt-6 text-center text-muted-foreground text-sm">
          <Link
            href="https://shah-sagar.netlify.app"
            target="_blank"
            className="text-base"
          >
            {footerData.copyright}
          </Link>
          <ul className="flex gap-5 ">
            {footerData.socialLinks.map((socialLink, index) => (
              <li key={index}>
                <Link
                  href={socialLink.href}
                  target="_blank"
                  aria-label={`Link to ${socialLink.href}`}
                >
                  {createElement(socialLink.icon, {
                    size: 24,
                    className: socialLink.style,
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
