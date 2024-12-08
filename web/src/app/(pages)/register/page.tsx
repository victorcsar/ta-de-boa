"use client"
import HeaderBrand from "@/components/header-brand";
import InputCustom from "@/components/input-custom";
import Link from "next/link";
import { useState } from "react";
import userSvg from '@/assets/brands/user-register.svg'
import Image from 'next/image';


interface FormData {
  email: string;
  password: string;
  confirmPass: string;
  cpf: string;
  nome: string;
  telefone: string
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPass: "",
    cpf: "",
    nome: "",
    telefone: ""
  });
  const [error, setError] = useState(false)
  const [step, setStep] = useState(false);
  


  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, 
    }));

    // console.log(formData)
  }


  function validatePass(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (formData.password === formData.confirmPass) {
      setError(false)
      setStep(true); 
    } else {
      setError(true)
    }
  }

  return (
    <div className="flex flex-col w-full h-screen mb-9">
      <HeaderBrand />
      <p className="px-4 mb-3 uppercase text-custom-primary font-bold">Cadastrar</p>
      <form className="flex flex-col gap-[1.875rem] justify-center items-center">
          {!step ?( <>
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
            <InputCustom 
             label="confirm-pass" 
             title="confirm-pass" 
             name="confirmPass"
             type="password"
             placeholder="CONFIRMAR SENHA" 
             value={formData.confirmPass} 
             onChange={handleChange}
            />
            {error && (<p className="font-bold text-custom-secondary">As senhas não são parecidas</p>)}
            <button id="teste" onClick={validatePass} type="button" className="bg-custom-primary  text-white uppercase px-20 py-4 w-max rounded-2xl font-bold">Próximo</button>
            </>
          )
          : (
            <>  
              <div className="flex flex-col justify-center items-center">
                {/* <Image src={} ></Image> */}


                <div className="bg-fade rounded-full p-[.0625rem]">

                  <div className="py-[3.5625rem] px-[3.6875rem] bg-gray-100 rounded-full border-none outline-none">
                    <Image src={userSvg} width={32} height={36} alt="User Icon" />
                    
                  </div>
                </div>
                <p className="font-bold text-custom-primary">adicionar foto</p>


              </div>


              <InputCustom 
               label="nome" 
               title="nome" 
               placeholder="NOME" 
               name="nome"
               required
               value={formData.nome}
               onChange={handleChange} 

              />
              <InputCustom 
               label="telefone" 
               title="telefone" 
               placeholder="TELEFONE" 
               name="telefone"
               value={formData.telefone}
               onChange={handleChange} 


              />
              <InputCustom 
               label="cpf" 
               title="cpf" 
               placeholder="CPF"
               name="cpf"
               required
               value={formData.cpf}
               onChange={handleChange} 
              />
              <div className="flex ">
                <label htmlFor="privacy" className="font-bold flex cursor-pointer items-center gap-1.5 text-sm">
                <input 
                 className="w-4 h-4 text-blue-600 border-gray-300 rounded" 
                 id="privacy" 
                 type="checkbox"
                />
                  Li e concordo com os <Link href="#" className="text-custom-primary" target="blank">termos de uso</Link>
                </label>
              </div>
              <button type="submit" className="bg-custom-primary text-white uppercase px-20 py-4 w-max rounded-2xl font-bold">Cadastrar</button>
            </>
          )}

      </form>
    </div>
  );
}
