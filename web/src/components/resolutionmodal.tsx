"use client"
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ResolutionModal(){ 
    const [modal, setModal ] = useState(true)

    function toggleModal() {
        setModal(!modal)
    }


    useEffect(() => {
        const checkScreenWidth = () => {
          if (window.innerWidth <= 1024) {
            setModal(true);
          } else {
            setModal(false);
          }
        };
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);
        return () => {
          window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    return (
        <>
        {!modal && 
        <div className="fixed w-full h-full flex justify-center items-center z-50 box-border top-0">
            <div className="w-[50rem] rounded-xl bg-white gap-4">
                <div className="bg-custom-primary flex relative justify-center items-center flex-col text-white"> 
                    <span className="text-2xl leading-none p-5">Aviso: Modo de Tela de Dispositivos Móveis</span>
                    <button type="button" className="absolute -right-5 bg-custom-primary rounded-full text-white  p-1 -top-5 border-white border" onClick={toggleModal}>
                        <X width={36} height={36} />
                    </button>
                </div>
                <div className="p-5 flex flex-col gap-3">
                    <p>Este projeto foi desenvolvido para ser utilizado como um aplicativo em dispositivos móveis. Ao testar a aplicação no navegador, é fundamental habilitar o modo de tela de dispositivos móveis no DevTools para simular a experiência adequada.</p>
                    <p>Como habilitar o modo de tela de dispositivos móveis no navegador:</p>
                    <div className="flex flex-col gap-1">
                        <p>  <b className="font-bold">1.</b> Abra o navegador (preferencialmente Google Chrome ou Edge).</p>
                        <p>  <b className="font-bold">2.</b> Pressione F12 ou clique com o botão direito em qualquer lugar da página e selecione Inspecionar.</p>
                        <p>  <b className="font-bold">3.</b> No DevTools, clique no ícone de dispositivos móveis (um smartphone e tablet) ou pressione Ctrl + Shift + M (Windows) / Cmd + Shift + M (Mac).</p>
                        <p>  <b className="font-bold">4.</b> Escolha um dispositivo no menu suspenso ou ajuste manualmente a resolução para simular um smartphone.</p>
                    </div>
                    <p>Certifique-se de atualizar a página após ativar o modo para garantir o carregamento correto da interface responsiva.</p>
                </div>
            </div>
        </div>
        }
    </>
    )
}