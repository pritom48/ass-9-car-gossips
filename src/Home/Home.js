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
                                <h5 className="card-title text-center">Frjsd Tira</h5>
                                <p className="card-text">The Audi A1 is available with a broad choice of engines, all of them petrols, with power outputs ranging from sensible to very spicy indeed.</p>
                                <p>Ratings : 4.8 Star</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Ana Julia</h5>
                                <p className="card-text"> At the bottom of the range you’ll find a couple of three-cylinder engines, while at the top is a 2.0-litre with near hot hatch levels of performance.</p>
                                <p>Ratings : 4.5 Star</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Bear Gails</h5>
                                <p className="card-text">For starters, all the moving metal panels and their motors tended to leave you with a car that weighed more than the Moon, compromising efficiency and driving fun. Plus, when you were enjoying the sun there was no room for your luggage because the boot was full of roof.</p>
                                <p>Ratings : 5 Star</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Crich Helmat</h5>
                                <p className="card-text">Read on through this review to find out how we rate the e-tron GT in terms of performance, interior quality, passenger space, running costs and more.</p>
                                <p>Ratings : 3.5 Star</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Janifar ana</h5>
                                <p className="card-text"> We'll let you know how it compares with those rivals and others, and which version we reckon is the pick of the range.</p>
                                <p>Ratings : 4.6 Star</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">

                            <div className="card-body">
                                <h5 className="card-title text-center">Adam luis</h5>
                                <p className="card-text">The design changes are most noticeable at the back of the car, with a roofline that tapers more heavily towards the Q3 Sportback’s smaller rear window and an aggressive-looking rear bumper.</p>
                                <p>Ratings : 5 Star</p>
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