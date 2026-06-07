const faqs = [
  {
    q: "How long does a build take?",
    a: "Most builds complete in 3–5 business days from order confirmation and parts availability. Complex water-cooled builds may take a day or two longer.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Every build includes 90 days of personal support — if anything goes wrong with assembly or compatibility, I fix it. Parts carry their manufacturer warranties separately.",
  },
  {
    q: "Can I supply my own parts?",
    a: "Absolutely. Bring your own components and I can assemble and test the system for a flat labor fee.",
  },
  {
    q: "Do you offer local pickup or delivery?",
    a: "Local pickup in Tustin is available. I also ship insured within California. Nationwide shipping available on request.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Zelle, Venmo, cash, and credit card (via invoice). A 50% deposit is required to begin sourcing parts.",
  },
  {
    q: "Can this PC run [game]?",
    a: "Reach out via the contact form with the game and settings you're targeting — I'll match you to the right build or modify an existing one.",
  },
  {
    q: "Do you do upgrades on existing PCs?",
    a: "Yes. GPU swaps, RAM upgrades, SSD additions, and full system refreshes. Contact me with what you have and what you want.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">FAQ</h1>
        <p className="text-gray-400 mb-12">Common questions about builds, service, and process.</p>

        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="card">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
