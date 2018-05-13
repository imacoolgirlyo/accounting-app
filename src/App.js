import React, { Component } from "react";
import Project from "./Project";
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
  {
    category: "연구과제추진비",
    detail: "국내여비",
    balance: "500,000",
    usages: [
      {
        id: 1,
        date: "18.03.11",
        name: "제주도 숙박비 결제",
        cost: "-300,000"
      },
      {
        id: 2,
        date: "18.03.11",
        name: "출장",
        cost: "-150,000"
      }
    ]
  },
  {
    category: "연구과제추진비",
    detail: "사무용품비",
    balance: "780,000",
    usages: [
      {
        id: 1,
        date: "18.02.11",
        name: "삼성 토너 506T 결제",
        cost: "-750,000"
      },
      { id: 2, date: "18.02.12", name: "오피스 디포 결제", cost: "-30,000" }
    ]
  },
  { category: "연구과제추진비", detail: "식대", balance: "200,000" },
  { category: "연구과제추진비", detail: "회의비", balance: "880,000" },
  { category: "연구활동비", detail: "국외여비", balance: "880,000" },
  { category: "연구활동비", detail: "논문개재료", balance: "120,000" },
  { category: "연구활동비", detail: "학회참가비", balance: "30,000" },
  { category: "연구장비재료비", detail: "재료비", balance: "0" },
  { category: "연구수당", detail: "연구수당", balance: "0" }
];

export default App;
