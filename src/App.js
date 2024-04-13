import { Container } from "@mui/material";
import Selector from "./components/selector";
import { useState } from "react";

function App() {

  const [srcStation, setSrcStation] = useState('')
  const [destStation, setDestStation] = useState('')
  const handleSrcChange = (stn) => {
    setSrcStation(stn)
    console.log("Src: " + stn);
  }
  const handleDestChange = (stn) => {
    setDestStation(stn)
    console.log("Dest: " + stn);
  }
  return (
    <Container sx={{bgcolor: "black", height: '100vh', p: 1} }>
      Hello World
      <Selector type="Source" onSelChange={handleSrcChange}/>
      <Selector type="Destination" onSelChange={handleDestChange}/>
    </Container>
  );
}

export default App;
