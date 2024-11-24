import Image from "next/image";
import brandTaDeBoa from '@/assets/brands/initial-brand.svg'

export default function HeaderBrand(){
    return  (
        <div className="flex justify-center pt-20 pb-16">
            <Image src={brandTaDeBoa} width={241} height={64} alt="Tá de boa"></Image>
        </div>
    )
}