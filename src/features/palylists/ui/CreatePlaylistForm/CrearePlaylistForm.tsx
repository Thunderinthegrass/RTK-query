import {type SubmitHandler, useForm} from "react-hook-form";
import type {CreatePlaylistArgs} from "@/features/palylists/api/playlistsApi.types.ts";
import s from "./CreatePlaylistForm.module.css"
import {useCreatePlaylistMutation} from "@/features/palylists/api/playlistsApi.ts";

export const CreatePlaylistForm = () => {

  const { register, handleSubmit, reset } = useForm<CreatePlaylistArgs>();

  const [createPlaylist] = useCreatePlaylistMutation()

  const onSubmit: SubmitHandler<CreatePlaylistArgs> = data => {
    createPlaylist(data).unwrap().then(() => reset())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Create new playlist</h2>
      <label>
        <input {...register('title')} placeholder={'title'} />
      </label>
      <label>
        <input {...register('description')} placeholder={'description'} />
      </label>
      <button className={s.button}>Create playlist</button>
    </form>
  );
};