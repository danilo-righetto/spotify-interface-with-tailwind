import Image from "next/image";

export function MostRecommendedPlaylists() {
    return (
        <div>
            <h2 className="font-semibold text-2xl mt-10">Made for Danilo Righetto</h2>
            <div className="grid grid-cols-8 gap-4 mt-4">
                <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/album-1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
                </a>
                <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/album-1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
                </a>
                <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/album-1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
                </a>
                <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/album-1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
                </a>
                <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
                    <Image src="/album-1.jpg" className="w-full" width={120} height={120} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
                    <strong className="font-semibold">Daily Mix 1</strong>
                    <span className="text-sm text-zinc-400">Wallows, COIN, girl in red and more</span>
                </a>
            </div>
        </div>
    )
}