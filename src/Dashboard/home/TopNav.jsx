import React, { Component } from 'react';
import D from '../../assets/img/d.png';
import { Table, CardBody, CardTitle, Popover, PopoverBody } from 'reactstrap';
import {
  Navbar,
  Container,
  Alert,
  Nav,
  Spinner,
  Card,
  Row,
  Col,
  Button,
  Breadcrumb,
} from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popover: false,
      student: [],
      user: [],
      popoverOpen: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }
  componentDidMount() {
    this.setState(
      {
        student: this.props.student.student_data[0],
        user: this.props.student.user_data,
      },
      () => {
        console.log(this.state.student, 'registration');
      }
    );
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" style={{ height: '6rem' }}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <div
                style={{ display: 'inline-flex', float: 'right' }}
                bg="dark"
                variant="dark"
                float="right"
              >
                <h3
                  style={{
                    paddingTop: '1rem',
                    paddingRight: '1rem',
                    color: 'white',
                    wordSpacing: '2px',
                  }}
                >
                  <img
                    onClick={() => {
                      this.toggle();
                    }}
                    id="Popover1"
                    src={D}
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '50%',
                      margin: '1rem',
                    }}
                  />
                  Howdy, {this.state.user.first_name} {this.state.user.last_name}{' '}
                </h3>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Popover
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="Popover1"
          toggle={this.toggle}
        >
          <PopoverBody style={{ wordSpacing: '1rem' }}>
            <i className="fas fa-power-off"></i>
            <span type="button" style={{ paddingLeft: '0.7rem' }}>
              Logout
            </span>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.student);
  return {
    student: state.student,
  };
};
export default connect(mapStateToProps)(NavbarPage);
