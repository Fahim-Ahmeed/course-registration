import './App.css'
import Courses from './Components/Courses/Courses'
import Cart from './Components/cart/Cart'

function App() {

  return (
    <>
      <h1 className="text-4xl text-center mt-16 text-gray-950 font-bold ">
      Course Registration
    </h1>
    <section className="container mx-auto">
      <div className='grid  grid-flow-col columns-2 md:grid-cols-4 md:grid-flow-row lg:grid-cols-4 lg:grid-flow-row'>
        <Courses></Courses>
        <Cart></Cart>
      </div>
    </section>
    </>
  )
}

export default App
