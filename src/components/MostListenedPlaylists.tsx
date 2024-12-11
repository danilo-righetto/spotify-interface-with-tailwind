import { Play } from "lucide-react";
import Image from "next/image";

export function MostListenedPlaylists() {
    return (
        <div>
            <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/danilo-righetto/" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/album-1.jpg" width={104} height={104} alt="Capa do álbum All The Right Reasons da banda Nickelback" />
              <strong>All The Right Reasons</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play fill="black" />
              </button>
            </a>
          </div>
        </div>
    )
}