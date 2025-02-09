import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background">
      <div className="container px-4 md:px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our newsletter
          </h3>
          <div className="flex gap-2 max-w-md">
            <Input type="email" placeholder="Enter your email" />
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Link href={link.href} className="hover:text-primary">
                          {link.title}
                        </Link>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">
                            {link.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 MyWebsite. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerSections = [
  {
    title: "About",
    links: [
      {
        title: "About Us",
        href: "/about",
        description: "Learn more about our company and mission",
      },
      {
        title: "Careers",
        href: "/careers",
        description: "Join our team and grow with us",
      },
      {
        title: "Press",
        href: "/press",
        description: "Latest news and media coverage",
      },
    ],
  },
  // Add other sections similarly
];
