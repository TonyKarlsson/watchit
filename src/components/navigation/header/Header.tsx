"use client";

import { useState } from "react";
import { BurgerIcon } from "../../icons/BurgerIcon";
import { SearchBar } from "../../searchBar/SearchBar";
import styles from "./header.module.css";
import { CloseIcon } from "../../icons/CloseIcon";
import { useDrawerHandler } from "@/app/drawerContext";

type HeaderProps = {
  setSearchTerm?: (searchTerm: string) => void;
};

export const Header = ({ setSearchTerm }: HeaderProps) => {
  const { isDrawerOpen, toggleDrawer } = useDrawerHandler();

  return (
    <div className={styles.body}>
      <div className={styles.mobile}>
        <div className={styles.heading}>The Movies</div>
        <div className={styles.drawer_button}>
          <button onClick={() => toggleDrawer()}>
            {isDrawerOpen ? (
              <CloseIcon size={32} color="#fff" />
            ) : (
              <BurgerIcon size={32} color="#fff" />
            )}
          </button>
        </div>
      </div>
      <div>
        <SearchBar setSearchTerm={setSearchTerm} />
      </div>
    </div>
  );
};
