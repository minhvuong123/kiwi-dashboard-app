import { 
  MdAnalytics, 
  MdAttachMoney, 
  MdDashboard, 
  MdHelpCenter, 
  MdLogout, 
  MdOutlineSettings, 
  MdPeople, 
  MdShoppingBag, 
  MdSupervisedUserCircle, 
  MdWork 
} from 'react-icons/md';
import styles from './sidebar.module.css';
import NavLink from '../menuLink/menuLink';
import Image from 'next/image';

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>Kiwi</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul>
      {
        menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {
              cat.list.map((item => (
                <NavLink key={item.title} item={item} />
                // <span key={item.title}>item.title</span>    
              )))
            }
          </li>
        ))
      }
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

export default Sidebar