import HeaderBrand from "@/components/header-brand";
import InputCustom from "@/components/input-custom";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen">
      <HeaderBrand />
      <p>Cadastre-se</p>
      <InputCustom label="email" title="E-mail" placeholder="E-MAIL" />
    </div>
  );
}
