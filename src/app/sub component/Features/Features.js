import React from 'react'
import './Features.scss'
import {TbBulb} from 'react-icons/tb'

function Features({Icon , Name , About}) {
  return (
      <div className="features">
          <div className="icon-part">
              <div className="icon-wrapper">
                 <Icon className="icon"/>
              </div>
          </div>
          <div className="info">
              <p className="name">{Name}</p>
              <p className="about">
                 {About}
              </p>
          </div>
      </div>
  );
}

export default Features