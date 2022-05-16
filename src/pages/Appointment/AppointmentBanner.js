import React from 'react';
import { DayPicker } from 'react-day-picker';
import chare from '../../assets/images/chair.png'
import 'react-day-picker/dist/style.css';


const AppointmentBanner = ({date, setDate}) => {

    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chare} class="max-w-sm rounded-lg shadow-2xl" alt='Dentis Chare' />
            <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
        />
        <p>You picked</p>;
            </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;