import React from 'react';

export const Navbar = (props) => {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="#">Doogle</a>
          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarColor"
                  aria-controls="navbarColor"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor">
            <ul className="navbar-nav mr-auto">
              <li>
                <span className="text-muted subtitle">a dictionary</span>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0"
                  onSubmit={props.submitHandler}>
              <input className="form-control mr-sm-2"
                     id="word_name"
                     name="word_name"
                     type="text"
                     placeholder="Search"
                     autoComplete="off"
                     onChange={props.changeHandler}/>
              <button className="btn btn-info my-2 my-sm-0"
                      id="submit"
                      type="submit">
                      Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
}
