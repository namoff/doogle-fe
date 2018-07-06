import React from 'react';

export const ErrorCard = props => {

  const errorMessage = props.notFound
                     ? 'That word doesn\'t seem to exist...yet.'
                     : 'Something strange occurred during the search.'

    return (
      <div className="card bg-warning mb-3">
        <div className="card-header">
          Oh no!
        </div>
        <div className="card-body">
          { errorMessage }
        </div>
      </div>
    );

}
