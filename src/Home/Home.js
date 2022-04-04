import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-lg-7 py-5 my-5'>
                    <h1 className='py-4 my-4'><span className='text-primary'>CAR</span> GOSSIPS!!</h1>
                    <p>Most new cars sold today in the United States will come with internet: all General Motors, Ford and BMWs, and almost all Toyota and Volkswagens come standard with built-in internet connection. The Tesla Model 3 even has a small camera aimed at the car’s occupants, though it is not turned on; and GM and Subaru make cameras aimed at the driver to alert the driver if it detects drowsiness or distraction.</p>
                    <button type="button" className="btn btn-primary">More Info</button>
                </div>
                <div className='col-lg-5 d-flex align-items-center'>
                    <img className=' img-fluid' src="https://media.istockphoto.com/photos/illustration-of-generic-hatchback-car-perspective-view-picture-id1150425295?b=1&k=20&m=1150425295&s=170667a&w=0&h=6RQC_JidCDrQYd_9JHFC5ANGp70KBg9nj_TpEDu-NZk=" alt="" />
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='text-center mb-5'>Customer Reviews (6)</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a short card.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

            <Link className='see-all-style' to="/reviews">See all Reviews</Link>
        </div>
    );
};

export default Home;