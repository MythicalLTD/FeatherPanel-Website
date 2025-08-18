import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Settings, Puzzle, Package, Code } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id="features" className="container mx-auto px-6 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <CardTitle>100% Wings Compatible</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Seamless compatibility with Pterodactyl Wings, Pelican Wings, Wings-rs and all Wings forks. 
              Migration is light as a feather - no configuration changes needed.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Puzzle className="w-6 h-6" />
            </div>
            <CardTitle>Native Plugin Support</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built-in plugin system allows you to extend functionality without modifying core code.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <CardTitle>Game Panel Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Specifically designed for game server hosting with features tailored for gaming communities.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <CardTitle>Light as a Feather Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Built with cutting-edge web technologies for feather-light resource usage and lightning-fast response times. 
              Your game servers will thank you.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Settings className="w-6 h-6" />
            </div>
            <CardTitle>Highly Customizable</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Extensive customization options for themes, layouts, and functionality to match your brand.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6" />
            </div>
            <CardTitle>Open Source</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Fully open source with an active community. Contribute, modify, and extend as needed.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
