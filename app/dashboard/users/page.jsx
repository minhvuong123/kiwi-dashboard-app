import styles from '../../ui/dashboard/users/users.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link'
import Image from 'next/image';
import { fetchUsers } from '../../lib/data';

const UsersPage = async () => {
  const users = await fetchUsers();
  console.log(users)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder="Search for a user ..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" width={40} height={40} alt='' className={styles.userImage} />
                Kiwi dev
              </div>
            </td>
            <td>kiwi@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage;