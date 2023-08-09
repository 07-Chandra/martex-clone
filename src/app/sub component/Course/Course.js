import React from 'react'
import './Course.scss'

function Course({Icon , Name , About}) {
  return (
      <div className="course">
          <div className="icon-part">
              <div className="icon-wrapper">
                  <Icon className="icon" />
              </div>
          </div>
          <div className="info">
              <p className="name">{Name}</p>
              <p className="paragraph">{About}</p>
          </div>
      </div>
  );
}

export default Course