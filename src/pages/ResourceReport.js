import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SiInstapaper } from "react-icons/si";
import { ImInfo } from "react-icons/im";
import { FaInfo } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "../api/axios";
import {
  Button,
  Card,
  Form,
  Container,
  Row,
  Col,
  Table,
} from "react-bootstrap";

const ResourceReport = () => {
  //dummy api:
  const url = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";


  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItems = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItems(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <Container>
        <h3 className=" d-flex mb-5 mt-5">
          Resource Report <FaInfo className="d-flex me-5 ms-auto" />{" "}
        </h3>
        {loading ? (
          <h3 className="text-center">
            {" "}
            <AiOutlineLoading3Quarters> </AiOutlineLoading3Quarters> Loading...
          </h3>
        ) : (
          <Table className="darkMode table-dark" striped bordered hover>
            <thead>
              {" "}
              <tr>
                <th>Primary Function #</th>
                <th>Primary Function</th>
                <th>Total Resources</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <>
                  <tr>
                    {Object.entries(item).map(([key, value]) => {
                      return <td>{value}</td>;
                    })}
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default ResourceReport;
