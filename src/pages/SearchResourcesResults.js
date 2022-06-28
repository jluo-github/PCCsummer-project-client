import React, { useState, useEffect } from "react";
import { Table, Container } from "react-bootstrap";

// search:
// app.get('/resourcesReport', (req, res) => {
//   let { keyword } = req.query;
// keyword = keyword.toLowerCase();
//   Table.findAll({where:{description: {[Op.like]: '%' + keyword + '%'}}}).then((dta)=>{}).catch(err=>{console.log(err)})
// })

const SearchResourcesResults = ({ searchItems }) => {
  return (
    <>
      <Container>
        <h3 className="mt-5 mb-5">Search Resources</h3>

        <Container>
          <Table className="darkMode table-dark" striped bordered hover>
            <thead>
              {" "}
              <tr>
                <th>Resource ID</th>
                <th>Resource Name</th>
                <th>Owner</th>
                <th>Cost/Unit</th>
                <th>Distance</th>
              </tr>
            </thead>
            <tbody>
              {searchItems.map((item) => (
                <tr className="darkMode">
                  {Object.entries(item).map(([key, value]) => {
                    return <td>{value}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </>
  );
};

export default SearchResourcesResults;
