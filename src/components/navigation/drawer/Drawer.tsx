"use client";

import Link from "next/link";
import { HomeIcon } from "../../icons/HomeIcon";
import { DiscoverIcon } from "../../icons/DiscoverIcon";
import { usePathname } from "next/navigation";
import { TrendingIcon } from "@/components/icons/TrendingIcon";
import { TopRatedIcon } from "@/components/icons/TopRatedIcon";
import { NowPlayingIcon } from "@/components/icons/NowPlayingIcon";
import { useDrawerHandler } from "@/app/drawerContext";
import styles from "./drawer.module.css";

export const Drawer = () => {
  const pathname = usePathname();
  const { isDrawerOpen } = useDrawerHandler();

  return (
    <div className={`${styles.body} ${isDrawerOpen ? styles.open : ""}`}>
      <div className={styles.heading}>The Movies</div>
      <div className={styles.links}>
        <Link
          href="/"
          className={styles.button}
          style={{ color: pathname === "/" ? "#fff" : "#838383" }}
        >
          <div className={styles.icon}>
            <HomeIcon color={pathname === "/" ? "#fff" : "#838383"} size={32} />
          </div>
          Home
        </Link>
        <Link
          href="/trending"
          className={styles.button}
          style={{ color: pathname === "/trending" ? "#fff" : "#838383" }}
        >
          <div className={styles.icon}>
            <TrendingIcon
              color={pathname === "/trending" ? "#fff" : "#838383"}
              size={32}
            />
          </div>
          Trending
        </Link>
        <Link
          href="/now-playing"
          className={styles.button}
          style={{ color: pathname === "/now-playing" ? "#fff" : "#838383" }}
        >
          <div className={styles.icon}>
            <NowPlayingIcon
              color={pathname === "/now-playing" ? "#fff" : "#838383"}
              size={32}
            />
          </div>
          Now Playing
        </Link>
        <Link
          href="/top-rated"
          className={styles.button}
          style={{ color: pathname === "/top-rated" ? "#fff" : "#838383" }}
        >
          <div className={styles.icon}>
            <TopRatedIcon
              color={pathname === "/top-rated" ? "#fff" : "#838383"}
              size={32}
            />
          </div>
          Top Rated
        </Link>
        <Link
          href="/discover"
          className={styles.button}
          style={{ color: pathname === "/discover" ? "#fff" : "#838383" }}
        >
          <div className={styles.icon}>
            <DiscoverIcon
              color={pathname === "/discover" ? "#fff" : "#838383"}
              size={32}
            />
          </div>
          Discover
        </Link>
      </div>
    </div>
  );
};
