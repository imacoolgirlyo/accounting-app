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
        <ReportCategory
          title="연구활동비"
          categories={this.props.categories.filter(
            category => category.category === "연구활동비"
          )}
        />
        <ReportCategory
          title="연구장비재료비"
          categories={this.props.categories.filter(
            category => category.category === "연구장비재료비"
          )}
        />
        <ReportCategory
          title="연구수당"
          categories={this.props.categories.filter(
            category => category.category === "연구수당"
          )}
        />
      </div>
    );
  }
}

class ReportCategory extends Component {
  render() {
    var details = this.props.categories.map(detail => {
      return <ReportCategoryRow title={detail.detail} usages={detail.usages} />;
    });
    return (
      <div className="report__category">
        <h2>{this.props.title}</h2>
        {details}
      </div>
    );
  }
}

class ReportCategoryRow extends Component {
  render() {
    console.log(this.props.usages);
    var usages = this.props.usages.map(usage => {
      return (
        <CategoryRowDetail
          date={usage.date}
          name={usage.name}
          cost={usage.cost}
        />
      );
    });
    return (
      <div>
        {this.props.title}
        {usages}
      </div>
    );
  }
}

class CategoryRowDetail extends Component {
  render() {
    return (
      <div>
        <span> {this.props.date}</span>
        <span> {this.props.name}</span>
        <span> {this.props.cost}</span>
      </div>
    );
  }
}
export default Report;
