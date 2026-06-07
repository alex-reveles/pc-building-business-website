import { Build } from "@/lib/builds";
import { CheckCircle, XCircle } from "lucide-react";

interface Props {
  build: Build;
  featured?: boolean;
}

export default function BuildCard({ build, featured = false }: Props) {
  const partTotal = build.components.reduce((sum, c) => sum + c.price, 0);
  const laborAndWarranty = build.price - partTotal;

  return (
    <div
      className={`card max-w-2xl w-full ${
        featured ? "border-brand-500/50 shadow-lg shadow-brand-500/10" : ""
      }`}
    >
      {featured && (
        <div className="inline-block bg-brand-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
          Featured Build
        </div>
      )}

      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-2xl font-bold text-white">{build.name}</h3>
          <p className="text-brand-500 text-sm mt-1">{build.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-white">${build.price.toLocaleString()}</p>
          <div className="flex items-center gap-1 justify-end mt-1">
            {build.inStock ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-xs font-medium">Parts In Stock</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-red-400" />
                <span className="text-red-400 text-xs font-medium">Check Availability</span>
              </>
            )}
          </div>
        </div>
      </div>

      <p className="text-gray-400 text-sm mb-6">{build.description}</p>

      {/* Use cases */}
      <div className="flex flex-wrap gap-2 mb-6">
        {build.useCase.map((u) => (
          <span key={u} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
            {u}
          </span>
        ))}
      </div>

      {/* Components */}
      <div className="mb-6">
        <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
          Components
        </h4>
        <div className="space-y-2">
          {build.components.map((c) => (
            <div key={c.category} className="flex justify-between text-sm">
              <span className="text-gray-500 w-28 shrink-0">{c.category}</span>
              <span className="text-gray-300 flex-1">{c.name}</span>
              <span className="text-gray-400 ml-4">${c.price}</span>
            </div>
          ))}
          <div className="border-t border-gray-800 pt-2 flex justify-between text-sm">
            <span className="text-gray-500">Assembly &amp; Warranty</span>
            <span className="text-gray-400">${laborAndWarranty}</span>
          </div>
        </div>
      </div>

      {/* Benchmarks */}
      {build.benchmarks.length > 0 && (
        <div>
          <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
            Expected Performance
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {build.benchmarks.map((b) => (
              <div key={b.game} className="bg-gray-800 rounded-lg p-3">
                <p className="text-xs text-gray-500 mb-1">{b.game}</p>
                <p className="text-green-400 font-bold text-sm">{b.fps}</p>
                <p className="text-gray-500 text-xs">{b.settings}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
