import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function EditPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const obj1 = useParams();

  useEffect(() => {
    axios
      //.get("http://localhost:5500/students/update-student/" + obj1.id)
      .get("https://studentdatabase-ayyh.onrender.com/students/update-student/" + obj1.id)
      .then((res) => {
        if (res.status === 200) {
          setName(res.data.name);
          setEmail(res.data.email);
          setPassword(res.data.password);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [obj1.id]);

  const handleSubmit = () => {
    //const url = "http://localhost:5500/students/update-student/" + obj1.id;
    const url = "https://studentdatabase-ayyh.onrender.com/students/update-student/" + obj1.id;
    const newData = { name, email, password };
    axios
      .put(url, newData)
      .then((res) => {
        if (res.status === 200) {
          alert("student updated");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input id="submit" type="submit" value="submit" />
      </form>
    </div>
  );
}

export default EditPage;
