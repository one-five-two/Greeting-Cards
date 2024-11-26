import React from "react";
import GreetingCards from "./Components/GreetingCards";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header/>

      <div className="flex justify-between">
    <GreetingCards title={"Best of Luck!"} message={"Wishing you success and positivity for your next big step!"}/>
      <GreetingCards title={"Get Well Soon!"} message={"Sending you warm wishes for a speedy recovery!"}/>
      <GreetingCards title={"Happy Anniversary!"} message={"Wishing you many more years of love and happiness together!"}/>
      </div>
      
    </div>
  );
};

export default App;
