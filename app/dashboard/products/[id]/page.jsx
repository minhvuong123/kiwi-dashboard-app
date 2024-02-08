import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt='' fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder='title' />
          <label htmlFor="price">Price</label>
          <input type="text" name='price' placeholder='price' />
          <label htmlFor="stock">Stock</label>
          <input type="text" name='stock' placeholder='stock' />
          <label htmlFor="color">Color</label>
          <input type="text" name='color' placeholder='color' />
          <label htmlFor="size">address</label>
          <input type="text" name='size' placeholder='size' />
          <label htmlFor="cat">Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc"rows="10" placeholder='Description'></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleProduct;