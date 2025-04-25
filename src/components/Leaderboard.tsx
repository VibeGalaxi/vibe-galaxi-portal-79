
import { Award, Users, Star } from "lucide-react";

const leaders = [
  { name: "AndreiX", points: 4120, avatar: "/placeholder.svg", status: "Grand Vibonaut" },
  { name: "MemeQueen", points: 3850, avatar: "/placeholder.svg", status: "Lore Miner" },
  { name: "AlexDrip", points: 3490, avatar: "/placeholder.svg", status: "Early Collector" },
];

const Leaderboard = () => (
  <section id="leaderboard" className="w-full bg-gradient-to-r from-[#1EAEDB]/30 to-[#9b87f5]/20 py-16 px-4">
    <div className="max-w-2xl mx-auto text-center mb-8">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-3 flex justify-center items-center gap-2 drop-shadow-xl">
        <Users size={32} className="text-[#D946EF]" />
        Leaderboard – Top Vibonauts
      </h2>
      <p className="text-white/80 font-montserrat mb-2">Top users receive exclusive badges, secret drops and special roles.</p>
    </div>
    <ul className="flex flex-col gap-4 items-center">
      {leaders.map((user, idx) => (
        <li key={user.name} className={`flex gap-4 items-center glass-morphism w-full max-w-xl px-5 py-4 rounded-xl shadow-xl animate-float border-l-4 border-[#D946EF]/60`}>
          <img src={user.avatar} alt={user.name} className="rounded-full w-14 h-14 object-cover border-4 border-[#9b87f5]/40" />
          <div className="flex-1 text-left">
            <div className="font-orbitron text-lg text-white">{user.name}</div>
            <div className="font-montserrat text-sm text-[#9b87f5]">{user.status}</div>
          </div>
          <div className="flex flex-col items-center">
            <span className="flex items-center font-bold text-xl text-[#D946EF]"><Star size={18} />{user.points}</span>
            {idx === 0 && <Award size={20} className="text-amber-400 animate-pulse" />}
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Leaderboard;
