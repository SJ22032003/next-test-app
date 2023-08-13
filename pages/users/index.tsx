import UsersList from "@/components/users/UsersList";

function UsersPage({ users }: { users: TUsersData[] }) {
  return <UsersList users={users} />;
}

export default UsersPage;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}

export type TUsersData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
