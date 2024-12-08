import CustomButton from "@/components/button-custom";
import FloatingMenu from "@/components/floating-menu";
import { UserCircleIcon } from "lucide-react";

export default function Settings() {
  return (
    <div className="flex flex-col items-center h-full pb-9 lg:bg-white lg:w-[21.875rem]">
      <h2 className="text-custom-primary text-2xl font-bold pt-20 pb-10">
        CONFIGURAÇÃO
      </h2>
      <div className="flex flex-col items-center py-10">
        <UserCircleIcon size={175} />
        <p className="text-xl font-semibold">Fulano de Tal</p>
      </div>
      <div className="flex flex-col space-y-6 w-full pt-10 pb-40 px-20">
        <CustomButton label="Tutorial" color="bg-custom-primary" />
        <CustomButton label="Editar conta" color="bg-custom-primary" />
        <CustomButton label="Logout" color="bg-red-600" />
      </div>
      <FloatingMenu />
    </div>
  );
}
