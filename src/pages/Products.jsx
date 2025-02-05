import { BiPlus, BiSolidEdit, BiTrash } from "react-icons/bi";
import { useProducts } from "../context/ProductProvider";
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Products = () => {
  const { products, loading, deleteProduct } = useProducts();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='card'>
            <div className='card-header d-flex justify-content-between'>
              <div className='header-title'>
                <h4 className='card-title'>Products Table</h4>
              </div>
              <div>
                <Button>
                  <Link to='/add-product' style={{ color: "black" }}>
                    Add New Product
                  </Link>
                </Button>
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
                            <Link to={`/single-product/${product.id}`}>
                              <h6>{product.name}</h6>
                            </Link>
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
                              <h6 className='text-success'>
                                Available <BsFillHandThumbsUpFill />
                              </h6>
                            ) : (
                              <h6 className='text-danger'>
                                No stock <BsFillHandThumbsDownFill />
                              </h6>
                            )}
                          </div>
                        </td>
                        <td>
                          <h6 className='text-primary'>
                            <Button
                              variant='outline-danger'
                              onClick={() => deleteProduct(product.id)}>
                              <BiTrash />
                            </Button>
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
    </>
  );
};
export default Products;
