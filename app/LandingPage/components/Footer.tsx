import { FileText } from "lucide-react";
import React, { createElement } from "react";
import Link from "next/link";
import { footerData } from "@/app/constant";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-xl font-bold text-transparent">
                ResumeAI
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Build professional resumes with the power of AI.
            </p>
          </div>

          {footerData.links.map((link) => (
            <div key={link.title}>
              <h4 className="mb-4 font-semibold">{link.title}</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
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

        <div className="text-muted-foreground mt-8 flex justify-between border-t pt-6 text-center text-sm">
          <Link
            href="https://shah-sagar.netlify.app"
            target="_blank"
            className="text-base"
          >
            {footerData.copyright}
          </Link>
          <ul className="flex gap-5">
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
