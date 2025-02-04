import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useCategories } from "../context/CategoriesProvider";
import CategoriesForm from "../components/ui/CategoriesForm";

const Categories = () => {
  const { categories } = useCategories();
  return (
    <div className='row'>
      <div className='col-sm-12'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <div className='header-title'>
              <h4 className='card-title'>Categories </h4>
            </div>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='card'>
                  <div className='card-body'>
                    <ul className='list-inline m-0 p-0'>
                      {categories.map((category) => (
                        <li
                          className='d-flex mb-4 align-items-center'
                          key={category.id}>
                          <div className='img-fluid bg-warning-subtle rounded-pill'></div>
                          <div className='ms-3 flex-grow-1'>
                            <h5>{category.name}</h5>
                            <p>{category.description}</p>
                          </div>
                          <a
                            href='javascript:void(0);'
                            className='btn btn-outline-primary rounded-circle btn-icon btn-sm p-2'>
                            <span className='btn-inner'>
                              <FaEdit />
                            </span>
                          </a>
                          <span className='m-1'></span>
                          <a
                            href='javascript:void(0);'
                            className='btn btn-outline-danger rounded-circle btn-icon btn-sm p-2'>
                            <span className='btn-inner'>
                              <FaTrashAlt />
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-8'>
                <div className='card'>
                  <div className='card-body'>
                    <CategoriesForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
