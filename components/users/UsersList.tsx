import styles from "./users.module.css";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { TUsersData } from "@/pages/users";
import { useStore } from "@/context";

function UsersList({ users }: { users: TUsersData[] }) {
  const router = useRouter();

  const { setTitle } = useStore();
  setTitle("Users List");

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<TUsersData[]>(users);

  const toUserDetails = (id: number) => {
    router.push(`/users/${id}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [search, users]);

  return (
    <div className={styles.usersMainContainer}>
      <h1 className={styles.heading}>Users</h1>
      <div>
        <input
          className={styles.search}
          type="text"
          value={search}
          onChange={(e) => handleSearch(e)}
          placeholder="Search..."
        />
      </div>
      <ul className={styles.userList}>
        {filteredUsers.map((user) => (
          <li onClick={() => toUserDetails(user.id)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
