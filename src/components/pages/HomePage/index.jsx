//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
} from 'mdbreact';

//> Images
// Logo of MDB React
import MDBLogo from '../../../assets/mdb-react-small.png';
// Logo of Advertisement Agency Christian Aichner
import AgencyLogo from '../../../assets/agency-small.png';
// Image of a handshake
import HireUs from '../../../assets/content/hire-us.jpg';
// Logo of the React Bootstrap (outrun) project
// Ref: https://github.com/aichner/React-Outrun
import Outrun from '../../../assets/content/outrun.jpg';
// Image of someone coding
import Projects from '../../../assets/content/projects.jpg';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBEdgeHeader color="agency-red" className="sectionPage" />
        <div className="mt-3 mb-5">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody className="text-center">
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img
                        src={AgencyLogo}
                        alt="mdbreact-logo"
                        className="pr-2"
                      />
                      +
                      <img
                        src={MDBLogo}
                        alt="mdbreact-logo"
                        className="pr-2 pl-2"
                      />
                      Template App
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      <span className="font-weight-bold">Official Documentation</span>
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-5 font-weight-bold">
                  Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={Projects}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon
                              icon="github"
                              brand
                              className="dark-text pr-2"
                            />
                            <strong>GitHub</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Find more of our amazing work and templates on GitHub!
                          </MDBCardText>
                          <a className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline" href="https://github.com/aichner" target="_blank" rel="noopener noreferrer">
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={Outrun}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon fab icon="bootstrap" className="pink-text pr-2" />
                            <strong>React Bootstrap</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications.
                          </MDBCardText>
                          <a className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline" href="https://github.com/aichner/React-Outrun" target="_blank" rel="noopener noreferrer">
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInRight">
                      <MDBCard cascade className="my-3 grey lighten-4">
                        <MDBCardImage
                          cascade
                          className="img-fluid"
                          src={HireUs}
                        />
                        <MDBCardBody cascade className="text-center">
                          <MDBCardTitle>
                            <MDBIcon icon="code" className="green-text pr-2" />
                            <strong>Hire us</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            We provide excellent projects and services to improve the Online Marketing and Image of our satisfied customers.
                          </MDBCardText>

                          <a className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline" href="https://www.aichner-christian.com/?refer=mdbtemplate" target="_blank" rel="noopener noreferrer">
                              More
                          </a>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
