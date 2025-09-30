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

      <div className="max-w-4xl mx-auto space-y-10">
        {/* New Section: Install FeatherPanel Canary */}
        <Card className="border-green-200 dark:border-green-800 shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 p-1">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <CardTitle className="text-green-800 dark:text-green-200">Install FeatherPanel Canary</CardTitle>
            </div>
            <CardDescription>
              <span className="text-green-700 dark:text-green-300">
                Try the <strong>FeatherPanel Canary</strong> version now! Get a sneak peek at the latest features and help us test the future of game server management.
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-md border border-green-200 dark:border-green-800">
              <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">Quick Install (Linux)</h4>
              <div className="bg-black/80 text-green-200 font-mono text-xs rounded px-4 py-3 mb-2 select-all overflow-x-auto">
                curl -sSL https://get.featherpanel.com/canary.sh | bash
              </div>
              <p className="text-xs text-green-700 dark:text-green-300">
                <strong>Note:</strong> Canary builds are experimental and may be unstable. For testing and preview only.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="default" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://docs.mythical.systems" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Canary Docs
                </a>
              </Button>
              <Button variant="outline" className="justify-start" asChild>
                <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Support
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Existing Section: Development Notice */}
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
                <li><strong>Native plugin system</strong> architecture in progress: New UI Framework in progress, Drag and drop plugin builder!</li>
                <li><strong>Enterprise-grade security</strong> features being hardened: Password less login, Backups</li>
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
