import React from 'react'

export default ({list}) => (
  <div className="user-list">
    {list.length > 0 ?
      <ul className="users light-scroll">
        {list.map((object, index) => (
          <li key={index} className="user-object">
            <p>{object.login}</p>
            <img src={object.avatar_url} />
          </li>
        ))}
      </ul> 
    : ''}
  </div>
)