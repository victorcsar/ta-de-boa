import Link from "next/link";

export default function DialogAlert() {
    return (
        <div className="fixed bg-custom-secondary text-white bottom-0 flex flex-col gap-1 p-2">
            <span className="text-sm">
                <b className="font-bold uppercase">Atenção: </b> 
                Algumas configurações ainda não foram 100% concluidas então porem suas rotas e estruturas já foram criadas. Para validar o funcionamento da configuração clique no botão abaixo:
            </span>
            <Link href="/home" className="bg-custom-primary text-white w-full rounded-xl flex justify-center p-2">Acessar sem usuario</Link>
      </div>
    )
}