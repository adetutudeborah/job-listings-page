import React from "react"; 
import "./Jobs.css"; 



function Jobs (props) {
    return (
        <div className="jobs">

            <div className="aboutrole">

                <div className="companylogo">
                   <img src={props.item.logo} alt="company-logo" className="companylogo" />
                </div>

                <div className="roleinfo">
                    <h1 className="companyname">{props.item.company}</h1>
                    <h2 className="role">{props.item.position}</h2>

                    <p className="rolesubinfo">
                        <span className="date">{props.item.postedAt}</span>
                        <img src="https://img.icons8.com/material-rounded/24/null/full-stop.png" className="period"/>
                        <span className="contract">{props.item.contract}</span>
                        <img src="https://img.icons8.com/material-rounded/24/null/full-stop.png " className="period"/>
                        <span className="country">{props.item.location}</span>
                    </p>
                </div>

            </div>
           
            <div className="rolekeywords">
                <p className="keyword">{props.item.role}</p>
                <p className="keyword">{props.item.level}</p>
                <p className="keyword">{props.item.languages[0]}</p>
                <p className="keyword">{props.item.languages[1]}</p>
                <p className="keyword">{props.item.languages[2]}</p>
                <p className="keyword">{props.item.tools[0]}</p>
                <p className="keyword">{props.item.tools[1]}</p>
            </div>
        </div>
    )
}

export default Jobs;