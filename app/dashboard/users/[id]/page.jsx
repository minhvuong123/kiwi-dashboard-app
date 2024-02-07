import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css';
import Image from 'next/image';

const SingleUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt='' fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="username">Username</label>
          <input type="text" name='username' placeholder='Kiwi dev' />
          <label htmlFor="email">Email</label>
          <input type="text" name='email' placeholder='kiwi@gmail.com' />
          <label htmlFor="password">Password</label>
          <input type="password" name='password' />
          <label htmlFor="phone">phone</label>
          <input type="text" name='phone' placeholder='+841234566' />
          <label htmlFor="address">address</label>
          <textarea type="text" name='address' placeholder='Lagi'></textarea>
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUser;