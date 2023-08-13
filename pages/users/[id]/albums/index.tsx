import React from "react";
import UserAlbums from "@/components/users/UserAlbums";

function AlbumsPage({ albums }: { albums: TAlbums[] }) {
  return <UserAlbums albums={albums} />;
}

export default AlbumsPage;

export async function getServerSideProps({params}: {params: {id: string}}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/albums`);
  const albums = await response.json();
  return {
    props: {
      albums,
    },
  };
}

export type TAlbums = {
  userId: number;
  id: number;
  title: string;
};
