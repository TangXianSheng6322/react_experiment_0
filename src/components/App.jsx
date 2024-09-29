import React, {useState}  from "react";

function App() {
  
  const time = new Date().toLocaleTimeString(); //<<<Here
  
  let [timeNow, updateTime] = useState(time);
  
  function currentTime() {
    const newTime = new Date().toLocaleTimeString();
    updateTime(newTime); //<<<<<<Here
  }

  //For dynamic function values are supossed to be placed inside the function? and it is better to name a value with a new name, because React will be trying to set it bact to initial value
  
  setInterval(currentTime, 1000);
 
  
  return (
    <div className="container">
      <h1>{timeNow}</h1>
      <button>Get Time</button>
    </div>
  );
}

export default App;
