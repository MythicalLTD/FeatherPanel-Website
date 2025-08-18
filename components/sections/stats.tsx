export function StatsSection() {
  return (
    <section className="container mx-auto px-6 py-24 text-center" id="performance">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Light as a Feather
        </span>{" "}
        Performance Stats
      </h2>
      <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">
        See why FeatherPanel is the fastest, most lightweight game server management panel ever created
      </p>
      
      <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        <div className="space-y-4">
          <div className="text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
            204x
          </div>
          <div className="text-2xl font-semibold">lighter than competitors</div>
          <p className="text-sm text-muted-foreground">Minimal resource usage means more power for your game servers</p>
        </div>
        <div className="space-y-4">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
            22x
          </div>
          <div className="text-2xl font-semibold">faster loading</div>
          <p className="text-sm text-muted-foreground">Lightning-fast interface that loads in milliseconds</p>
        </div>
        <div className="space-y-4">
          <div className="text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            99.9%
          </div>
          <div className="text-2xl font-semibold">uptime guarantee</div>
          <p className="text-sm text-muted-foreground">Rock-solid reliability for mission-critical gaming infrastructure</p>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground mt-12 max-w-4xl mx-auto leading-relaxed">
        Built from the ground up with modern technologies, FeatherPanel delivers <strong>feather-light performance</strong> 
        without sacrificing functionality. Experience the future of <strong>game server management</strong> with a panel 
        that&#39;s truly <em>light as a feather</em>, <em>fast as lightning</em>.
      </p>
    </section>
  );
}
