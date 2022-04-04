import React from 'react';

const Home = () => {
    return (
        <div className='container'>
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
        </div>
    );
};

export default Home;