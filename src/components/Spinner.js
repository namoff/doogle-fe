import React from 'react';
import spinner from '../images/spinner.svg'

export const Spinner = () => {
    return (
      <div className="spinner-wrapper">
        <img className="spinner" src={spinner} />
      </div>
    );
}
