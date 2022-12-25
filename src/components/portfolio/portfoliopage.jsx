import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import portfolio from "../../data/portfolio";
import { useParams } from "react-router-dom";

export default function PortfolioPage() {
  const {  projectId } = useParams();
  const project = portfolio.find(project => project.id === projectId);
  console.log(project); // log the value of the project variable

  if (project) {
    return (
      <>
        <h1>{project.id}</h1>
        <h1>{project.title}</h1>
      </>
    );
  } else {
    return <p>No project found</p>;
  }
}