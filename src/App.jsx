import Hero from './components/Hero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import ChallengesGrid from './components/ChallengesGrid';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />

      <main className="relative z-10">
        <section id="countdown" className="container mx-auto px-6 py-20">
          <Countdown targetDate={new Date(new Date().getFullYear(), 9, 31, 20, 0, 0)} />
        </section>

        <section id="about" className="container mx-auto px-6 py-20">
          <EventDetails />
        </section>

        <section id="challenges" className="container mx-auto px-6 py-20">
          <ChallengesGrid />
        </section>
      </main>
    </div>
  );
}

export default App;
