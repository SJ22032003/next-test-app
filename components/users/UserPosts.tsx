import React from "react";
import styles from "./users.module.css";
import useLoading from "@/hooks/useLoading"
import { TPosts } from "@/pages/users/[id]/posts";
import { useStore } from "@/context";
import { useRouter } from "next/router";
import { useEffect } from "react";

function UserPosts({ posts }: { posts: TPosts[] }) {
  const router = useRouter();
  const isLoading = useLoading();

  const { userDetails, setTitle, setUserDetails } = useStore();

  useEffect(() => {
    if (!userDetails.id || userDetails.id !== Number(router.query.id)) {
      getUserDataFromApi(router.query.id as string).then((data) =>
        setUserDetails(data)
      );
    }
  }, [router.query.id, setUserDetails, userDetails.id]);

  const { name } = userDetails;
  setTitle(`${name}'s Posts`);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <section className={styles.postsMainContainer}>
      <h1 className={styles.heading}>Posts from {name}</h1>
      <div className={styles.userPosts}>
        {posts.map((post) => {
          const { id, title, body } = post;
          return (
            <div className={styles.detailsContainer} key={id}>
              <h1>{title}</h1>
              <div className={styles.companyDetails}>
                <p>{body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default UserPosts;

const getUserDataFromApi = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
