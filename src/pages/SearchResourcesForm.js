import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axios from "../api/axios";
import SearchResourcesResults from "./SearchResourcesResults";

import {
  Button,
  Form,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const SearchResourcesForm = () => {
  //dummy api:
  const url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  const FUNCTIONS_URL = "/functions";

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(null);
  const [searchItems, setSearchItems] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(false);

  const fetchItems = async () => {
    try {
      const response = await axios.get(FUNCTIONS_URL);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const onClick = () => {
    fetchItems();
    setShowResults(false);
  };

  let navigate = useNavigate();
  const changePage = () => {
    navigate("/");
  };
  //search resources results:
  const url2 =
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

  const fetchResults = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url2);
      setSearchItems(response.data);
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  const onSearch = () => {
    fetchResults();
    setShowResults(true);
  };

  return (
    <>
      <Container>
        {items.map((item) => {
          return <li>test fetchItems/plus-sign: {item.email}</li>;
        })}
      </Container>

      <Container>
        <Row className="mt-5 mb-5 d-flex sticky-top">
          <Col>
            <h3>Search Resources</h3>
          </Col>
          <Col>
            <FaPlusCircle
              style={{ fontSize: "1.5rem" }}
              className="d-flex ms-auto me-5"
              onClick={onClick}
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="keyword">
            <Row>
              <Col sm>
                <Form.Label>Keyword </Form.Label>{" "}
                <Form.Text className="text-muted ">(optional)</Form.Text>{" "}
              </Col>
              <Col>
                <Form.Control
                  autoComplete="off"
                  style={{ backgroundColor: "#d4c9df" }}
                />
              </Col>{" "}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="pf">
            <Row>
              <Col>
                <Form.Label>Primary Function</Form.Label>{" "}
                <Form.Text className="text-muted ">(optional)</Form.Text>{" "}
              </Col>
              <Col>
                <Form.Select type="select">
                  <option> </option>
                  {items.map((item) => {
                    return <option value={item.id}>{item.description}</option>;
                  })}
                </Form.Select>
              </Col>{" "}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="incident">
            <Row>
              <Col>
                <Form.Label>Incident</Form.Label>{" "}
                <Form.Text className="text-muted ">(optional)</Form.Text>{" "}
              </Col>
              <Col>
                <Form.Select type="select">
                  <option value="">Please Select Incident</option>
                  {/* <option> </option> */}
                </Form.Select>
              </Col>{" "}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="distance">
            <Row>
              <Col xs="auto" className="my-1 flex-fill">
                <Form.Label>Distance </Form.Label>{" "}
                <Form.Text className="text-muted">(optional)</Form.Text>{" "}
              </Col>
              <Col xs="auto" className="my-1 flex-fill">
                <InputGroup className="mb-3">
                  <InputGroup.Text>Within</InputGroup.Text>
                  <FormControl
                    type="number"
                    min="0"
                    step="0.1"
                    autoComplete="off"
                    style={{ backgroundColor: "#d4c9df" }}
                  />
                  <InputGroup.Text>miles of PCC</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>{" "}
          </Form.Group>

          <Row>
            <Col></Col>
            <Col>
              <Button
                onClick={changePage}
                className="m-5 ps-3 pe-3 pb-2 shadow-lg"
                variant="secondary"
                type="submit">
                Cancel
              </Button>
              <Button
                onClick={onSearch}
                className="m-5 pe-4 ps-4 pb-2 shadow-lg"
                variant="primary"
                type="button">
                Search
              </Button>
            </Col>{" "}
          </Row>
        </Form>
      </Container>
      <Container>
        {" "}
        {loading && (
          <h3>
            {" "}
            <AiOutlineLoading3Quarters /> Loading...
          </h3>
        )}
      </Container>

      {showResults && <SearchResourcesResults searchItems={searchItems} />}
      <Container>
        {" "}
        {error && <p className="mt-5">No results found</p>}
      </Container>
    </>
  );
};

export default SearchResourcesForm;
