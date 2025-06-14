import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  './offer.css';
import { faBullseye, faReply, faTag } 
from '@fortawesome/free-solid-svg-icons';
import car1 from '../../../assets/1.png';
import car2 from '../../../assets/2.png';
import car3 from '../../../assets/3.png';
import car4 from '../../../assets/4.png';

const Offer = () => {
    return (
        <section>
            <div>
                <h1 className="text-2xl font-bold font-link">Featured Rental Vehicles</h1>
                <p style={{
                    width:500,
                    color:'gray'
                }} className="para-link mt-6 mx-auto ">Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus. Elementum, condimentum, est consequat adipiscing accumsan sagittis ante metus gravida.</p>
            </div>
            <div className='grid grid-cols-4 mt-8'>
                <div style={{
                     background : `url( ${car1})`,
                     height:500

                }} className='p-20 photo'> 
                <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto p-3 font-bold font-link'>
                    <h1>20% Off</h1>
                </div>
                    <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        <FontAwesomeIcon icon={faBullseye} className='text-error mt-1 mr-4 ml-16' />
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div>
                </div>
                <div style={{
                     background : `url( ${car2})`

                }} className='p-20 photo'> 
                 <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto p-3 font-bold font-link'>
                    <h1>20% Off</h1>
                </div>
               
                     <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                     <h1 className='text-warning font-bold font-link '>Limited</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        <FontAwesomeIcon icon={faBullseye} className='text-error mt-1 mr-4 ml-16' />
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div>
                </div>
                <div style={{
                     background : `url( ${car3})`

                }} className='p-20 photo'> 
                    <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        <FontAwesomeIcon icon={faBullseye} className='text-error mt-1 mr-4 ml-16' />
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div>
                </div>
                <div style={{
                     background : `url( ${car4})`

                }} className='p-20 photo'> 
                 <div style={{
                    backgroundColor:'#e22937',
                    color:'white',
                    width:100,height:50,
                    
                }} className='mx-auto p-3 font-bold font-link'>
                    <h1>15% Off</h1>
                    </div>
                    <h1 className='text-2xl font-bold font-link text-white mt-32 offer'>Awsome Class Model</h1>
                    <h1 className='text-xl text-white mt-4'><span className='text-error font-bold '>$776</span>/Mo</h1>
                  
                        <div className='flex text-white'>
                        <FontAwesomeIcon icon={faBullseye} className='text-error mt-1 mr-4 ml-16' />
                        <h1 className='para-link'>50 GL Free</h1>
                        
                       
                    </div>
                </div>
            </div>
            
            <div className='mt-24'>
                <h1 style={{
                    color:'seagreen',
                    width:500
                }} className='font-link text-3xl font-bold mx-auto'>Why Purchase Your Perfect Car From Our Company</h1>
                <p style={{
                    width:500
                }} className='para-link m-6 mx-auto'>Ridiculus sodales metus varius dictum fermentum ante dictumst eleifend quam. Taciti tortor aenean nisl dapibus. Elementum, condimentum, est consequat adipiscing accumsan.</p>
            </div>
            <div style={{
                height:500
            }} className='flex mb-16 w-4/5 mx-auto poly'>
                <div style={{
                    backgroundColor:'rgb(24,46,82)',
                    width:750
                }} className='text-white p-20'>
                    <FontAwesomeIcon style={{
                        height:40,width:40
                    }} icon={faReply} className='text-error mb-6' />
                     <h1 className='text-3xl font-bold font-link'>Pre Owned Vehicles
                    </h1>
                    
                    <p className='pera-link mt-8 m4-8'>
                    Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus. Dignissim consequat. Nisl mi ante. Facilisis luctus eu Porttitor curabitur. Morbi tempor dictum nam tellus. Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
                   
                    </div>
                <div style={{
                    backgroundColor:'#052046',
                    width:760
                }} className='text-white p-20'>
                    <FontAwesomeIcon style={{
                        height:40,width:40
                    }}  icon={faTag} className='text-error mb-6'/>
                    <h1 className='font-link font-bold text-3xl'>Brand New Cars</h1>
                    <p className='pera-link mt-8 mb-4 '>
                    Nec nulla feugiat tortor ipsum vel imperdiet magna tempus porta ridiculus molestie quis non nam mauris Vehicula. Fringilla, tellus. Dignissim consequat. Nisl mi ante. Facilisis luctus eu Porttitor curabitur. Morbi tempor dictum nam tellus. Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
                </div>
            </div>

            <div className='grid grid-cols-3 w-4/5 mx-auto gap-6 mb-16'>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>New & Used Car</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>0% APR Finincing</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>0% APR Finincing</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>Free Test Drive</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>Vehicles History Pakages</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>
               <div>
               <h1 className='text-2xl font-link font-bold offer'>Buy, Sale, Trade</h1>
                <p style={{
                    color:'gray'
                }} className='para-link mt-4'>Ante dui potenti volutpat bibendum pede est, platea. Lectus quisque, erat feugiat sapien magna erat senectus praesent.</p>
               </div>

            </div>
              
        </section>
    )
}
export default Offer;