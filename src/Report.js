import React, { Component } from "react";
import "./Report.css";

class Report extends Component {
  render() {
    return (
      <div>
        <ReportCategory
          title="연구과제추진비"
          categories={this.props.categories.filter(
            category => category.category === "연구과제추진비"
          )}
        />
      </div>
    );
  }
}

class ReportCategory extends Component {
  render() {
    console.log("ReportCatecory", this.props);
    var details = this.props.categories.map(detail => {
      return <ReportCategoryRow title={detail.detail} usages={detail.usages} />;
    });
    return (
      <div>
        <h2>{this.props.title}</h2>
        {details}
      </div>
    );
  }
}

class ReportCategoryRow extends Component {
  render() {
    console.log(this.props.usages);
    return <div>{this.props.title}</div>;
  }
}

export default Report;
