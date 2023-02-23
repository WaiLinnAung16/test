import React from "react";
import EventCard from "./Components/EventCard";
import EventCard2 from "./Components/EventCard2";


const App = () => {
  return (
    <div className="w-full h-[3000px]">
      <EventCard></EventCard>
      <EventCard2/>
    </div>
  );
};

export default App;
