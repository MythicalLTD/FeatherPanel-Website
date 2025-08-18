import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Monitor, Smartphone, Zap, Shield } from "lucide-react";

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
        <Tabs defaultValue="panel1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="panel1" className="flex items-center space-x-2">
              <Monitor className="w-4 h-4" />
              <span>Server Management</span>
            </TabsTrigger>
            <TabsTrigger value="panel2" className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4" />
              <span>Dashboard Overview</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="panel1" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Monitor className="w-5 h-5" />
                      <span>Server Management Interface</span>
                    </CardTitle>
                    <CardDescription>
                      Powerful <strong>Pterodactyl Wings</strong> compatible server controls with feather-light performance
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>Lightning Fast</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Shield className="w-3 h-3" />
                      <span>Secure</span>
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden bg-muted/50">
                  <Image
                    src="/demo/panel2.png"
                    alt="FeatherPanel Server Management Interface - Pterodactyl Wings Compatible Game Server Control Panel"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Real-time server monitoring</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Wings compatibility layer</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Native plugin support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="panel2" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Smartphone className="w-5 h-5" />
                      <span>Dashboard Overview</span>
                    </CardTitle>
                    <CardDescription>
                      Clean, intuitive dashboard for managing <strong>Minecraft servers</strong> and <strong>game hosting</strong> infrastructure
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Monitor className="w-3 h-3" />
                      <span>Responsive</span>
                    </Badge>
                    <Badge variant="outline" className="flex items-center space-x-1">
                      <Zap className="w-3 h-3" />
                      <span>204x Lighter</span>
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden bg-muted/50">
                  <Image
                    src="/demo/panel1.png"
                    alt="FeatherPanel Dashboard Overview - Lightweight Game Server Management Panel for Minecraft and Discord Bots"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Comprehensive analytics</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Resource optimization</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Multi-server management</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
      </div>
    </section>
  );
}
