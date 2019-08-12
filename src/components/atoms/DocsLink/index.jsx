//> React
// Contains all the functionality necessary to define React components
import React from 'react';

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBRow, MDBIcon } from 'mdbreact';

const DocsLink = (props) => {
  return (
    <>
      <MDBRow className="align-items-center mt-5">
        <h4 className="grey-text" style={{ margin: "0px" }}>
          <strong className="font-weight-bold">{props.title}</strong>
        </h4>
        <a
          className="border white-text px-2 border-light rounded ml-2 blue-gradient"
          target="_blank"
          href={props.href + "/?utm_source=DemoApp&utm_medium=MDBReactPro"}
          rel="noopener noreferrer"
        >
          <MDBIcon icon="graduation-cap" className="mr-2" />
          Docs
        </a>
      </MDBRow>
      <hr className="mb-5" />
    </>
  );
};

export default DocsLink;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
