import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3200/api/message")
      .then((response: any) => {
        setMessage(response.data);
        console.log("res", response.data);
      })
      .catch((error: any) => {
        console.error("There was an error!", error);
      });
  }, []);

  return <div className="App">test project {message}</div>;
}

export default App;
