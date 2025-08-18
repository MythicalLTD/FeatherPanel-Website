import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.png"
          alt="FeatherPanel - Revolutionary Game Server Management Panel Light as a Feather"
          width={80}
          height={80}
          className="w-20 h-20 dark:invert-0 invert transition-all duration-300"
          priority
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Light as a Feather
        </span>{" "}
        Game Server Management Panel
      </h1>
      
      <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
        FeatherPanel is the revolutionary <strong>Pterodactyl remake</strong> that&#39;s <em>light as a feather</em> yet powerful as a storm. 
        Seamlessly compatible with <strong>Pterodactyl Wings</strong>, <strong>Pelican Wings</strong>, <strong>Wings-rs</strong> and all Wings forks. 
        Built for lightning-fast performance, maximum customization, and native plugin support for <strong>Minecraft servers</strong>, 
        <strong>Discord bots</strong>, and game hosting communities.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" asChild>
          <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer">
            <BookOpen className="w-5 h-5 mr-2" />
            View Documentation
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            Join Discord
          </a>
        </Button>
      </div>
    </section>
  );
}
