import { featuredBuild } from "@/lib/builds";
import BuildCard from "@/components/BuildCard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const builds: Record<string, typeof featuredBuild> = {
  featured: featuredBuild,
};

// Pre-render these routes at build time (required for static export)
export function generateStaticParams() {
  return Object.keys(builds).map((id) => ({ id }));
}

export const dynamicParams = false;

export default async function BuildPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const build = builds[id];
  if (!build) notFound();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-950">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <BuildCard build={build} featured />

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link href="/contact" className="btn-primary text-center">
            Order This Build
          </Link>
          <Link href="/contact" className="btn-outline text-center">
            Request a Modification
          </Link>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          Parts availability verified against Micro Center Tustin.
          Pricing subject to change based on current stock.
        </p>
      </div>
    </div>
  );
}
