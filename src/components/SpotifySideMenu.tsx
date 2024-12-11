import { HomeIcon, Library, Search } from "lucide-react";

export function SpotifySideMenu() {
    return (
        <nav className="space-y-5 mt-10">
            {/* Menu lateral do Spotify */}
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
    )
}