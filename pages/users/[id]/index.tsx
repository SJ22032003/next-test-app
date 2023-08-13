import React from "react";
import UserDetails from "@/components/users/UserDetails";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/router";
import { TUsersData } from "../index";

function UserDetailsPage({ userData }: { userData: TUsersData }) {

  const router = useRouter();
  if(router.isFallback) {
    return <Loader />
  };

  return (
    <>
      <UserDetails userData={userData} />
    </>
  );
}

export default UserDetailsPage;

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/users/users-id");
  const usersData = await response.json();
  const paths = usersData.map((user: number) => ({
    params: { id: user.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context: TParams) {
  const { params } = context;
  const response = await fetch(`http://localhost:3000/api/users/${params.id}`);
  const userData = await response.json();
  if(userData.id === undefined) {
    return {
      notFound: true,
    }
  };

  return {
    props: {
      userData,
    },
  };
}

type TParams = {
  params: {
    id: string;
  };
};
