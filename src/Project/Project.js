import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    console.log(this.props.categories);
    return (
      <div>
        <BudgetStatus categories={this.props.categories} />
      </div>
    );
  }
}

class BudgetStatus extends Component {
  render() {
    return (
      <Category
        title="연구 과제 추진비"
        categories={this.props.categories.filter(
          category => category.category === "연구과제추진비"
        )}
      />
    );
  }
}
class Category extends Component {
  render() {
    console.log(this.props.categories);
    var details = this.props.categories.map(category => {
      return (
        <CategoryDetail
          key={category.detail}
          detail={category.detail}
          balance={category.balance}
        />
      );
    });
    return (
      <div>
        <h3> {this.props.title}</h3>
        {details}
      </div>
    );
  }
}

class CategoryDetail extends Component {
  render() {
    return (
      <div>
        <span>{this.props.detail}</span>
        <span>{this.props.balance}</span>
      </div>
    );
  }
}
export default Project;
