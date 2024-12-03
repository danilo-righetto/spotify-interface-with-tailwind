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
            <a href="https://github.com/danilo-righetto" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
            <HomeIcon />
              Home
            </a>
            <a href="https://github.com/danilo-righetto" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search />
              Search
            </a>
            <a href="https://github.com/danilo-righetto" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
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
