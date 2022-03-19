import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {





//onno ekta way shikhar jonno aita comment kochi

// const products=[
//   {
//     name:'laptop',price:80000},
//     {name:'phone',price:72000},
//     {name:'watch',price:8000},
//     {name:'tablet',price:30000}
  
// ]

  return (
    <div className="App"> 
      <Counter></Counter>
    </div>
  );
}
function Counter(){
const [count,setCount] =useState(33);
const increaseCount=()=>setCount(count+1);
const decreaseCount=()=>setCount(count-1);




// const increaseCount=()=>{
//   const newCount=count+1;
//   setCount(newCount);
//}
//console.log(abc)

  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}










/*{ eita return er por div eer vitorer angsho dynamic way te:


//   products.map(product=><Product name={product.name}  price={product.price}></Product>)
// }


//  <Product name="laptop" price="80000"></Product>
// <Product name="phone"price="79000"></Product>

// <Product name="watch"price="9000"></Product>
*/

function Product(props){
  return(
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
