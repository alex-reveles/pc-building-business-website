import Link from "next/link";
import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg mb-3">
              <Cpu className="text-brand-500 w-5 h-5" />
              AlexBuilds<span className="text-brand-500">PC</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hand-built custom PCs in La Puente, CA. Quality parts, clean builds,
              personal service.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["/builds/featured", "Featured Build"],
                ["/about", "About"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["/terms", "Terms of Service"],
                ["/privacy", "Privacy Policy"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} AlexBuildsPC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
