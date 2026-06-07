import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-gray-950">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-6">About AlexBuildsPC</h1>

        <div className="prose prose-invert max-w-none space-y-5 text-gray-300 leading-relaxed">
          <p>
            Hi, I&apos;m Alex — a PC builder based in Tustin, CA. I started
            building computers because I was tired of paying retail markups for
            pre-builts that were poorly assembled, overheated, and came with no
            real support.
          </p>
          <p>
            Every PC I build is sourced from Micro Center right here in Tustin
            — fresh inventory, current-gen parts, no old stock. I handle the
            cable management, apply proper thermal paste, run full stability
            tests, and make sure your machine is dialed in before it ever
            leaves my hands.
          </p>
          <p>
            When you buy from AlexBuildsPC, you get a direct line to me — not a
            ticket queue or a chatbot. If something goes wrong, I&apos;ll make it
            right.
          </p>
          <p>
            Whether you want a 1080p gaming rig, a high-refresh esports
            machine, a silent workstation, or a video editing beast — I can
            build it.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/contact" className="btn-primary">
            Start Your Build
          </Link>
        </div>
      </div>
    </div>
  );
}
