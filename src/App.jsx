import React from 'react';
import './App.css'
import Header from './components/Header/Header';
import Jobs from './components/Jobs/Jobs';
import data from "./data"

function App() {

  const JobSection = data.map(item => {
    return (
      <Jobs 
         key={item.id}
         item={item}
      />
    )
  })

  return (
    <div className="App">
          <Header />
          {JobSection}
     </div>
  )
}

export default App;
