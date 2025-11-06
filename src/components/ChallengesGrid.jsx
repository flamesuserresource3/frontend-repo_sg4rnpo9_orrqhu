import { Lock, Globe, CircuitBoard, Bug, Puzzle } from 'lucide-react';

const tracks = [
  {
    icon: Globe,
    title: 'Web Exploitation',
    desc: 'Dive into modern web stacks, from CSP bypasses to sneaky SSRF and deserialization tricks.',
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    icon: CircuitBoard,
    title: 'Reversing',
    desc: 'Untangle binaries, peel obfuscation, and make the machine sing your tune.',
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    icon: Lock,
    title: 'Crypto',
    desc: 'Elegant math meets mischief — break schemes, forge proofs, claim flags.',
    color: 'from-orange-500/20 to-orange-500/5',
  },
  {
    icon: Bug,
    title: 'Forensics',
    desc: 'Trace the whispers in the files — PCAP, memory, logs, and the ghosts between.',
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: Puzzle,
    title: 'OSINT',
    desc: 'Hunt in the open — connect fragments, follow trails, and outwit the mask.',
    color: 'from-pink-500/20 to-pink-500/5',
  },
];

export default function ChallengesGrid() {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold mb-8">Challenge Tracks</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map(({ icon: Icon, title, desc, color }) => (
          <div key={title} className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden`}> 
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className="relative p-6 h-full flex flex-col gap-3">
              <Icon className="w-6 h-6 text-white/80" />
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-white/70 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
