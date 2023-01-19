import { Plus } from "phosphor-react";

import logoImg from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />
      <button
        type="button"
        className="border flex gap-2 border-violet-500 font-semibold rounded-lg px-5 py-3 items-center hover:bg-violet-700 hover:text-white text-violet-500 transition-colors"
      >
        <Plus size={20} />
        <span className="text-white">Novo hábito</span>
      </button>
    </header>
  );
}
