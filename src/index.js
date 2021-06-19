import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class BookList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comp: props.value,
    };
  }
  // return <h4>this is my first component {this.state.comp}!</h4>;
  render(){
    return(
      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Navbar</a>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class = "container-md pt-5">
      <div class="row g-3">
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="City" aria-label="City"/>
        </div>
        <div class="col-sm-4">
          <input type="text" class="form-control" placeholder="State" aria-label="State"/>
        </div>
        <div class="col-sm">
          <input type="text" class="form-control" placeholder="Zip" aria-label="Zip"/>
        </div>
        <div>
          <input type="submit" class="btn btn-outline-success" placeholder = "Submit" aria-label="Submit"/>
        </div>
      </div>
    </div>
    </div>
    );
  }
}


ReactDom.render(
  <BookList value = {5}/>,
  document.getElementById('root')
);

