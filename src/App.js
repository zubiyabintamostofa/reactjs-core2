import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const[users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))


  },[])
  return(
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user=><Users name={user.name}email={user.email}></Users>)
      }
    </div>
  )
}
function Users(props){
  return(
    <div style={{border:'2px solid pink',margin:'20px'}}>
      <h3>Name:{props.name}</h3>
      <p>Email:{props.email}</p>
    </div>
  )
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
