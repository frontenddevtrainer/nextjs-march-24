"use client";
import { useState } from "react";
import HeaderMenu from "./menu";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title } = props;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">{title}</h1>
      <div className="flex items-center">
        <a href="#" className="mr-6">
          <span className="material-icons"> shopping_cart </span>
        </a>

        <div className="relative inline-block text-left">
          <button
            type="button"
            className="inline-flex items-center"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <span className="material-icons"> account_circle </span>
            <span className="ml-2">Profile</span>
            <span className="material-icons" style={{ color : showMenu ? "red" : "" }}> { showMenu ? "arrow_drop_up" : "arrow_drop_down" } </span>
          </button>
          {showMenu && <HeaderMenu />}
        </div>
      </div>
    </header>
  );
};

export default Header;
