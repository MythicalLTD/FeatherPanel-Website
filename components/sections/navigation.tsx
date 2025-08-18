"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BookOpen, Github, MessageCircle, Activity } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="FeatherPanel - Light as a Feather Game Server Management Panel Logo"
            width={32}
            height={32}
            className="w-8 h-8 dark:invert-0 invert transition-all duration-300"
            priority
          />
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">FeatherPanel</span>
            <span className="text-xs text-muted-foreground hidden md:block">by MythicalSystems</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" asChild>
            <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer">
              <BookOpen className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Documentation</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href="https://status.mythical.systems" target="_blank" rel="noopener noreferrer">
              <Activity className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Status</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://github.com/mythicalltd" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
