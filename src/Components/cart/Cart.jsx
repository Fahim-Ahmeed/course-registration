import PropTypes from "prop-types";

const Cart = ({cart}) => {
    let creditHour=0;
    let courseTitle=[]
    let totalPrice=0;
    cart.map((item)=>{
        creditHour+=item.credit
        courseTitle=[...courseTitle,item.courseTitle]
        totalPrice+=item.price;
    })
    let remainigHour=(20-creditHour);  
    return (
        <div className="bg-gray-200 shadow-xl p-4 flex flex-col justify-between space-y-2 h-fit order-first md:order-last lg:order-last">
           <div className='divide-y divide-slate-700'>
            <h2 className='divide-y divide-slate-7 text-blue-600 font-bold'>
                {
                (remainigHour<0)?<span>You have no remainig {}credit hours</span>: 
                <span>Credit hour Remaining {remainigHour} hr </span>
                } </h2>
            <div>
                <h1 className="text-xl text-black font-bold">Course Name:</h1>
                <ol>{courseTitle.map((item,index)=><p key={index}>{item}</p>)}</ol>
            </div>
            <h2>Total Credit Hour : {creditHour}</h2>
            <h2 >total Price: {totalPrice} USD </h2>
           </div>
        </div>
    );
};
    Cart.propTypes={
    cart:PropTypes.array
}

export default Cart;