import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, MessageCircle, BookOpen, Activity, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="FeatherPanel - Game Server Management Panel Logo"
                width={24}
                height={24}
                className="w-6 h-6 dark:invert-0 invert transition-all duration-300"
              />
              <div>
                <h3 className="font-bold text-lg">FeatherPanel</h3>
                <p className="text-sm text-muted-foreground">Modern Pterodactyl remake</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A next-generation game server management panel built for speed, customization, and compatibility.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">Powered by</span>
              <Button variant="link" className="h-auto p-0 text-sm" asChild>
                <a href="https://mythical.systems" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                  <span className="font-semibold">MythicalSystems</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>Documentation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://status.mythical.systems" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>Status Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://mythical.systems" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>MythicalSystems</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li>
                <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>Discord Server</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/mythicalltd" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                <a href="https://github.com/mythicalltd" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="w-8 h-8" asChild>
                <a href="https://status.mythical.systems" target="_blank" rel="noopener noreferrer">
                  <Activity className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span>&copy; 2025 FeatherPanel</span>
            <span>•</span>
            <span>Proudly made by <a href="https://www.mythical.systems" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">MythicalSystems</a></span>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.mythical.systems/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="https://www.mythical.systems/terms" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
