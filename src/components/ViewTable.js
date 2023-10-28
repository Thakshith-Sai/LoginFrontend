import React, { useEffect, useState } from "react";
import ViewTableRow from "./ViewTableRow";
import axios from "axios";
import "./styles.css";

function ViewTable() {
    const [students, setStudent] = useState([]);
    useEffect(() => {
      axios
        /*.get("http://localhost:5500/students")*/
        .get("https://studentdatabase-ayyh.onrender.com/students")
        .then(({ data }) => {
          setStudent(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    const TableData = () => {
      console.log(students);
      return students.map((res, i) => {
        return <ViewTableRow obj={res} key={i} />;
      });
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{TableData()}</tbody>
        </table>
      </div>
    );
  }

export default ViewTable;
