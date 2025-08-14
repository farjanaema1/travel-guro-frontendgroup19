import bg2 from '../../assets/bg2.jpg';
import './aboutus.css';
import bg from '../../assets/slider_bg.png';
import ReactPlayer from 'react-player';
import React, { useRef } from 'react';

const VIDEO_PATH = 'https://youtube.com/shorts/qF_nZQOxXlo?si=41yXN232Cdym3_y8';

const AboutUs = () => {
    
    const playerRef = useRef(null);
    return (
        <section style={{
            background:`url( ${bg2} )`
        }} >
           <div className='p-20'>
           <div>
                <h1 className="font-bold text-2xl para-link mb-6">Executive Team</h1>
                <p style={{
                    width:600
                }} className="mx-auto para-link">Latest brand vhicles that comes recently in market, product are display from laest item with a quick filter system.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-4/5 mx-auto mt-8">
                <div className='photo'> <img src="
                https://i.ibb.co/LYwnxjH/square5.png" alt="" />
                 <h1 className="para-link text-xl mb-4 mt-2">Mark Pieszak</h1>
                 <p className="para-link mb-8">Mechanical Engineering Graduate</p>
                <p className="para-link"> Dictumst tellus dolor mi sollicitudin cubilia ante dolor enim sed rutrum urna hendrerit malesuada non in ad nisi.
                 </p>
                </div>
                <div className='photo'>
                    <img src="https://i.ibb.co/nQzkpn1/square6.png" alt="" />
                    <h1 className="para-link text-xl mb-4 mt-2">Richard Salmon</h1>
                 <p className="para-link mb-8">Development Manager</p>
                <p className="para-link"> Dictumst tellus dolor mi sollicitudin cubilia ante dolor enim sed rutrum urna hendrerit malesuada non in ad nisi.
                 </p>
                </div>
                <div className='photo'>
                   <img src="https://i.ibb.co/DLgf3ZF/square7.png" alt="" />
                   <h1 className="para-link text-xl mb-4 mt-2">Evan Forth</h1>
                 <p className="para-link mb-8">Founder & CEO</p>
                <p className="para-link"> Dictumst tellus dolor mi sollicitudin cubilia ante dolor enim sed rutrum urna hendrerit malesuada non in ad nisi.
                 </p>
                </div>
            </div>
           </div>
            <div style={{
                backgroundColor:'rgba(255, 168, 54, .8)'
            }} className='grid grid-cols-7 p-20'>
                <div>
                    <h1 className='text-3xl text-white font-bold font-link mb-4'>3150</h1>
                    <p>Happy Customers</p>
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div>
                    <h1 className='text-3xl text-white font-bold font-link mb-4'>713</h1>
                    <p>Brand and Model Vhaicles</p>
                </div>
                <div className="divider lg:divider-horizontal"></div> 

                <div>
                    <h1 className='text-3xl text-white font-bold font-link mb-4'>4371</h1>
                    <p>Avarage Deal Every Year</p>
                </div>
                <div className="divider lg:divider-horizontal"></div> 
                <div>
                    <h1 className='text-3xl text-white font-bold font-link mb-4'>76</h1>
                    <p>Award Won</p>
                </div>
            </div>
            <div className='flex  p-10 ml-10 text-3xl  font-bold font-link '>
                <div className='mr-12 text-error'>
                    <h1>
+1 817-946-1548

</h1>
                    <h1>9:00 AM - 8:00 PM</h1>
                    <h1>Sunday Off</h1>
                </div>
                <div  className='ml-12 text-white' style={{
            background:`url( ${bg} )`
        }}>
            <h1>Sunday Off</h1>
            <ReactPlayer ref={playerRef} url={VIDEO_PATH} controls={true} />

                </div>
            </div>
        </section>
    )
}
export default AboutUs;