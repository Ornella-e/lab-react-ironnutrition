import './App.css';
import { useState } from "react";
import 'antd/dist/antd.css';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import AddFoodForm from './component/AddFoodForm';


function App() {
  const [food, setFoods] = useState(foods)
  return (
    <div className="App">
       <Button> Hide Form / Add New Food </Button>
       {}
       <Divider>Food List</Divider>
       <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foods.map((food)=>{
           return(
            <div className='food-list'> 
            <FoodBox food={food} />
           </div>
          )
        })}
        </Row>
         
      
    </div>
  );
}

export default App;
