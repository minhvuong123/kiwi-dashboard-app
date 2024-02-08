import styles from '../../ui/dashboard/products/products.module.css';
import Search from '../../ui/dashboard/search/search';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Link from 'next/link'
import Image from 'next/image';
import { fetchProducts } from '../../lib/data';
import { deleteProduct } from '../../lib/actions';

const ProductsPage = async ({ searchParams }) => {
  const query = searchParams?.q || ""; // searchParams will be updated in search component
  const page = searchParams?.page || 1; // searchParams will be updated in search component
  const { products, count} = await fetchProducts(query, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeHolder="Search for a product ..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => {
              return (
                <tr key={product.id}>
                  <td>
                    <div className={styles.product}>
                      <Image src={product.img || '/noproduct.jpg'} width={40} height={40} alt='' className={styles.productImage} />
                      {product.title}
                    </div>
                  </td>
                  <td> {product.desc}</td>
                  <td> {product.price}</td>
                  <td> {product.createdAt?.toString().slice(4, 16)}</td>
                  <td> {product.stock}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link href={`/dashboard/products/${product.id}`}>
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={product.id} />
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </form>
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage ;