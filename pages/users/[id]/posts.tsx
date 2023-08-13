import React from "react";
import UserPosts from "@/components/users/UserPosts";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/router";

function PostsPage({ posts }: { posts: TPosts[] }) {

  const router = useRouter();
  if(router.isFallback) {
    return <Loader />
  };

  return <UserPosts posts={posts} />;
}

export default PostsPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const res = await fetch(`http://localhost:3000/api/users/${id}/posts`);
  const posts = await res.json();

  if (!posts || !posts[0]) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}

export type TPosts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};