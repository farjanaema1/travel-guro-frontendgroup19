import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
    <div style={{
        backgroundColor:'#edf0f5'
    }} className="p-20">
        <h1 className="text-2xl font-link font-bold">
        Subscribe for Newslatter
        </h1>
        <br />
        <input type="text" placeholder="Enter Email" className="input input-bordered w-full max-w-xs" />
        <button style={{
            color:'gray'
        }} className=" btn bg-white">Subscribe</button>
        <br />
        <img style={{
            height:150,
            width:200
        }} src="https://i.ibb.co/mrT6jmJh/Screenshot-2025-08-03-113403.png" className="p-5 mx-auto mt-8 mb-16" alt="" />
       
       <div>
        
        
       </div>
        <div>
            <Link to='/' className="mr-2 text-xl font-link font-bold">Advertise</Link>
            <Link className="mr-2 text-xl font-link font-bold">Question</Link>
            <Link className="mr-2 text-xl font-link font-bold">Term and Conditions</Link>
            <Link className="mr-2 text-xl font-link font-bold">Disclimer</Link>
            <Link className="mr-2 text-xl font-link font-bold">Privacy Policy</Link>
            <Link className="mr-2 text-xl font-link font-bold">Site Map</Link>
        </div>
        <p style={{
            color:'gray'
        }} className="mt-6">© 2025 Carhut All right reserved</p>
         

    </div>
    )
}
export default Footer;