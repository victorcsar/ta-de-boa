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

  return (
    <div className="flex flex-col w-full h-screen mb-9">

    <div className="fixed bg-red-500 w-full bottom-0">

    </div>
    </div>
  );
}
