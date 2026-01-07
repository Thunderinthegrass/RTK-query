import s from "./UpdatePlaylistFormModal.module.css"
import {UpdatePlaylistForm} from "@/features/palylists/ui/UpdatePlaylistForm/UpdatePlaylistForm.tsx";
import type {PlaylistData} from "@/features/palylists/api/playlistsApi.types.ts";

export type UpdatePlaylistFormModalProps = {
  playlist: PlaylistData
  onClose: () => void
}

export const UpdatePlaylistFormModal = ({playlist, onClose,}: UpdatePlaylistFormModalProps) => {
  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.overlayInner} onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className={s.button}>x</button>
        <UpdatePlaylistForm playlist={playlist} onClose={onClose}/>
      </div>
    </div>
  );
};