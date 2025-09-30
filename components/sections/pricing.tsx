import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your <strong>game server hosting</strong> needs. All plans include <strong>Wings compatibility</strong> and are <em>light as a feather</em> on your budget.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Free</CardTitle>
            <CardDescription>Perfect for getting started</CardDescription>
            <div className="text-3xl font-bold">€0<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Self-hosted only</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Unlimited servers</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Wings compatibility</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Community support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Native plugin support</span>
              </li>
            </ul>
            
            <a href="https://docs.mythical.systems" className="w-full">
              <Button variant="outline" className="w-full">Download</Button>
            </a>
          </CardContent>
        </Card>

        {/* Premium Plan */}
        <Card className="border-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Premium</CardTitle>
                <CardDescription>Enhanced features</CardDescription>
              </div>
              <Badge>Popular</Badge>
            </div>
            <div className="text-3xl font-bold">€10<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Everything in Free</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Premium themes</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Advanced customization</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Priority support</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Premium plugins</span>
              </li>
            </ul>
            <a href="https://cloud.mythical.systems" className="w-full">
              <Button className="w-full" asChild>
                <span>Start Free Trial</span>
              </Button>
            </a>
          </CardContent>
        </Card>

        {/* Hosted Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Hosted</CardTitle>
            <CardDescription>Fully managed solution</CardDescription>
            <div className="text-3xl font-bold">€15<span className="text-sm font-normal text-muted-foreground">/month</span></div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Everything in Premium</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Fully hosted panel</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">Automatic updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">99.9% uptime SLA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-4 h-4" />
                <span className="text-sm">24/7 monitoring</span>
              </li>
            </ul>
            <a href="https://cloud.mythical.systems" className="w-full">
              <Button className="w-full" asChild>
                <span>Get Started</span>
              </Button>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
