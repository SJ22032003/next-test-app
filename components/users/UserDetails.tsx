import styles from "./users.module.css";
import Link from "next/link";
import { useStore } from "@/context";
import { TUsersData } from "@/pages/users";

function UserDetails({ userData }: { userData: TUsersData }) {
  const { name, email, phone, address, company, id } = userData;

  const { setTitle, setUserDetails } = useStore();
  setTitle(name);
  setUserDetails(userData);

  return (
    <div className={styles.mainDetailsContainer}>
      <div className={styles.detailsContainer}>
        <h1>{name}</h1>
        <div className={styles.socialContainer}>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        <div className={styles.addressDetails}>
          <p>{address.city}</p>
          <p>{address.street}</p>
          <p>{address.suite}</p>
          <p>{address.zipcode}</p>
        </div>
        <div className={styles.companyDetails}>
          <p>
            Works in <strong>{company.name}</strong>
          </p>
        </div>
      </div>
      <div className={styles.userMoreInfoContainer}>
        <Link href={`/users/${id}/posts`}>
          <button className={styles.detailsButton}>Posts by {name}</button>
        </Link>
        <Link href={`/users/${id}/albums`}>
          <button className={styles.detailsButtonAlbum}>
            Albums by {name}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default UserDetails;
