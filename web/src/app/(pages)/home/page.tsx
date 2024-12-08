import { MapPin } from "@/components/allsvgused"
import FloatingMenu from "@/components/floating-menu"
import GoogleMap from "@/components/google_features/map"
import MapsAndPins from "@/components/google_features/markersandpins"
import { mapPinsFixed } from "@/lib/staticroutes"
import { X } from "lucide-react"
// import { MapPin } from "lucide-react"

export default function Home() {
    const data = mapPinsFixed

    return (
        <div className="flex flex-col w-full h-screen pb-9">

            <div className="fixed w-full z-20 flex top-16">

                <div className="relative w-full mx-4  rounded-2xl py-3 flex justify-center items-center">
                    <div className="border border-custom-secondary border-solid flex h-full w-full pl-4 bg-white rounded-xl">
                        <label htmlFor="search-region" className="flex h-full items-center ">
                            <MapPin />
                        </label>
                        <input id="search-region" className="border-none focus:border-none w-full rounded-xl" placeholder="Buscar região"></input>
                    </div>

                </div>

            </div>

            <GoogleMap>
                <MapsAndPins data={data} />
            </GoogleMap>
            <FloatingMenu />


            <div className="fixed w-full h-full flex justify-center items-center z-50 box-border">
                <div className="w-[50rem] rounded-xl bg-white gap-4">
                    <div className="bg-custom-primary flex relative justify-center items-center flex-col text-white"> 
                        <span className="text-2xl leading-none p-5">Aviso: Modo de Tela de Dispositivos Móveis</span>
                        <button type="button" className="absolute -right-5 bg-custom-primary rounded-full text-white  p-1 -top-5 border-white border">
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

        </div>

    )
}