import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about FeatherPanel.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is FeatherPanel?</AccordionTrigger>
            <AccordionContent>
              FeatherPanel is a revolutionary <strong>game server management panel</strong> that&#39;s <em>light as a feather</em> yet powerful as a storm. 
              It&#39;s a modern remake of Pterodactyl designed specifically for <strong>game server hosting</strong>, <strong>Minecraft servers</strong>, 
              and <strong>Discord bot hosting</strong>. Compatible with existing Wings implementations while providing enhanced customization and native plugin support.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it compatible with existing Pterodactyl setups?</AccordionTrigger>
            <AccordionContent>
              Absolutely! FeatherPanel offers <strong>100% compatibility</strong> with <strong>Pterodactyl Wings</strong>, <strong>Pelican Wings</strong>, 
              <strong>Wings-rs</strong>, and all Wings-related forks. Migration from existing Pterodactyl installations is <em>light as a feather</em> - 
              seamless and requires no configuration changes. Your <strong>game servers</strong> will continue running without interruption.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What makes it different from Pterodactyl?</AccordionTrigger>
            <AccordionContent>
              FeatherPanel focuses on game server hosting with extensive customization options, native plugin support, modern UI, and better performance. It&#39;s built from the ground up for gaming communities.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Can I use it for free?</AccordionTrigger>
            <AccordionContent>
              Yes! The free self-hosted version includes unlimited servers, Wings compatibility, and native plugin support. Premium features and hosted solutions are available for enhanced functionality.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What games are supported?</AccordionTrigger>
            <AccordionContent>
              FeatherPanel supports any game that works with Wings, including <strong>Minecraft servers</strong> (Java, Bedrock, Modded), 
              <strong>Discord bots</strong>, TeamSpeak, Garry&#39;s Mod, CS2, Rust, ARK, and hundreds more. 
              If it runs on Pterodactyl, it runs even better on FeatherPanel with <em>light as a feather</em> performance optimization.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>How do plugins work?</AccordionTrigger>
            <AccordionContent>
              FeatherPanel features a native plugin system that allows you to extend functionality without modifying core code. Plugins can add new features, customize the interface, and integrate with external services.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
