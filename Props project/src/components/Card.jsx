import React from 'react'
import { Bookmark } from "lucide-react";
function Card(props) {
  return (
    <div className="card">
        <div className="top">
          <img
            src={props.company}
           alt='logo'
          />
          <button>
            Save <Bookmark />
          </button>
        </div>
        <div className="center">
          <h3>
            {props.companyName}
            <span> {props.posted}</span>
          </h3>
          <h2>{props.position}</h2>
          <div className="subCenterButton">
            <h4>{props.jobType}</h4>
            <h4>{props.level}</h4>
          </div>
        </div>
        <div className="bottom">
          <hr />
          <div className="bottomSub">
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
            <button>{props.button}</button>
          </div>
        </div>
      </div>
  )
}

export default Card
