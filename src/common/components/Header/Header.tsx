import s from "./Header.module.css"
import {Path} from "@/common/routing";
import {NavLink} from "react-router";

const  navItems = [
  {to: Path.Main, label: "Main"},
  {to: Path.Playlists, label: "Playlists"},
  {to: Path.Tracks, label: "Tracks"},
  {to: Path.Profile, label: "Profile"}
]

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({isActive}) => isActive ? `${s.link} ${s.activeLink}` : `${s.link}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};