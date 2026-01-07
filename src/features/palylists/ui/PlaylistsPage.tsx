import {
  useDeletePlaylistMutation,
  useFetchPlaylistsQuery,
  // useUpdatePlaylistMutation
} from "@/features/palylists/api/playlistsApi.ts";
import s from "./PlaylistsPage.module.css"
import {CreatePlaylistForm} from "@/features/palylists/ui/CreatePlaylistForm/CrearePlaylistForm.tsx";
// import {UpdatePlaylistForm} from "@/features/palylists/ui/UpdatePlaylistForm/UpdatePlaylistForm.tsx";
import {useState} from "react";
import {
  UpdatePlaylistFormModal
} from "@/features/palylists/ui/UpdatePlaylistFormModal/UpdatePlaylistFormModal.tsx";
import {PlaylistItem} from "@/features/palylists/ui/PlaylistItem/PlaylistItem.tsx";

export const PlaylistsPage = () => {
  const { data, isLoading } = useFetchPlaylistsQuery() //- это промисы

  const [deletePlaylist] = useDeletePlaylistMutation()

  const handlerDeletePlaylist = (id: string) => {
    if (confirm("Вы уверены, что плейлист удалить надо??")) {
      deletePlaylist(id)
    }
  }

  const [editablePlaylistId, setEditablePlaylistId] = useState<string | null>(null)

  const handlerUpdatePlaylistForm = (playlistId: string) => {
    setEditablePlaylistId(prev => prev === playlistId ? null : playlistId)
  }

  const playlistToEdit = data?.data.find(p => p.id === editablePlaylistId) || null;//находим среди пришедших плейлистов тот, что совпадает с тем, по которому кликнули, который присвоился editablePlaylistId

  if (isLoading) return "Крутилка"

  return (
    <div>
      <h1>PlaylistsPage</h1>
      <CreatePlaylistForm />
      <div className={s.playlistsWrapper}>
        <div className={s.playlistsInner}>
          {data?.data.map((playlist) => (
            <PlaylistItem
              playlist={playlist}
              handlerDeletePlaylist={handlerDeletePlaylist}
              handlerUpdatePlaylistForm={handlerUpdatePlaylistForm}
            />
          ))}
        </div>
        {playlistToEdit && <UpdatePlaylistFormModal playlist={playlistToEdit} onClose={() => setEditablePlaylistId(null)} />}
      </div>
    </div>
  );
};