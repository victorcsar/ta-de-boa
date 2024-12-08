import CustomButton from "@/components/button-custom";
import { UserCircleIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex flex-col items-center h-full p-20 bg-gray-100 gap-20">
      <h2 className="text-custom-primary text-2xl font-bold mb-8">
        CONFIGURAÇÃO
      </h2>
      <div className="flex flex-col items-center mb-8">
        <UserCircleIcon size={150} />
        <p className="text-xl font-semibold">Fulano de Tal</p>
      </div>
      <div className="flex flex-col space-y-6 w-full">
        <CustomButton label="Tutorial" color="bg-custom-primary" />
        <CustomButton label="Editar conta" color="bg-custom-primary" />
        <CustomButton label="Logout" color="bg-red-600" />
      </div>
    </div>
  );
}
