import s from "@/features/palylists/ui/PlaylistsPage.module.css";
import type {PlaylistData} from "@/features/palylists/api/playlistsApi.types.ts";

type Props = {
  playlist: PlaylistData
  handlerDeletePlaylist: (playlistId: string) => void;
  handlerUpdatePlaylistForm: (playlistId: string) => void;
}

export const PlaylistItem = ({ playlist,
                               handlerDeletePlaylist,
                               handlerUpdatePlaylistForm} : Props) => {
  return (
    <div key={playlist.id} className={s.playlistItem}>
      <button onClick={() => handlerDeletePlaylist(playlist.id)}>Удалить плейлист</button>
      <p><span>title: </span>{playlist.attributes.title}</p>
      <p><span>description: </span>{playlist.attributes.description}</p>
      <p><span>name: </span>{playlist.attributes.user.name}</p>
      {/*{editablePlaylistId === playlist.id && <UpdatePlaylistForm playlistId={playlist.id} />}*/}
      <button onClick={() => handlerUpdatePlaylistForm(playlist.id)}>Обновить плейлист</button>
    </div>
  );
};