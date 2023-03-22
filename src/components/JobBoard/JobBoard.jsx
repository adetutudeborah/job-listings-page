import React, { useEffect, useState } from "react";
import "./JobBoard.css"

// destructuring assignment syntax extracts the properties of an object and assigning them to variables with the same name as the properties
const JobBoard = (props) => {
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,

    position,
    postedAt,
    role,
    tools,
  } = props.data;

  let keywords = [role, level, ...languages, ...tools];


  return (
    <div className={ featured ? "jobsContainer jobsContainerBorderleft" : "jobsContainer"}>

        <div className="aboutrole">

            <div className="companylogo">
            <img src={logo} alt="company-logo" className="companylogo" />
            </div>

            <div className="roleinfo">
                <div className="company">
                    <h1 className="companyname">{company}</h1>
                    {props.data.new && <span className="new">new!</span>}
                    {props.data.featured && <span className="featured">featured</span>}
                </div>

                <h2 className="role">{position}</h2>

                <p className="rolesubinfo">
                    <span className="date">{postedAt}</span>
                    <img src="https://img.icons8.com/material-rounded/24/null/full-stop.png" className="period"/>
                    <span className="contract">{contract}</span>
                    <img src="https://img.icons8.com/material-rounded/24/null/full-stop.png " className="period"/>
                    <span className="country">{location}</span>
                </p>
            </div>

        </div>
   
        <div className="rolekeywords">
            {keywords.map((key, id) => (
            <span className="keyword" onClick={() => props.setkeywords(key)} key={id}>
                {key}
            </span>
            ))}
        </div>
    </div>
  );
};

export default JobBoard;
