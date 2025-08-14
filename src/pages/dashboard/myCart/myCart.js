import { useContext } from "react";

import { useQuery } from "react-query";
import { AuthContext } from "../../../context/authprovider/authprovider";
import { Link } from "react-router-dom";


const MyCart = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/orders2?email=${user?.email}`
    const {data: order = []} = useQuery({
        queryKey:['order',user?.email],
        queryFn:async() => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })
    return (

       <section >
         <div className="overflow-x-auto">
         <h3 className="text-3xl text-warning pera-link">My Cart</h3>

         <div className="overflow-x-auto mt-8">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr style={{
                               backgroundColor:'seagreen'
                           }} className="text-white font-bold">
        <th></th>
        <th>Name</th>
        <th>Booking place</th>
        <th>Email</th>
        
        <th>Phone</th>
        <th>Address</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
    {
        order.map((odr,i) => <tr>
            <th>{i+1}</th>
            <td>
                {odr.customer}
            </td>
            <td>
                {odr.servicename}
            </td>
            <td>
                {odr.email}
            </td>
            <td>
                {odr.phone}
            </td>
            <td>
                {odr.address}
            </td>
            <td>
                {odr.price}
            </td>
            {/* <td>
                {
                    odr.price && !odr.paid &&
                    <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn  btn-primary">Pay</button>
                    </Link>
                }
            </td> */}
        </tr>)
    }
      
    </tbody>
  </table>
</div>
        </div>
       </section>
    )
}
export default MyCart;