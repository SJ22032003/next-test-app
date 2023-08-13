import React from "react";
import Image from "next/image";
import { TPhotos } from "@/pages/users/[id]/albums/[photosId]";
import styles from "./users.module.css"

function UserPhotos({ photos }: { photos: TPhotos[] }) {
  return (
    <div className={styles.mainAlbumContainer}>
      <h1>Photos</h1>
      <section className={styles.photoSection}>
        {photos.map((photo) => {
          return (
            <div key={photo.id} className={styles.userImageContainer}>
              <p className={styles.photoTitle}>{photo.title}</p>
              <Image src={`https://picsum.photos/200`} alt={photo.title} width={200} height={200} />
            </div>
          )
        })}
      </section>
    </div>
  );
}

export default UserPhotos;
