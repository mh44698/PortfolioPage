import React from 'react';
// import { Link } from 'react-router-dom';


function Projects() {
  console.log()
  

  return (
    <div className="wrapper">
  <div>
      <h3>Live examples</h3>
      <a href="https://objective-goldwasser-ce50f3.netlify.com">
      <p> JAVAScript REACT - Bulls vs Bears (API's Financial Data) (and this Page is built on REACT)</p>
      </a>
      <a href="https://mh44698.github.io/firstproject.io/">
      <p> JAVAScript Vanilla - Hangman (API's Random Word API Data)</p>
      </a>
      <br></br>
      <h3>Code Examples</h3>

      <p> Rscript - Pulling data from DB2 merging 4 dataframes and exporting to excel (Live Order bank) Script Only, JD Order Fulfillment</p>
      
      <p> Rscript - Pulling data from a Mongo DB to show incomplete Quotes that haven't finalized the purchase process, JD Order Management</p>
      
      <p> Rscript - Pulling all S&P 500 stocks with historicals and merging with the data scraped options, and given a reasonable output for decision making, Person Use</p>
      
      <p> Python Script - Scrapping basic data from a text file</p>
      
      <p> Python Script - putthing basic data in a sql server</p>
      
      <p> Python Script - appending data to a json file</p>
  </div>
</div>
  );
};

export default Projects;