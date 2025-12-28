// https://musicfun.it-incubator.app/api/1.0/
// 47409d9d-b1ab-40d4-9c04-e4f3eeff2690

import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {FetchPlaylistsArgs, PlaylistsResponse} from "@/features/palylists/api/playlistsApi.types.ts";

export const playlistsApi = createApi({
  reducerPath: 'playlistsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    headers: {
      'API-KEY': import.meta.env.VITE_API_KEY
    }
  }),
  endpoints: (build) => ({
    fetchPlaylists: build.query<PlaylistsResponse, FetchPlaylistsArgs>({
      query: ({ pageSize }) => {
        return {
          method: 'get',
          url: `playlists?pageSize=${pageSize}`
        }
      }
    })
  })
})

export const { useFetchPlaylistsQuery } = playlistsApi
