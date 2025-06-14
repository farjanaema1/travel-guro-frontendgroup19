
      


const Banner = () => {
    return (
//      <div className='mt-8'>
//         <div className="carousel  mx-auto">
//   <div id="slide1" className="carousel-item relative w-full " >
 
//   <img src="C:\Users\HP\Downloads\0dc14c441e26c1bdec043fc3a149033a.jpg" className="w-full h-3/4" />
  
 
//     <div className="absolute flex justify-between transform -translate-y-1/2   right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
    
//     </div>
//     <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           
          
//     <h1 className='text-white text-3xl'>  Streetwear Collection</h1>
           
          
//   </div>
//   <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-24  top-2/3 w-2/5">
//           <button className="btn  mr-5 btn-warning text-white mt-5">See More</button>
      
//           </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">

//     <img src="https://i.ibb.co/GWmbcRr/car15.webp" className="w-full h-3/4" />
    
//     <div className="absolute flex justify-between transform -translate-y-1/2  right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//     <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           
//          <h1 className='text-white text-3xl'>  Streetwear Collection</h1>
           
//           </div>
//           <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
//           <button className="btn  text-white mr-5 btn-warning mt-5">Shop Now</button>
      
//           </div>
//   {/* <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-24  top-1/2 ">
//           <button className="btn  mr-5 btn-warning mt-5">Shop Now</button>
      
//           </div> */}
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/V2Yt423/0x0.webp" className="w-full h-3/4" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//     <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
          
//           <h1 className='text-white text-4xl'> Women Collection</h1>
          
//           </div>
//           <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
//           <button className=" btn  btn-warning text-white mt-5">Shop Now</button>
      
//           </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/2dyLBMd/car4.jpg" className="w-full h-3/4" />
//     <div className="absolute flex justify-between transform -translate-y-1/2  right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle  mr-5">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//     <div className="absolute flex justify-end mr-5 transform -translate-y-1/2 left-20  top-1/2 mb-10 ">
           
//           <h1 className='text-white text-4xl'> with flat 25% discount</h1>
           
//           </div>
//           <div className="absolute flex justify-start mr-5 transform -translate-y-1/2 left-20  top-2/3 ">
//           <button className="btn  text-white mr-5 btn-warning ">Shop Now </button>
      
//           </div>
//   </div>
// </div>
//      </div>
<div classname="mt-8 mb-8">
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>
    )
}


export default Banner;