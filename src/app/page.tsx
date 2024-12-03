import { Home as HomeIcon, Search, Library } from 'lucide-react' ;

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            {/* Botoes da Janela */}
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          {/* Menu lateral do Spotify */}
          <nav className="space-y-5 mt-10">
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
              Home
            </a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            {/* Divisor com Playlists*/}  
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Hits de Natal</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Country Mix</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Workout</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Deep House</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Rock Ballads</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Top Plays</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Top Hits de 2002</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Binaural Beats: Focus</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Nickelback</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Sextou</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Electronic Focus</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Soft Pop Hits</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Gym</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">zumba 2024</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Travel Mix</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Carvanal 2025</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Hits de Ano Novo</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Modão 2024</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Casamento</a>
            <a href="https://github.com/danilo-righetto" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-zinc-100">Romantics</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {/* Area principal do Spotify */}
          main
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        {/* Player do Spotify */}
        footer
      </footer>
    </div>
  );
}
