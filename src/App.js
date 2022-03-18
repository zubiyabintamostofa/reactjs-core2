import logo from './logo.svg';
import './App.css';

function App() {
const products=[
  {
    name:'laptop',price:80000},
    {name:'phone',price:72000},
    {name:'watch',price:8000},
    {name:'tablet',price:30000}
  
]

  return (
    <div className="App">


      {/* dynamic way */}

     {
        products.map(product=><Product name={product.name}  price={product.price}></Product>)
     }


      {/* <Product name="laptop" price="80000"></Product>
      <Product name="phone"price="79000"></Product>
      
      <Product name="watch"price="9000"></Product> */}

      
      
    </div>
  );
}
function Product(props){
  return(
    <div className="product">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  )
}

export default App;
