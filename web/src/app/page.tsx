import HeaderBrand from "@/components/header-brand";
import InputCustom from "@/components/input-custom";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen ">
      <HeaderBrand />
      <p className="px-4 mb-3 uppercase text-custom-primary font-bold">Cadastrar</p>
      <form className="flex flex-col gap-[1.875rem] justify-center items-center">
          <InputCustom label="email" title="E-mail" placeholder="E-MAIL" />
          <InputCustom label="password" title="Senha" type="password" placeholder="SENHA" />
          <InputCustom label="confirm-pass" title="confirm-pass" type="password" placeholder="CONFIRMAR SENHA" />
          <button className="bg-custom-primary  text-white uppercase px-20 py-4 w-max rounded-2xl font-bold">Próximo</button>
      </form>
    </div>
  );
}
