import { Calendar, MapPin, Trophy, Skull } from 'lucide-react';

export default function EventDetails() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
          <Skull className="w-6 h-6 text-purple-400" /> What to Expect
        </h3>
        <p className="text-white/80 leading-relaxed">
          A moody, next-gen capture the flag experience with carefully crafted challenges across web, crypto, reversing, and OSINT. Expect ambient soundscapes, elegant puzzles, and a competitive scoreboard that updates in real-time. Costumes optional — swagger required.
        </p>
        <ul className="mt-6 space-y-3 text-white/80">
          <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400" /> Beginner-friendly on-ramps for each track</li>
          <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400" /> Solo or up to 4-person squads</li>
          <li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-400" /> Live hints and lore drops during the night</li>
        </ul>
      </div>
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
        <h4 className="font-semibold uppercase tracking-widest text-xs text-white/60 mb-4">Event Info</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-purple-300" />
            <span>Oct 31, 8:00 PM — Nov 1, 2:00 AM</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-purple-300" />
            <span>Online + Secret Afterparty</span>
          </div>
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-purple-300" />
            <span>Top 3 teams win limited trophies and swag</span>
          </div>
        </div>
        <a href="#register" className="mt-6 inline-flex items-center justify-center w-full rounded-xl bg-purple-600 hover:bg-purple-500 transition-colors px-5 py-3 font-semibold shadow-lg shadow-purple-900/40">Register Interest</a>
      </div>
    </div>
  );
}
