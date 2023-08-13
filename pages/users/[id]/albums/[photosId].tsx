import React from "react";
import UserPhotos from "@/components/users/UserPhotos";
import Loader from "@/components/common/Loader";

function UserPhotosPage({ photos }: { photos: TPhotos[] }) {
  return <UserPhotos photos={photos} />;
}

export default UserPhotosPage;

export async function getServerSideProps({ params }: { params: { photosId: string} }) {
  const { photosId } = params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${photosId}/photos`);
  const photos = await response.json();
  return {
    props: {
      photos,
    },
  };
}

export type TPhotos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}