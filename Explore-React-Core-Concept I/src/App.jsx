import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import Actors from "./Actors";
import Singer from "./Singer";

function App() {
  const Actor = [
    "Tom Hanks",
    "Tom Cruise",
    "Brad Pitt",
    "Leonardo DiCaprio",
    "Johnny Depp",
  ];
  const Singers = [
    { id: 1, name: "Arijit Singh", age: 34 },
    { id: 2, name: "Atif Aslam", age: 38 },
    { id: 3, name: "Arman Malik", age: 26 },
    { id: 4, name: "Sonu Nigam", age: 48 },
    { id: 5, name: "Shreya Ghoshal", age: 37 },
  ];
  return (
    <>
      {/* Props */}
      <Device name="Xiaomi" price="34000" model="Note 13 Pro 5G"></Device>
      <Device name="Samsung" price="40000" model="S22 Ultra"></Device>
      <Student></Student>
      {/* Conditional Rendering */}
      <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Learn Node" isDone={false}></Todo>
      <Todo task="Learn Express" isDone={false}></Todo>
      {/* Passing Array using map */}
      {Actor.map((actor) => (
        <Actors name={actor}></Actors>
      ))}

      {Singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
    </>
  );
}

// Props in React
// Props are arguments passed into React components. Props are passed to components via HTML attributes.
function Device(props) {
  return (
    <>
      <div
        style={{
          backgroundColor: "lightgray",
          border: "3px solid lightblue",
          borderRadius: "10px",
          margin: "10px",
          padding: "10px",
        }}
      >
        <h1>Device</h1>
        <h2>Brand: {props.brand}</h2>
        <h2>Model: {props.model}</h2>
        <h2>Price: {props.price}</h2>
      </div>
    </>
  );
}

function Student() {
  const student = {
    name: "Sarafat Karim",
    age: 21,
    address: "Dhaka, Bangladesh",
    phone: "01700000000",
  };
  const studentStyle = {
    backgroundColor: "lightgray",
    border: "3px solid lightblue",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
  };
  return (
    <>
      <div className="student">
        {" "}
        {/* style from css */}
        <h1>Student</h1>
        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <h2>Address: {student.address}</h2>
        <h2>Phone: {student.phone}</h2>
      </div>

      <div style={studentStyle}>
        {" "}
        {/* style from object */}
        <h1>Student</h1>
        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <h2>Address: {student.address}</h2>
        <h2>Phone: {student.phone}</h2>
      </div>

      <div
        style={{
          backgroundColor: "yellow",
          border: "3px solid lightblue",
          borderRadius: "10px",
          margin: "10px",
          padding: "10px",
        }}
      >
        {" "}
        {/* style direct using object */}
        <h1>Student</h1>
        <h2>Name: {student.name}</h2>
        <h2>Age: {student.age}</h2>
        <h2>Address: {student.address}</h2>
        <h2>Phone: {student.phone}</h2>
      </div>
    </>
  );
}

export default App;
