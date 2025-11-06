import { useEffect, useMemo, useState } from 'react';

function getTimeParts(diffMs) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <div className="text-3xl font-bold tabular-nums">{String(value).padStart(2, '0')}</div>
      <div className="text-xs uppercase tracking-widest text-white/70">{label}</div>
    </div>
  );
}

export default function Countdown({ targetDate }) {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = target - now;
  const { days, hours, minutes, seconds } = getTimeParts(diff);

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Countdown to Launch</h2>
      <p className="text-white/70 max-w-2xl mx-auto mb-10">
        The hunt begins at 8:00 PM on October 31. Rally your team and sharpen your claws.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <TimeBox label="Days" value={days} />
        <TimeBox label="Hours" value={hours} />
        <TimeBox label="Minutes" value={minutes} />
        <TimeBox label="Seconds" value={seconds} />
      </div>
    </div>
  );
}
