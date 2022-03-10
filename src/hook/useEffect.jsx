import React, { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState("users");
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   console.log("render " + user)
  // },[user])

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${user}`)
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // },[user]);

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    });
    return () => {
      console.log("Cleaning");
    };
  }, []);

  return (
    <div className="container">
      <p>Users: {user}</p>
      <div className="btn-group">
        <button className="success" onClick={() => setUser("users")}>
          Web Developer
        </button>
        <button className="danger" onClick={() => setUser("posts")}>
          Android Developer
        </button>
        <button className="secondary" onClick={() => setUser("comments")}>
          IOS Devoloper
        </button>
      </div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(position, null, 2)}</pre>
    </div>
  );
}

export default App;
