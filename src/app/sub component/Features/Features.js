import React from 'react'
import './Features.scss'
import {TbBulb} from 'react-icons/tb'

function Features() {
  return (
      <div className="features">
          <div className="icon-part">
              <div className="icon-wrapper">
                  <TbBulb className='icon'/>
              </div>
          </div>
          <div className="info">
              <p className="name">Market Research</p>
              <p className="about">
                  Porta semper lacus cursus feugiat primis ultrice ligula risus
                  ociis auctor and tempus feugiat impedit felis cursus auctor
                  augue mauris blandit ipsum
              </p>
          </div>
      </div>
  );
}

export default Features