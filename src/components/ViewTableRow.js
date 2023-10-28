import React from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewTableRow(props) {
  const DeleteStudent = () => {
    //let url = "http://localhost:5500/students/delete-student/";
    let url = "https://studentdatabase-ayyh.onrender.com/students/delete-student/";
    
    axios
      .delete(url + props.obj._id)
      .then((res) => {
        if (res.status === 200) {
          alert("Student deleted successfully");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{props.obj.name}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.password}</td>
      <Link to={`/edit/${props.obj._id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={DeleteStudent}> Delete</button>
    </tr>
  );
}

export default ViewTableRow;

