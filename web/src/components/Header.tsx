import { Plus, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../assets/logo.svg";
import NewHabitForm from "./NewHabitForm";

export default function Header() {
  return (
    <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImg} alt="Habits" />
      <Dialog.Root>
        <Dialog.Trigger
          type="button"
          className="border flex gap-2 border-violet-500 font-semibold rounded-lg px-5 py-3 items-center hover:bg-violet-700 hover:text-white text-violet-500 transition-colors"
        >
          <Plus size={20} />
          <span className="text-white">Novo hábito</span>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

          <Dialog.Content className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-50">
              <X size={24} weight="bold" aria-label="Fechar" />
            </Dialog.Close>
            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar Hábito
            </Dialog.Title>

            <NewHabitForm />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
