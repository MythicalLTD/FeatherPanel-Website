"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Monitor, Smartphone, Zap, Shield, Terminal, Plug, UserCog, Wand2, User, X, ChevronLeft, ChevronRight, Folder } from "lucide-react";

export function PanelPreview() {
  return (
    <section className="container mx-auto px-6 py-24" id="preview">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          See FeatherPanel in Action
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience the <strong>light as a feather</strong> interface that makes <strong>game server management</strong> effortless. 
          Built for <strong>Minecraft servers</strong>, <strong>Discord bots</strong>, and all your game hosting needs.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {(() => {
          const items = [
            { src: "/demo/panel1.png", title: "Dashboard Overview", Icon: Smartphone },
            { src: "/demo/panel2.png", title: "Server Management & Console", Icon: Monitor },
            { src: "/demo/panel3.png", title: "Plugin Manager", Icon: Plug },
            { src: "/demo/panel4.png", title: "Roles & Permissions", Icon: UserCog },
            { src: "/demo/panel5.png", title: "Spells Repository", Icon: Wand2 },
            { src: "/demo/panel6.png", title: "Account & Customization", Icon: User },
            { src: "/demo/panel7.png", title: "System Wide File Manager", Icon: Folder },
          ];

          function Gallery() {
            const [index, setIndex] = useState<number | null>(null);
            const open = useCallback((i: number) => setIndex(i), []);
            const close = useCallback(() => setIndex(null), []);
            const prev = useCallback(() => setIndex((i) => (i === null ? i : (i + items.length - 1) % items.length)), []);
            const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % items.length)), []);

            useEffect(() => {
              if (index === null) return;
              const onKey = (e: KeyboardEvent) => {
                if (e.key === "Escape") close();
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
              };
              window.addEventListener("keydown", onKey);
              return () => window.removeEventListener("keydown", onKey);
            }, [index, close, prev, next]);

            return (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, i) => (
                    <Card key={item.src} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => open(i)}>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center space-x-2 text-base">
                          <item.Icon className="w-4 h-4" />
                          <span>{item.title}</span>
                        </CardTitle>
                        <CardDescription>Click to preview</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="rounded-lg border overflow-hidden bg-muted/50">
                          <Image src={item.src} alt={item.title} width={1200} height={800} className="w-full h-auto" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {index !== null && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center" role="dialog" aria-modal="true">
                    <button aria-label="Close" className="absolute top-4 right-4 text-white/80 hover:text-white" onClick={close}>
                      <X className="w-6 h-6" />
                    </button>
                    <button aria-label="Previous" className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" onClick={prev}>
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button aria-label="Next" className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" onClick={next}>
                      <ChevronRight className="w-8 h-8" />
                    </button>
                    <div className="max-w-6xl w-full px-6">
                      <div className="rounded-lg overflow-hidden">
                        <Image src={items[index].src} alt={items[index].title} width={1600} height={1000} className="w-full h-auto" priority />
                      </div>
                      <div className="mt-3 text-center text-white/90 text-sm flex items-center justify-center space-x-2">
                        {(() => {
                          const ActiveIcon = items[index].Icon;
                          return <ActiveIcon className="w-4 h-4" />;
                        })()}
                        <span>{items[index].title}</span>
                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          }

          return <Gallery />;
        })()}
      </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Experience the future of <strong>game server management</strong> with a panel that&#39;s truly <em>light as a feather</em>
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <span>100% <strong>Pterodactyl Wings</strong> compatible</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <span>Perfect for <strong>Minecraft hosting</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-current rounded-full"></div>
              <span>Built by <strong>MythicalSystems</strong></span>
            </div>
          </div>
        </div>
    </section>
  );
}
