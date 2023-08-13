import React from "react";
import styles from "./users.module.css";
import { TAlbums } from "@/pages/users/[id]/albums";
import { useStore } from "@/context";
import { useRouter } from "next/router";

function UserAlbums({ albums }: { albums: TAlbums[] }) {
  const router = useRouter();

  const { setTitle } = useStore();
  setTitle("Albums");

  const toUserPhotos = (userId: number, id: number) => {
    router.push(`/users/${userId}/albums/${id}`);
  };

  return (
    <>
      <div className={styles.mainAlbumContainer}>
        <h1>From Server Side</h1>
        <section className={styles.albumSection}>
          {albums.map((album) => {
            return (
              <div className={styles.albumContainer} key={album.id} onClick={() => toUserPhotos(album.userId, album.id)}>
                <div className={styles.albumTitle}>{album.title}</div>
                <div className={styles.albumPhotos}></div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default UserAlbums;
