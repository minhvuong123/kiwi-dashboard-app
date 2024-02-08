import { updateProduct } from '../../../lib/actions';
import { fetchProduct } from '../../../lib/data';
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css';
import Image from 'next/image';

const SingleProduct = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={ product.img || "/noavatar.png"} alt='' fill />
        </div>
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name='id' value={product.id} />
          <label htmlFor="title">Title</label>
          <input type="text" name='title' placeholder={product.title} />
          <label htmlFor="price">Price</label>
          <input type="text" name='price' placeholder={product.price} />
          <label htmlFor="stock">Stock</label>
          <input type="text" name='stock' placeholder={product.stock} />
          <label htmlFor="color">Color</label>
          <input type="text" name='color' placeholder={product.color} />
          <label htmlFor="size">address</label>
          <input type="text" name='size' placeholder={product.size} />
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