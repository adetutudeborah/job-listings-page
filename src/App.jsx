import React from 'react';
import "./App.css"
import data from "./data.json";
import Filter from './components/Filter/Filter';
import Jobs from "./components/Jobs";
import { useState } from "react";

function App() {
  const [filterKeywords, setfilterKeywords] = useState([]);


  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setfilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setfilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setfilterKeywords([]);
  };

  return (
    <div>
      <div className="Header"></div>

      {filterKeywords.length > 0 && (
        <Filter
          keywords={filterKeywords}
          removeKeywords={deleteKeyword}
          clearAll={clearAll}
        />
      )}

      <Jobs
        keywords={filterKeywords}
        data={data}
        setKeywords={addFilterKeywords}
      />
    </div>
  );
}

export default App;
