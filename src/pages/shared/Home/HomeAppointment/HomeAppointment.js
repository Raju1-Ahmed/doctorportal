import React from 'react';
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
            }} className='  flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h2 className='text-xl font-bold text-primary'>Appointment</h2>
                <h3 className='text-3xl py-5 text-white'>Make an appointment Today</h3>
                <p className='pb-5 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <button className="btn btn-primary uppercase text-white">Get Started</button>

            </div>
        </section>
    );
};

export default HomeAppointment;