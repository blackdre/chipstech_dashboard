import { useCategories } from "../context/CategoriesProvider";

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
                          <h6>Paul Molive</h6>
                          <p className='mb-0'>4 mutual friends</p>
                        </div>
                        <a
                          href='javascript:void(0);'
                          className='btn btn-outline-primary rounded-circle btn-icon btn-sm p-2'>
                          <span className='btn-inner'>
                            <svg
                              className='icon-20'
                              width='20'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              currentColor='#3a57e8'>
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z'
                                stroke='currentColor'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z'
                                stroke='currentColor'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                              <path
                                d='M19.2036 8.66919V12.6792'
                                stroke='currentColor'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                              <path
                                d='M21.2497 10.6741H17.1597'
                                stroke='currentColor'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className='list-inline m-0 p-0'>
                    <li className='d-flex mb-4 align-items-center'>
                      <div className='img-fluid bg-warning-subtle rounded-pill'></div>
                      <div className='ms-3 flex-grow-1'>
                        <h6>Paul Molive</h6>
                        <p className='mb-0'>4 mutual friends</p>
                      </div>
                      <a
                        href='javascript:void(0);'
                        className='btn btn-outline-primary rounded-circle btn-icon btn-sm p-2'>
                        <span className='btn-inner'>
                          <svg
                            className='icon-20'
                            width='20'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            currentColor='#3a57e8'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M9.87651 15.2063C6.03251 15.2063 2.74951 15.7873 2.74951 18.1153C2.74951 20.4433 6.01251 21.0453 9.87651 21.0453C13.7215 21.0453 17.0035 20.4633 17.0035 18.1363C17.0035 15.8093 13.7415 15.2063 9.87651 15.2063Z'
                              stroke='currentColor'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'></path>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M9.8766 11.886C12.3996 11.886 14.4446 9.841 14.4446 7.318C14.4446 4.795 12.3996 2.75 9.8766 2.75C7.3546 2.75 5.3096 4.795 5.3096 7.318C5.3006 9.832 7.3306 11.877 9.8456 11.886H9.8766Z'
                              stroke='currentColor'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'></path>
                            <path
                              d='M19.2036 8.66919V12.6792'
                              stroke='currentColor'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'></path>
                            <path
                              d='M21.2497 10.6741H17.1597'
                              stroke='currentColor'
                              stroke-width='1.5'
                              stroke-linecap='round'
                              stroke-linejoin='round'></path>
                          </svg>
                        </span>
                      </a>
                    </li>
                  </ul>
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
