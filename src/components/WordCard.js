import React from 'react';

export const WordCard = (props) => {

    return (
      <div className="card bg-info mb-3">
        <div className="card-header">
          {props.name}
          <div className="float-right">
            <span className="badge badge-primary float-right">
              {props.class}
            </span>
          </div>
        </div>
        <div className="card-body">
          <ul>
            {props.definitions.map( (definition, i) => (
              <li key={i}><p className="card-text">{definition}</p></li>
            ))}
          </ul>
        </div>
      </div>
    );

}
