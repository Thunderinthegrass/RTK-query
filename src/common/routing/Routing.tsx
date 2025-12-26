import {Route, Routes} from "react-router";
import {Path} from "./";
import {MainPage} from "@/app/ui/MainPage/MainPage.tsx";
import {PlaylistsPage} from "@/features/palylists/ui/PlaylistsPage.tsx";
import {TracksPage} from "@/features/tracks/ui/TracksPage.tsx";
import {ProfilePage} from "@/features/auth/ui/ProfilePage/ProfilePage.tsx";
import {PageNotFound} from "@/common/components";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Playlists} element={<PlaylistsPage />} />
    <Route path={Path.Tracks} element={<TracksPage />} />
    <Route path={Path.Profile} element={<ProfilePage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)