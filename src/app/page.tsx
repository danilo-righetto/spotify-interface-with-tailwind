import { MostRecommendedPlaylists } from '@/components/MostRecommendedPlaylists';
import { MostListenedPlaylists } from '@/components/MostListenedPlaylists';
import { MusicCurrentlyPlaying } from '@/components/MusicCurrentlyPlaying';
import { NavigationButtons } from '@/components/NavigationButtons';
import { SpotifySideMenu } from '@/components/SpotifySideMenu';
import { PlayerFeatures } from '@/components/PlayerFeatures';
import { SideTracklist } from '@/components/SideTracklist';
import { WindowButtons } from '@/components/WindowButtons';
import { Player } from '@/components/Player';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <WindowButtons />
          <SpotifySideMenu />
          <SideTracklist />
        </aside>
        <main className="flex-1 p-6">
          {/* Area principal do Spotify */}
          <NavigationButtons />
          {/* Seção de Playlists e Albuns mais escutados */}
          <MostListenedPlaylists />
          {/* Seção de Playlists e Albuns recomendados pelo Spotify */}
          <MostRecommendedPlaylists />
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        {/* Player do Spotify */}
        <MusicCurrentlyPlaying />
        <Player />
        <PlayerFeatures />
      </footer>
    </div>
  );
}
