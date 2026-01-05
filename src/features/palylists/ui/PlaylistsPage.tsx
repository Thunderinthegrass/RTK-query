import {
  useDeletePlaylistMutation,
  useFetchPlaylistsQuery,
  useUpdatePlaylistMutation
} from "@/features/palylists/api/playlistsApi.ts";
import s from "./PlaylistsPage.module.css"
import {CreatePlaylistForm} from "@/features/palylists/ui/CreatePlaylistForm/CrearePlaylistForm.tsx";
import {UpdatePlaylistForm} from "@/features/palylists/ui/UpdatePlaylistForm/UpdatePlaylistForm.tsx";

export const PlaylistsPage = () => {
  const { data, isLoading } = useFetchPlaylistsQuery()

  const [deletePlaylist] = useDeletePlaylistMutation()
  const [updatePlaylist] = useUpdatePlaylistMutation()//deletePlaylist, updatePlaylist - это промисы

  const handlerDeletePlaylist = (id: string) => {
    if (confirm("Вы уверены, что плейлист удалить надо??")) {
      deletePlaylist(id)
    }
  }
  const handlerUpdatePlaylist = (playlistId: string) => {
      updatePlaylist({
        playlistId,
        body: {
          title: "Новый тайтл",
          description: "Новое описание",
          tagIds: []
        }
      })
  }

  if (isLoading) return "Крутилка"

  return (
    <div>
      <h1>PlaylistsPage</h1>
      <CreatePlaylistForm />
      <div className={s.playlistsWrapper}>
        <div className={s.playlistsInner}>
          {data?.data.map((playlist) => (
            <div key={playlist.id} className={s.playlistItem}>
              <button onClick={() => handlerDeletePlaylist(playlist.id)}>Удалить плейлист</button>
              {/*<button onClick={() => handlerUpdatePlaylist(playlist.id)}>Обновить плейлист</button>*/}
              <p><span>title: </span>{playlist.attributes.title}</p>
              <p><span>description: </span>{playlist.attributes.description}</p>
              <p><span>name: </span>{playlist.attributes.user.name}</p>
              <UpdatePlaylistForm playlistId={playlist.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};