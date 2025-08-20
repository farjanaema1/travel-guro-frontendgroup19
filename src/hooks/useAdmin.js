// import { useEffect } from "react";
// import { useState } from "react"

// const useAdmin = email => {
//     const [isAdmin,setIsAdmin] = useState(false);
//     useEffect( () => {
//         if(email){
//             fetch(`https://travel-backend-group19-2.onrender.com/users2/admin/${email}`)
//             .then(res => res.json())
//             .then( data => {
//                 console.log(data)
//             })
//         }
//     },[email])
//     return[isAdmin]
// }
// export default useAdmin;
import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      setAdminLoading(true);
      fetch(`https://travel-backend-group19-2.onrender.com/users2/admin/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch admin status:", error);
          setIsAdmin(false);
          setAdminLoading(false);
        });
    } else {
      setIsAdmin(false);
      setAdminLoading(false);
    }
  }, [email]);

  return [isAdmin, adminLoading];
};

export default useAdmin;
