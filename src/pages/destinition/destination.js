import { useEffect, useRef, useState } from "react";
import  Singleplace from "../Singleplace/singleplace";
import './destination.css';
import ManagePlaces from "../dashboard/managePlace";
//import ManagePlaces from "../dashboard/managePlace";



const Destination = () => {
    const [isAsc,setIsAsc] = useState();
    const[cars,setCars] = useState([]);
   const searchRef = useRef();
   const [search,setSearch] = useState('');

    useEffect( () => {
        //fetch(`http://localhost:5000/cars?
       // search=${search}&order=${isAsc? 'asc' : 'dsc'}`)
        //  fetch(`http://localhost:5000/services?order=${isAsc? 'Ascending' : 'Descending '}`)
         fetch('http://localhost:5000/cars')
        
        // fetch('cars.json')
        .then(res => res.json())
        .then(data => setCars(data))
    },[isAsc,search]);
    const handleSearch = () => {
        setSearch(searchRef.current.value);
        console.log(searchRef.current.value);
    }
  
    return (
        <div style={{
            backgroundColor:'#f0f8ff',
            
        }} className="mb-10">
       <div className="my-10 p-10 mb-10">
      <h1 style={{
        color:'navy'
      }} className="font-link font-bold text-4xl">Find Your Dream Place</h1>
   <img style={{
    height:50,
    width:50,
    borderRadius:50
   }} src="https://i.ibb.co/gFBqgTh/quote-icon-design-free-vector.jpg" alt=""  className="mx-auto  mt-6"/>
   <p style={{
    width:600,
    color:'grey'
   }} className="para-link mt-6 mx-auto font-bold mb-4">Interdum neque adipiscing eros enim velit suspendisse pulvinar lacus rhoncus varius. Inceptos lobortis. Sociosqu integer litora vulputate neque.</p>

   {/* <div style={{
    width:800
   }} className="box shadow-xl mx-auto p-10 ">
    <div className=" flex justify-between items-center">
        <h1 className="para-link  font-bold text-2xl mt-8">Find A Car</h1>
        <h1 className="para-link text-2xl mt-6"><span className="text-error para-link text-xl">1260</span>Available</h1>

    </div>
    <div className="divider"></div> 
    <div className="flex">
    <div className="form-control w-full max-w-xs mr-6">
  <label className="label">
    <span className="label-text">Condition</span>
    
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pick the best fantasy franchise</span>
    
  </label>
  <select className="select select-bordered">
    <option disabled selected>Pick one</option>
    <option>Star Wars</option>
    <option>Harry Potter</option>
    <option>Lord of the Rings</option>
    <option>Planet of the Apes</option>
    <option>Star Trek</option>
  </select>
  
</div>
    </div>
    <input type="text" placeholder="Search your brand" className="input input-bordered w-full max-w-xs mt-4" ref={searchRef} />
    <button style={{
        backgroundColor:'#e22937'
    }} onClick={handleSearch} className="btn text-white ml-6 p-4">Find A Car</button>
   </div> */}
      {/* <input className="input input-bordered input-success w-full max-w-xs" ref={searchRef} type="text" /> */}
        {/* <button onClick={handleSearch}

         className="btn btn-outline btn-success">Search</button> */}
     
       
        {/* <button className="btn btn-outline btn-success mt-2 " onClick={ () => setIsAsc( !isAsc)
        }>{isAsc ? 'Descending' : 'Ascending'}</button> */}
      
  

      
       </div>
       <div className="grid  gap-6 grid-cols-1 md:grid-cols-2
        lg:grid-cols-3
        w-4/5 mx-auto my-10 mb-10">
      {/* <h3>service : {services.length}</h3> */}

      {
        cars.map( car => <Singleplace  
        
        car = {car}
        ></Singleplace>)

      }
      {/* <ManagePlaces></ManagePlaces> */}
      
       </div>
       </div>
       
    )
}
export default Destination;