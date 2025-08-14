import { useQuery } from "react-query";

import { useState } from "react";
import Loading from "../shared/loading/loading";

import  Singleplace from "../Singleplace/singleplace"
// import banner from '../../../assets/images/bg.png'




    
    const ManagePlaces = () => {
      const {data: newCars,isLoading,refetch} = useQuery({
        queryKey:['newCars'],
        queryFn : async() => {
            try{
                const res = await fetch('http://localhost:5000/newCars',{
                    headers:{
                        'content-type':'application/json'
                       
                    }
                });
                const data = await res.json();
                return data 
            }
            catch(error){

            }

        }
    })
      // const[deleteCar,setDeleteCar] = useState(null);
      // const closeModal = () => {
      //   setDeleteCar(null)
      // }
      // const handleDeleteCar = id => {
      //   //console.log(doctor);
      //   fetch(`https://localhost:5000/newCars/${id}`,{
      //     method:'DELETE',
      // headers:{
      //   'content-type':'application/json'
      // }
      //   })
      //   .then(res => res.json())
      //   .then( data => {
      //     console.log(data)
      //     refetch();
      //   })
  
      // }
     const handleDeleteCar = (id) => {
  console.log("Deleting car with ID:", id);
  fetch(`http://localhost:5000/newCars/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Delete response:", data);
      if (data.deletedCount > 0) {
        refetch();
      }
    })
    .catch(err => console.error("Delete error:", err));
};


    if(isLoading) {
        <Loading></Loading>
    }
    return (
        <div >
            <h2 style={{
    color:'Gray'
  }} className="text-xl font-bold mb-16">Total Places :{newCars?.length}</h2>
  <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr className="text-secondary">
      <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Price</th>
        <th>Details</th>
       
        {/* <th>Action</th> */}
        
        
      </tr>
    </thead>
    <tbody>
      
    {
       newCars?.map( (newCar,i) => <tr
    
        >
            <th>
             {i+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={newCar.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  
                
                </div>
              </div>
            </td>
            <td>{newCar.name}</td>
            <td className="text-primary font-bold">
            {newCar.price}
            </td>
            
            <td>{newCar.details}</td>
<th>
            {/* <button  onClick={{handleDeleteCar}}
             className="btn btn-sm btn-error" >Delete</button> */}
             {/* <button className="btn btn-sm btn-error"
              onClick={() => handleDeleteCar(newCar._id)}>Delete</button> */}

  

              
            </th> 
          </tr>)}
    
      
     
    </tbody>
    
  
    
  </table>
  
</div>

        </div>
    )
}
export default ManagePlaces;

