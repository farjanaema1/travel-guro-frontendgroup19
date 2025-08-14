
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const AllUsers = () => {
    const {data: users = [],refetch} = useQuery({
        queryKey:['users'],
       queryFn: async() => {
        const res = await fetch('http://localhost:5000/users2');
        const data = await res.json();
        return data;
       }
    })
    // const handleMakeAdmin = id => {
    //   fetch(`http://localhost:5000/users2/admin/${id}`,{
    //     method:'PUT'
    //   })
    //   .then(res => res.json())
    //   .then( data => {
    //     console.log(data);
    //     if( data.modifiedCount > 0) {
    //       toast.success('make admin successful');
    //       refetch();
    //     }
    //   })

    // }
    const handleMakeAdmin = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/users2/admin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}` // send JWT
      }
    });

    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.message || 'Failed to make admin');
      return;
    }

    const data = await res.json();
    console.log(data);

    if (data.modifiedCount > 0) {
      toast.success('Make admin successful');
      refetch();
    } else {
      toast.error('No changes made');
    }
  } catch (error) {
    console.error('Error making admin:', error);
    toast.error('Something went wrong');
  }
};

    return (
        <div style={{
          height:900,
          width:900
        }} >
          <h2 style={{
    color:'darkcyan'
  }} className="text-2xl font-bold mb-16 ">Total Users :{users?.length}</h2>
            

  <div className="overflow-x-auto">
    
  <table className="table w-full">
   
    <thead>
      <tr className="text-primary">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        {/* <th>Delete</th> */}
      </tr>
    </thead>
    <tbody>
      
      { 
      users.map( (user,i) => <tr>



        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        {/* <td> { user?.role !=='admin' && <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-xs btn-primary">Make Admin</button>}</td> */}
        {/* <td><button className="btn btn-xs">Delete</button></td>
       */}
      </tr> )
      
      
      
      }
     
    </tbody>
  </table>
</div>
        </div>
    )
}
export default AllUsers;