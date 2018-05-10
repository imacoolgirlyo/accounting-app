import React, { Component } from "react";
import Project from "./Project/Project";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Project categories={categories} />
      </div>
    );
  }
}

const categories = [
  { category: "연구과제추진비", detail: "국내여비", balance: "500,000" },
  { category: "연구과제추진비", detail: "사무용품비", balance: "740,000" },
  { category: "연구과제추진비", detail: "식대", balance: "200,000" },
  { category: "연구과제추진비", detail: "회의비", balance: "880,000" },
  { category: "연구활동비", detail: "국외여비", balance: "880,000" },
  { category: "연구활동비", detail: "논문개재료", balance: "120,000" },
  { category: "연구활동비", detail: "학회참가비", balance: "30,000" },
  { category: "연구장비재료비", detail: "재료비", balance: "0" },
  { category: "연구수당", detail: "연구수당", balance: "0" }
];

export default App;
