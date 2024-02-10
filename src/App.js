import logo from './logo.svg';
import './App.css';
import Carousel from './components/carousel'
import  CardComponent from './components/card'
import  Navbar from './components/Navbar'
function App()
{
  const items=[{name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"},
  {name:"SHERIN",imageUrl:"https://blogger.googleusercontent.com/img/a/AVvXsEjgXgw5HF8txwSxCgI-_al7sVqoP0SzFIz4qXqhk9yXQbRksB3yD9_LbGETNmgDqxyb5TVs7Sg9xIbyf1wn6puAJVT5PSR8482xddmpFqJQi7W3Em0VxKPIFv4zTxw3O6ab_r0kD3_oXiueB7wbKIH3PkS4COzRZDEKsssT7an--0O0wyuPx21sG5TMw6s",description:"I am Sherin S, I am Coming From Varkala, I am a Mechanical Engineering Graduate"}]
  return(
    <div className='container-fluid'>
      <div className='row'>
        <Navbar/>
        <div offset-6 col-3>
          <Carousel/>
        </div>
        
      {items.map((item) => (
      <div className='col-3 mt-4'>
        <CardComponent props={item} />
      </div>
      ))}


      </div>
    </div>
  )
}

export default App;




