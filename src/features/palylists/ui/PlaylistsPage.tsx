import { useFetchPlaylistsQuery } from "@/features/palylists/api/playlistsApi.ts";

export const PlaylistsPage = () => {
  const { data, isLoading } = useFetchPlaylistsQuery({pageSize: 5})
  console.log(data)

  if (isLoading) return "Крутилка"

  return (
    <div>
      <h1>PlaylistsPage</h1>
      {data?.data.map((playlist) => (
        <div key={playlist.id}>title: {playlist.attributes.title}</div>
      ))}
    </div>
  );
};