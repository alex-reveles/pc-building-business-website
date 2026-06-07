import Link from "next/link";
import { Cpu, Shield, Zap, Clock } from "lucide-react";
import BuildCard from "@/components/BuildCard";
import { featuredBuild } from "@/lib/builds";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-brand-900 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/30 via-transparent to-transparent" />
        <div className="relative text-center max-w-4xl mx-auto">
          <p className="text-brand-500 font-mono text-sm uppercase tracking-widest mb-4">
            Custom PC Building — Tustin, CA
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Dream PC,{" "}
            <span className="text-brand-500">Built Right</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Hand-assembled gaming and workstation PCs. Every build is cable
            managed, stress-tested, and backed by a personal warranty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/builds/featured" className="btn-primary text-lg">
              See Our Featured Build
            </Link>
            <Link href="/contact" className="btn-outline text-lg">
              Request a Custom Build
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Why Choose AlexBuilds?</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Not a big box store. Not a drop-shipper. A real builder who cares
            about your experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Cpu,
                title: "Quality Parts",
                desc: "Sourced fresh from Micro Center — only in-stock, current-gen components.",
              },
              {
                icon: Shield,
                title: "Personal Warranty",
                desc: "Every build includes hands-on support. You're not alone after purchase.",
              },
              {
                icon: Zap,
                title: "Stress Tested",
                desc: "Every PC runs 24hr stability tests before it ships to you.",
              },
              {
                icon: Clock,
                title: "Fast Turnaround",
                desc: "Most builds complete in 3–5 business days from order confirmation.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-brand-500/10 p-3 rounded-lg">
                    <Icon className="text-brand-500 w-7 h-7" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Build */}
      <section className="py-24 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Featured Build</h2>
          <p className="text-gray-400 text-center mb-12">
            Ready to order. Parts verified in-stock at Micro Center Tustin.
          </p>
          <div className="flex justify-center">
            <BuildCard build={featuredBuild} featured />
          </div>
          <div className="text-center mt-10">
            <Link href="/builds/featured" className="btn-primary">
              View Full Specs &amp; Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-brand-900/20 border-y border-brand-900/40">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Ready to Get Started?</h2>
          <p className="text-gray-400 text-lg mb-8">
            Have a specific budget or use case in mind? Reach out — I&apos;ll
            put together a custom build recommendation at no cost.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Get a Free Build Recommendation
          </Link>
        </div>
      </section>
    </>
  );
}
