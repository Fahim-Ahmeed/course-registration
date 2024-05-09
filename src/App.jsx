import './App.css'
import { useEffect, useState } from "react";
import Courses from './Components/Courses/Courses'
import Cart from './Components/cart/Cart'

function App() {
  const[courses,setCourses]=useState([]);
  const[cart,setCart]=useState([])
    useEffect(()=>{
        fetch("courses.json")
        .then(respone=>respone.json()
        .then(data=>setCourses(data)  
      )
    )
    
    },[])
    const handleCourses=(course)=>{
      console.log(course)
      const cartItems=[...cart, course]
      setCart(cartItems)
    }    
    console.log(cart)
  return (
    <>
      <h1 className="text-4xl text-center mt-16 text-gray-950 font-bold ">
      Course Registration
    </h1>
    <section className="container mx-auto">
      <div className='grid md:grid-cols-5 md:grid-flow-row lg:grid-cols-5 lg:grid-flow-row gap-6 mt-10 '>
        <Courses 
          handleCourses={handleCourses}
          courses={courses}>

        </Courses>
        <Cart cart={cart}
        ></Cart>
      </div>
    </section>
    </>
  )
}

export default App
