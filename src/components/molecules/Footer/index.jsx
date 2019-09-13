//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
    MDBFooter,
    MDBRow,
    MDBCol,
    MDBContainer,
} from 'mdbreact';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter color="agency-red" className="font-small pt-4 mt-4">
                <MDBContainer className="text-center text-md-left">
                    <MDBRow>
                    <MDBCol md="6">
                        <h5 className="title">Footer Content</h5>
                        <p>
                        Here you can use rows and columns here to organize your footer
                        content.
                        </p>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled">
                            <a href="#!">Link 1</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 2</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 3</a>
                        </li>
                        <li className="list-unstyled">
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: 
                        <a href="https://www.aichner-christian.com" target="_blank" rel="noopener noreferrer"> Werbeagentur Christian Aichner </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
