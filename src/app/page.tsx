import { Home as HomeIcon, Search, Library } from 'lucide-react' ;

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          {/* Menu lateral do Spotify */}
          <nav>
            <a href="https://github.com/danilo-righetto">
            <HomeIcon />
              Home
            </a>
            <a href="https://github.com/danilo-righetto">
              <Search />
              Search
            </a>
            <a href="https://github.com/danilo-righetto">
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
