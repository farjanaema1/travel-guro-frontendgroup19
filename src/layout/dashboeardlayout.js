import { Link, Outlet } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../context/authprovider/authprovider";
import Navbar from "../pages/shared/navbar/navbar";
import useAdmin from "../hooks/useAdmin";

const DashBoardLayout = () => {
  const {user} = useContext(AuthContext);
  const[isAdmin] = useAdmin(user?.email);

    return (
        <div>
       <Navbar></Navbar>
      
      
  <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    {/* <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      
      <li><Link to='/dashboard/allusers'>AllUsers</Link></li>
      <li><Link t0='/dashboard'>MyCart</Link></li>
      <li><Link to='/dashboard/addCar'>Add A Place</Link></li>
      <li>
        <Link to='/dashboard/manageCar'>Manage Places</Link>
      </li>
      <li>
        <Link to='/dashboard/dashboard'>Dashboard</Link>
      </li>
    </ul> */}
     <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
        
        <li><Link t0='/dashboard'>MyCart</Link></li>
        {isAdmin && (
          <>
            <li><a href="/allusers">All Users</a></li>
            <li><a href="/addCar">Add Place</a></li>
            <li><a href="/manageCar">Manage Place</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
          </>
        )}
      </ul>
  
  </div>
</div>
</div>
        


    )
}
export default DashBoardLayout;