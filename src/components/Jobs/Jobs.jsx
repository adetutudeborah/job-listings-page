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
                    <div className="company">
                        <h1 className="companyname">{props.item.company}</h1>
                        {props.item.new && <span className="new">new!</span>}
                        {props.item.featured && <span className="featured">featured</span>}
                    </div>

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
                <span className="keyword">{props.item.role}</span>
                <span className="keyword">{props.item.level}</span>
                {props.item.languages && <span className="keyword">{props.item.languages}</span>}
                {props.item.tools && <span className="keyword">{props.item.tools}</span>}
            </div>
        </div>
    )
}

export default Jobs;