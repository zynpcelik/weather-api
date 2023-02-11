import "./App.css";
import Search from "./Search";
import { useTheme } from "./ThemeContext";
import ListItem from "./ListItem";
import { useState } from "react";
import Toggle from "./Toggle";

function App() {
  const [data, setData] = useState(null);
  const { theme } = useTheme();

  return (
    <div id={`${theme}`} className="App">
      <Toggle />
      <Search data={data} setData={setData} />
      <ListItem data={data} />
    </div>
  );
}

export default App;
