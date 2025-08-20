import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loading from "../shared/loading/loading";



const AddPlace = () => {
  const imageHostKey = 'edbefae8b1684b3f3845c1c1b7ba3b43';
 const navigate = useNavigate();

    const { register, handleSubmit,formState:{errors} } = useForm();
    const{data:specialties,isLoading} = useQuery({
        queryKey : ['specialty'],
        queryFn : async() => {
            const res = await fetch('https://travel-backend-group19-2.onrender.com/specialCars');
            const data = await res.json();
            return data;

        }
    })
    // const handleAddCar = data => {

    //     //console.log(data)
    //     const img = data.img[0];
    //    // console.log(data.image[0])
    //    const formData = new FormData();
    //    formData.append('image',img);
    //    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    //    fetch(url,{
    //     method:'POST',
    //     body:formData
    //    })
    //    .then(res => res.json())
    //    .then( imgData => {
    //     console.log(imgData);
    //     if(imgData.success) {
    //       console.log(imgData.data.url)
    //     }
    //    const car = {
    //       name:data.name,
    //       email:data.email,
    //       specialty:data.specialty,
    //       img:imgData.data.url
    //     }
    //     fetch(`https://travel-backend-group19-2.onrender.com/newCars`,{
    //       method:'POST',
    //       headers:{
    //         'content-type':'application/json'
    //       },
    //       body:JSON.stringify(car)
    //     })
    //     .then(res => res.json())
    //     .then( result => {
    //       console.log(result);
    //       toast.success(`${car.name} is added successfully`);
    //     //   navigate('/dashboard/managedoctors');
          
    //     })
      
      
      
    //    } )

    //   }
    const handleAddCar = data => {
  const img = data.img?.[0];
  if (!img) {
    toast.error("Please select an image");
    return;
  }

  const formData = new FormData();
  formData.append('image', img);

  const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(imgData => {
    if (!imgData.success || !imgData.data?.url) {
      toast.error("Image upload failed");
      return;
    }

    const car = {
      name: data.name,
      email: data.email,
      specialty: data.specialty,
      img: imgData.data.url,
      details: data.details,
      price: data.price
    };

    return fetch(`https://travel-backend-group19-2.onrender.com/newCars`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(car)
    });
  })
  .then(res => {
    if (!res) return; // already handled error
    if (!res.ok) throw new Error("Failed to add car");
    return res.json();
  })
  .then(result => {
    if (result) {
      toast.success(`${result.name || "Car"} added successfully`);
    }
  })
  .catch(err => {
    console.error(err);
    toast.error("Something went wrong");
  });
};

   
    if(isLoading) {
        return <Loading></Loading>
    }
    return (
       <section className="flex">
         <div className="w-96 p-7">
           
           <form onSubmit={handleSubmit(handleAddCar)}>
          
          <div className="form-control w-full ">
        <label className="label">
          <span className="label-text">Name</span>
        
          
        </label>
        
        <input  type="text" {...register("name",{
          required:"Name is  required"
        })} className="input input-bordered w-full bg-red-100" placeholder="Name" />
       </div>
       <div className="form-control w-full ">
       {errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
        <label className="label">
          <span className="label-text">Price</span>
        
          
        </label>
        
        <input  type="text" {...register("price",{
          required:"price required"
        })} className="input input-bordered w-full bg-blue-100" 
        placeholder="Price" />
       </div>
       <div className="form-control w-full ">
       {errors.price && <p className="text-red-600" role="alert">{errors.price?.message}</p>}
        {/* <label className="label">
          <span className="label-text">Brand</span>
        
          
        </label> */}
        {/* <select className="select select-bordered bg-orange-100 w-full max-w-xs">
         <option  selected>pick a place</option>
        
        {
           specialties.map( specialty =>  <option 
           key = { specialty._id}
           value={specialty.name}
           
           >{specialty.name}</option>)
        }
       </select> */}
       <label className="label">
          <span className="label-text">Details</span>
          </label>
          <input  type="text" {...register("details",{
          required:"details required"
        })} className="input input-bordered w-full bg-blue-100" 
        placeholder="Details" />
        
          
        
       <label className="label">
          <span className="label-text">Photo</span>
        
          
        </label>
        
        <input  type="file" {...register("img",{
          required:"image required"
        })} className="input input-bordered p-2 bg-yellow-100 w-full" placeholder="photo" />
        
       </div>
            <input type="submit" className="btn  w-full mt-5" />
          </form>
               </div>
               
               <div className="avatar">
  <div className="w-96 rounded-full ml-16 ring ring-secondary ring-offset-base-100 ring-offset-2">
    <img  src="https://i.ibb.co.com/VGdwc13/th.jpg" />
  </div>
  </div>
       </section>
    )
}
export default AddPlace;