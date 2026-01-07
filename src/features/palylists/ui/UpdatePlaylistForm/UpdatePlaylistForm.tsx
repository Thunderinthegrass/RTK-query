import { type SubmitHandler, useForm } from "react-hook-form";
import type {PlaylistData, UpdatePlaylistArgs} from "@/features/palylists/api/playlistsApi.types.ts";
import {useUpdatePlaylistMutation} from "@/features/palylists/api/playlistsApi.ts";
import s from './UpdatePlaylistForm.module.css'

type UpdatePlaylistFormProps = {
  playlist: PlaylistData
  onClose: () => void
}

export const UpdatePlaylistForm = ({playlist, onClose}: UpdatePlaylistFormProps) => {

  const { register, handleSubmit, reset } = useForm<UpdatePlaylistArgs>({
    defaultValues: {
      title: playlist.attributes.title,
      description: playlist.attributes.description,
    }
  })

  const [updatePlaylist] = useUpdatePlaylistMutation()

  const onSubmit: SubmitHandler<UpdatePlaylistArgs> = data => {
    updatePlaylist({
      playlistId: playlist.id,
      body: {
        title: data.title,
        description: data.description,//\ъъъъъъъъъъъ \\\\\\\\\\\\\
        tagIds: []
      }
    }).unwrap().then(() => {
      reset()
      onClose()
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <label>
        <input {...register('title')} placeholder={'title'} />
      </label>
      <label>
        <input {...register('description')} placeholder={'description'} />
      </label>
      <button>Сохранить изменения</button>
    </form>
  );
};