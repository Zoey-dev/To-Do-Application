import React from 'react';
import Category from './Components/CategoryComponent/category'



function App() {

  const data = [
    {
      tag: "Personal",
      totalTask: 1,
      completedTask: 0,
      color: "blue"
    }
  ]

  return (
    <div>
      {
        data.map(x => <Category data = {x} />)
      }
    </div>

   
  );
}

export default App;
