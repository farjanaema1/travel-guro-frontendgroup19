const Feedback = () => {
    return (
       <section className="mt-24 mb-16">
        <div className="flex">
            <div>
                <img style={{
                    height:300
                }} src="https://i.ibb.co/WVP8kTF/car1.png" alt="" />
            </div>
            <div className="ml-16">
                <h1 className="font-link font-bold text-4xl">Customer Feedback</h1>
                <div className="divider"></div> 
                <img style={{
                    height:100
                }} src="https://i.ibb.co/t8d0nqP/quote.png" alt="" />
                <p style={{
                    width:600,
                    color:'gray'
                }} className="para-link mt-6">Along with 1000s of cars to choose from, you can apply for finance online and value your existing car all from the comfort of your favourite armchair </p>

   <p style={{
                    width:600,
                    color:'gray'
                }} className="para-link mt-6">In line with our commitment to treating customers fairly, you can find more information about Charles Hurst complaints policy here</p>
                <div className="mt-8 flex">
                    <img src="https://i.ibb.co/YyKZP1b/feed.png" alt="" />
                    <div className="mt-4">
                    <h1 style={{
                        color:'darkcyan'
                    }} className="font-link font-bold ">Devid Morgan</h1> 
                    <h1 className="ml-4 para-link font-bold">Director of Modern trade Ltd</h1>
                    </div>
                </div>

            </div>
        </div>
        <div style={{
            width:900
        }} className="flex mx-auto mt-16">
            <div style={{
        
        backgroundColor:'#e22937',
        height:200,color:'white',
        width:450
        }} className="p-10">
                <h1 className="font-bold text-2xl font-link mb-4">Reliability and Quality Service.</h1>
                <p  className="para-link">If you would like to take our service and support, please contact us. Throught our provided number.</p>
            </div>
            <div style={{
                backgroundColor:'#052046',
                
                color:'white',
                height:220,
                width:450
            }} className="p-10">
                <div >
                    
      
{/* <div className="avatar">
  <div className="w-24 rounded-full">
  <img style={{
                        height:40,
                        
                    }}  src="https://i.ibb.co/K2ZGwr7/download.png" alt="" />
  </div>
</div> */}
                    <h1 className="text-2xl font-bold font-link">+1 817-946-1548</h1>
                </div>
                <h1 className="text-xl mt-4  para-link">9:00 AM - 8.00 PM
</h1>
                <h1 className="text-xl mt-4  para-link">Sunday off
</h1>

               
            </div>
        </div>
       </section>
    )
}
export default Feedback;