import React, { Component } from "react";
import "./Project.css";
import UserInput from "./UserInput";

class Project extends Component {
  render() {
    console.log(this.props.categories);
    return (
      <div>
        <BudgetStatus categories={this.props.categories} />
        <UserInput />
      </div>
    );
  }
}

class BudgetStatus extends Component {
  render() {
    return (
      <div className="BudgetStatus">
        <Category
          title="연구 과제 추진비"
          categories={this.props.categories.filter(
            category => category.category === "연구과제추진비"
          )}
        />
        <Category
          title="연구활동비"
          categories={this.props.categories.filter(
            category => category.category === "연구활동비"
          )}
        />
        <Category
          title="연구장비,재료비"
          categories={this.props.categories.filter(
            category => category.category === "연구장비재료비"
          )}
        />
        <Category
          title="연구수당"
          categories={this.props.categories.filter(
            category => category.category === "연구수당"
          )}
        />
      </div>
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
      <div className="Category">
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
        <span className="Detail__Name">{this.props.detail}</span>
        <span>{this.props.balance}</span>
      </div>
    );
  }
}
export default Project;
