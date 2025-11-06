import Spline from '@splinetool/react-spline';
import { Ghost, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/fvh1rcczCU4MCcKH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black pointer-events-none" />

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Ghost className="w-6 h-6 text-purple-300" />
            <span className="uppercase tracking-widest text-sm text-purple-200/80">Halloween CTF 2025</span>
            <Shield className="w-6 h-6 text-purple-300" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            Enter the Forest. Capture the Flag.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            A one-night hacking gauntlet under a dark, minimalist 3D sky. Form a squad, break the puzzles, claim the glory.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#countdown" className="inline-flex items-center gap-2 rounded-full bg-purple-600 hover:bg-purple-500 transition-colors px-6 py-3 font-semibold shadow-lg shadow-purple-900/40">
              Get Ready
            </a>
            <a href="#challenges" className="inline-flex items-center gap-2 rounded-full border border-white/20 hover:border-white/40 transition-colors px-6 py-3 font-semibold">
              View Challenge Tracks
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
