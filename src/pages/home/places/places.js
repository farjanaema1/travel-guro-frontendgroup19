
import logo1 from '../../../assets/logo1.jpg';
import logo2 from '../../../assets/logo2.jpg';
import logo3 from '../../../assets/logo3.jpeg';
import logo4 from '../../../assets/logo4.jpeg';

import logo5 from '../../../assets/logo-5.jpg';
import logo6 from '../../../assets/logo-6.jpg';
import './places.css';
const places = () => {
    return (
  
                
<section className='mt-16 mb-16 mx-auto w-4/5 '>
<div  className="divider heading text-2xl font-bold text-error">Find</div>
<h1 className='font-bold text-3xl font-link'>Most Popular Places</h1>

<div className="divider"></div> 
<h1 style={{
    color:'gray',
    width:500
}} className='para-link text-3xl mt-8 mb-8 font-bold mx-auto'>Every day we help the world’s leading brands create their most vehicles</h1>
<div className='flex ml-8'>
    <img src={logo1} alt="" />
    <img src={logo2} alt="" />
    <img src={logo3} alt="" />
    <img src={logo4} alt="" />
    {/* <img src={logo5} alt="" />
    <img src={logo6} alt="" /> */}
</div>
</section>


                  
    )
}
export default places;