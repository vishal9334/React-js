import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const result = await response.json();
    setData(result); // store in state
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map((elem, idx) => (
          <h3 key={idx}>{elem.author}</h3>
        ))}
      </div>
    </div>
  );
};

export default App;
