import { useContext } from "react";
import { AuthContext } from "../../../context/authprovider/authprovider";
import { FacebookAuthProvider } from "firebase/auth"; 


const SocialLogIn = () => {
    const {googleSignIn} = useContext(AuthContext);
    const {facebooklogin} = useContext(AuthContext);
    const handleGoogleLogin = () => {
        googleSignIn()
        .then( result =>{
            const user =  result.user;
            console.log(user);
            const currentUser ={
                email : user.email

            }
        })


    }
    const handleFacebookLogin = () => {
        facebooklogin()
        .then((result) => {
          
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
      
          const user = result.user;
        
        })
    }
    return (
        <div>
   {/* <p style={{
    color:'darkcyan'
   }} className="text-center">Social LogIn</p> */}
   <p>
    <button onClick={handleGoogleLogin} className="btn w-4/5 btn-ghost mb-4 text-center">Google</button>
    {/* <button onClick={handleFacebookLogin} className="btn w-4/5 btn-ghost 
    mb-4 text-center">Facebook</button> */}
   </p>
        </div>
    )
}
export default SocialLogIn;