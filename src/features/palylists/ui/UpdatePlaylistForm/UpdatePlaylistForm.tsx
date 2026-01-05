import { type SubmitHandler, useForm } from "react-hook-form";
import type {UpdatePlaylistArgs} from "@/features/palylists/api/playlistsApi.types.ts";
import {useUpdatePlaylistMutation} from "@/features/palylists/api/playlistsApi.ts";

export const UpdatePlaylistForm = ({playlistId}) => {

  const { register, handleSubmit, reset } = useForm<UpdatePlaylistArgs>()

  const [updatePlaylist] = useUpdatePlaylistMutation()

  const onSubmit: SubmitHandler<UpdatePlaylistArgs> = data => {
    updatePlaylist({
      playlistId: playlistId,
      body: {
        title: data.title,
        description: data.description,
        tagIds: []
      }
    }).unwrap().then(() => reset())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register('title')} placeholder={'title'} />
      </label>
      <label>
        <input {...register('description')} placeholder={'description'} />
      </label>
      <button>Обновить плейлист</button>
    </form>
  );
};