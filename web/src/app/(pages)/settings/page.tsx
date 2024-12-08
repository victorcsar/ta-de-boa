import { User, UserCircle2 } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex flex-col items-center h-full p-20 bg-gray-100 gap-20">
      <h2 className="text-2xl font-bold mb-8">CONFIGURAÇÃO</h2>
      <div className="flex flex-col items-center mb-8">
        <UserCircle2 size={120} />
        <p className="text-xl font-semibold">Fulano de Tal</p>
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <button className="bg-custom-primary text-white uppercase py-6 w-full rounded-2xl">
          Tutorial
        </button>
        <button className="bg-custom-primary text-white uppercase py-6 w-full rounded-2xl">
          Editar conta
        </button>
        <button className="bg-custom-primary text-white uppercase py-6 w-full rounded-2xl">
          Logout
        </button>
      </div>
    </div>
  );
}
