"use client"
import HeaderBrand from "@/components/header-brand";
import InputCustom from "@/components/input-custom";
import Link from "next/link";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

export default function Login() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (formData.email && formData.password) {
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col w-full h-screen mb-9">
      <HeaderBrand />
      <p className="px-4 mb-3 uppercase text-custom-primary font-bold">Login</p>
      <form className="flex flex-col gap-[1.875rem] justify-center items-center">
        <InputCustom 
          label="email" 
          title="E-mail" 
          placeholder="E-MAIL" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <InputCustom 
          label="password" 
          title="Senha" 
          type="password" 
          name="password"
          placeholder="SENHA" 
          value={formData.password} 
          onChange={handleChange} 
        />
        {error && (<p className="font-bold text-custom-secondary">Por favor, preencha todos os campos</p>)}
        <button onClick={handleSubmit} type="button" className="bg-custom-primary text-white uppercase px-20 py-4 w-max rounded-2xl font-bold">Entrar</button>
        <Link href="/register" className="text-custom-primary">Não tem uma conta? Cadastre-se</Link>
      </form>
    </div>
  );
}
