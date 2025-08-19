import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import { AuthContext } from "../context/authprovider/authprovider";


const SignUp = () => {
    const {createUser,updateUser} = useContext(AuthContext);
    const { register, handleSubmit,formState:{errors} } = useForm();
    const navigate = useNavigate();
    // const [data, setData] = useState("");
    
    
    const handleSignUp = (data) => {
      console.log(data);
      createUser(data.email,data.password)
     .then(result => {
        const user = result.user;
        console.log(user);
        toast('user created successfully')
        const userInfo = {
        displayName : data.name
        }
        updateUser(userInfo)
        .then( () => {
        saveUser(data.name,data.email)
        })
        .catch( error => console.log( error ))
     })
    }
   const saveUser = (name,email) => {
    const user = {name,email};
    fetch('https://travel-backend-group19.vercel.app/users2',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then( data => {
      getUserToken(email);
      console.log(data);
     
    })
   }
   const getUserToken = email => {
    fetch(`https://travel-backend-group19.vercel.app/jwt?.email=${email}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.accessToken){
        localStorage.setItem('accessToken',data.accessToken);
        navigate('/')
      }
    })
   }
    return (
        <div className="h-[800px] flex justify-center items-center text-white">
<div className="w-96">
 <img className="mask mask-circle ml-16" src="https://i.ibb.co/Z8WbMvT/images-14.jpg" /> 

    <h2 className="text-2xl text-center text-secondary font-bold mt-4">SignUp</h2>
    <form onSubmit={handleSubmit(handleSignUp)}>
   
    <div className="form-control w-full ">
  <label className="label">
    <span  className="label-text font-bold font-link">Name</span>
  
    
  </label>
  
  <input style={{
                    backgroundColor:'#8f1d26'
                }} type="text" {...register("name",{
    required:"Name is  required"
  })} className="input input-bordered w-full" placeholder="Name" />
</div>
<div className="form-control w-full ">
{errors.name && <p className="text-red-600" role="alert">{errors.name?.message}</p>}
  <label className="label">
    <span className="label-text font-bold font-link">Email</span>
  
    
  </label>
  
  <input  style={{
                    backgroundColor:'#8f1d26'
                }} type="email" {...register("email",{
    required:"email address required"
  })} className="input input-bordered w-full" placeholder="Email" />
</div>
<div className="form-control w-full ">
{errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}
  <label className="label">
    <span className="label-text font-bold font-link">Password</span>
  
    
  </label>
  
  <input style={{
                    backgroundColor:'#8f1d26'
                }}  type="password" {...register("password",{
    required:true,minLength:{value:6,message:'password must be 6 character'}
  })} className="input input-bordered w-full" placeholder="Password" />
  <label className="label">
    <span className="label-text font-bold font-link">Phone</span>
  
    
  </label>
  
  <input style={{
                    backgroundColor:'#8f1d26'
                }}  type="phone" {...register("phone",{
    required:true,minLength:{value:6,message:'phone must be 11 character'}
  })} className="input input-bordered w-full" placeholder="Password" />
  {errors.phone && <p className="text-red-600" role="alert">{errors.phone?.message}</p>}
</div>
      <input style={{
                    backgroundColor:'#8f1d26'
                }} type="submit" className="btn  w-full mt-5 font-bold text-white" />
    </form>
    <h1 className="text-xl text-primary font-bold mt-4">Already have an account? please <Link className="text-secondary" to='/login'>LogIn</Link></h1>
   
</div>

        </div>
    )
}
export default SignUp;