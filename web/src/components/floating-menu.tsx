"use client"
import { CircleAlert, Grip, MapPinPlusInside, Settings } from "lucide-react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

export default function FloatingMenu() {
    const menuItems = [
        { href: "/", label: "Inicio", icon: <Grip width={26} height={26} stroke="currentColor" /> },
        { href: "/reports", label: "Denuncias", icon: <CircleAlert width={26} height={26} stroke="currentColor" /> },
        { href: "/places", label: "Postos", icon: <MapPinPlusInside width={26} height={26} stroke="currentColor" /> },
        { href: "/settings", label: "Configurações", icon: <Settings width={26} height={26} stroke="currentColor" /> },
    ];
    const actualPath = usePathname()
    
    return (
        <div className="fixed  w-full bottom-0 flex">
            {menuItems.map((item, index) => (
                <Link 
                 key={index} 
                 href={item.href} 
                 className={`${actualPath == item.href ? `bg-white text-custom-primary` : `bg-custom-primary text-white`}  flex flex-col items-center w-full py-[.9175rem]`}
                >
                    {item.icon}
                    <p className="text-[.7rem]">{item.label}</p>
                </Link>
            ))}
        </div>
    );
}