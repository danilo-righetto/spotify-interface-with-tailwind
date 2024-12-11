import Image from "next/image";

export function MusicCurrentlyPlaying() {
    return (
        <div className="flex items-center gap-2">
          {/* Musica que está tocando atualmente */}
          <Image src="/album-1.jpg" width={56} height={56} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
          <div className="flex flex-col">
            <strong className="font-normal">Photograph</strong>
            <span className="text-xs text-zinc-400">Nickelback</span>
          </div>
        </div>
    )
}