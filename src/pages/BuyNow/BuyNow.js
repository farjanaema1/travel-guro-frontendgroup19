import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import bg from '../../assets/slider_bg.png';
import { AuthContext } from "../../context/authprovider/authprovider";
import MyCart from "../dashboard/myCart/myCart";


const BuyNow = () => {
    const {name,_id,price,img} = useLoaderData();
    const {user} = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const customerName = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const address = form.fulladdress.value;
        const phone = form.phone.value;
        const order = {
            service:_id,
            servicename:name,
            price:price,
            customer:customerName,
            email,
            phone,
           address,
           

        }
        fetch('https://travelbackendgroup19-production.up.railway.app/orders2',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
        body:JSON.stringify(order)

        })
        .then( res => res.json())
        .then( data => console.log(data))
        form.reset();

    }
    
    return (
        <section style={{
            background : `url( ${bg})`
        }}>
           
  <div style={{
    width:600
  }} className="mx-auto p-10">
    <h1 style={{
        color:'seagreen' 
    }} className="text-2xl font-bold font-link mb-8">{name}</h1>
  
    <img className="mask mask-circle mx-auto" src={img} />
    
  <form className="text-white" onSubmit={handlePlaceOrder}>
  <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="First Name" name="firstName" className="input w-full  mt-8 mb-4" />
                <br />
                <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Last Name" name="lastName" className="input w-full " /> <br />
                 <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Email " name="email" className="input w-full mt-4" />
                <br />
                <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Phone" name="phone"
                 className="input w-full  mt-4" />
                <br />
                <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Starting date" name="starting date"
                 className="input w-full  mt-4" />
                <br />
                 <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" placeholder="Return date" name="return date"
                 className="input w-full  mt-4" />
                <br />

                <textarea style={{
                    backgroundColor:'#8f1d26',
                    width:520
                }} className="textarea mt-4" placeholder="Full Address" 
                name="fulladdress" ></textarea>
                 <br />
                  
 
                <button className='btn bg-white mt-4 font-link'>Submit</button>
  </form>
  <Link to='/'>
  <button style={{
    backgroundColor:'#8f1d26',
    border:'none'
  }} className="btn text-white font-bold mt-4">Back Home
  
  </button>
  </Link>
  </div>
        </section>
    )
}
export default BuyNow;