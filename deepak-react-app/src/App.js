import React, { useState } from "react";
import DateInputComponent from "./components/DateInputComponent";
import StyledComponent from "./components/StyledComponent";
import Gallery from "./components/SculptureListComponent";
import Button from "./components/buttonComponent";
import ItemList from "./components/ItemListComponent";
import Lifecycle from "./components/LifeCycle";

const App = () => {
  const [date, setDate] = useState("");

  return (
    <>
      <DateInputComponent onDateChange={setDate} />
      <StyledComponent newDate={date} />
      <Gallery />
      <ItemList />
      <Lifecycle />
      <Button />
    </>
  );
};

export default App;
