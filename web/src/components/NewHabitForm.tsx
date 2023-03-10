import { Check } from "phosphor-react";

export default function NewHabitForm() {
  return (
    <form className="w-full mt-6 flex flex-col">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-1 font-semibold bg-green-600 hover:bg-green-700"
      >
        <Check size={20} weight="bold" /> Confirmar
      </button>
    </form>
  );
}
