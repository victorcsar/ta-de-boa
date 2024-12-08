import Link from "next/link";
import Image from "next/image";
import brandTaDeBoa from '@/assets/brands/initial-brand.svg'


export default function DefaultPage() {
  return (
    <div className="flex flex-col h-screen justify-center gap-32 lg:bg-white lg:w-[21.875rem]">

        <div className="flex justify-center">
            <Image src={brandTaDeBoa} width={241} height={64} alt="Tá de boa"></Image>
        </div>

        <div className="flex flex-col gap-3 w-full px-5">
          <Link href="/login"    className="w-full py-2 bg-custom-primary text-center rounded-xl text-white">Login</Link>
          <Link href="/register" className="w-full py-2 bg-custom-primary text-center rounded-xl text-white" >Registre-se</Link>
          <Link href="/home"     className="w-full py-2 bg-custom-secondary text-center rounded-xl text-white">CONTINUAR SEM USUARIO</Link> 
        </div>
    </div>
  );
}
