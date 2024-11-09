import { BiSolidEdit, BiTrash } from "react-icons/bi";
import { useProducts } from "../context/ProductProvider";

const Products = () => {
  const { products, loading, deleteProduct } = useProducts();
  console.log(products);
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <div className='header-title'>
              <h4 className='card-title'>Basic Table</h4>
            </div>
          </div>
          <div className='card-body p-0'>
            <div className='table-responsive mt-4'>
              <table
                id='basic-table'
                className='table table-striped mb-0'
                role='grid'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>
                        <div className='d-flex align-items-center'>
                          <h6>{product.name}</h6>
                        </div>
                      </td>
                      <td>
                        <div className='iq-media-group iq-media-group-1'>
                          <h6>{product.category_name}</h6>
                        </div>
                      </td>
                      <td>R {product.price}</td>
                      <td>
                        <div className='text-info'>
                          {product.is_active ? (
                            <h6 className='text-success'>available</h6>
                          ) : (
                            <h6 className='text-danger'>No stock</h6>
                          )}
                        </div>
                      </td>
                      <td>
                        <h6 className='text-primary'>
                          <BiSolidEdit />
                          <BiTrash />
                        </h6>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
