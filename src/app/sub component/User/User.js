import React from 'react'
import './User.scss'
import { BsQuote } from 'react-icons/bs';
function User({src , about , name , userName}) {
  return (
      <div className="user">
          <p className="paragraph">{about}</p>

          <div className="profile">
              <div className="image-wrapper">
                  <img className="img" src={src} alt={name} />
              </div>

              <BsQuote className='icon'/>
              <div className="user-name">
                  <p className="name">{name}</p>
                  <p className="username">{userName}</p>
              </div>
          </div>
      </div>
  );
}

export default User