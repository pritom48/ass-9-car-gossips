import React from 'react';

const NotFound = () => {
    return (
        <div className='container py-5 my-5'>
            <img className='img-fluid not-found rounded mx-auto d-block' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbNOzZx48b5Zk4wV0UYwq2InosnNAXLHRJA&usqp=CAU" alt="" />
            <h1 className='text-center text-danger py-5'>NOT FOUND!!!</h1>
        </div>
    );
};

export default NotFound;