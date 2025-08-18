import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MessageCircle, BookOpen, Github } from "lucide-react";

export function InstallationSection() {
  return (
    <section className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Get Started with FeatherPanel</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The <strong>light as a feather game server management panel</strong> is currently under heavy development. 
          Join our community to get early access to this revolutionary <strong>Pterodactyl alternative</strong>.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-amber-200 dark:border-amber-800">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <CardTitle className="text-amber-800 dark:text-amber-200">Development Notice</CardTitle>
            </div>
            <CardDescription>
              FeatherPanel is currently under heavy development and is not yet available for public release.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-md border border-amber-200 dark:border-amber-800">
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200">Development Status</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-amber-700 dark:text-amber-300">
                <li><strong>Game server management</strong> core functionality in development</li>
                <li><strong>Pterodactyl Wings compatibility</strong> layer being implemented</li>
                <li><strong>Native plugin system</strong> architecture in progress</li>
                <li><strong>Enterprise-grade security</strong> features being hardened</li>
                <li><strong>Minecraft server hosting</strong> optimizations being fine-tuned</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord Server
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://github.com/mythicalltd" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Follow on GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Resources</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Documentation
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://status.mythical.systems" target="_blank" rel="noopener noreferrer">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Status Page
                  </a>
                </Button>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm text-muted-foreground">
                <strong>Want early access to the most advanced game server panel?</strong> Join our Discord server to be notified when beta testing begins. 
                Help us shape the future of <strong>game server management</strong> with a panel that&#39;s truly <em>light as a feather</em> 
                yet more powerful than any <strong>Pterodactyl alternative</strong>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
