import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { FaPlusCircle } from "react-icons/fa";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";

const Incident = () => {
  const INCIDENTS_URL = "/incidents";
  const CATEGORIES_URL = "/categories";

  const refCategory = useRef();
  const refDate = useRef(null);
  const refDescription = useRef(null);

  const [items, setItems] = useState([]);
  const [incidentId, setIncidentId] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  let navigate = useNavigate();

  const fetchItems = async () => {
    try {
      const response = await axios.get(CATEGORIES_URL);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const onClick = () => {
    navigate("/incident");
    fetchItems();
    console.log("onClick");
  };

  const changePage = () => {
    navigate("/");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      category: refCategory.current.value,
      date: refDate.current.value,
      description: refDescription.current.value,
    };
    axios
      .post(INCIDENTS_URL, data)
      .then((response) => {
        setIncidentId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  return (
    <>
      <Container>
        {items.map((value, key) => {
          return (
            <div>
              <div>{value.categoryType}</div>
            </div>
          );
        })}
      </Container>

      <Container>
        <Form onSubmit={onSubmitHandler}>
          <Container>
            <Row className="mt-5 mb-5">
              <Col>
                <h3>New Incident Information</h3>
              </Col>
              <Col>
                {/* <button type="submit" onSubmit={onSubmitHandler}>
              cancel
            </button> */}

                <FaPlusCircle
                  style={{ fontSize: "1.5rem" }}
                  className="d-flex ms-auto me-5"
                  type="submit"
                  onClick={onClick}
                />
              </Col>
            </Row>
          </Container>
          <Form.Group className="mb-3" controlId="incident">
            <Row>
              <Col>
                <Form.Label>
                  Category<span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>{" "}
              </Col>
              <Col>
                <Form.Select type="select" required ref={refCategory}>
                  {/* <option value="">Please Select Category</option> */}
                  {items.map((item) => {
                    return <option value={item.id}>{item.CategoryType}</option>;
                  })}
                </Form.Select>
              </Col>{" "}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="id">
            <Row>
              <Col sm>
                <Form.Label>Incident ID </Form.Label>{" "}
                <Form.Text className="text-muted ">
                  (assigned on save)
                </Form.Text>{" "}
              </Col>
              <Col>
                <Form.Control
                  className="darkMode"
                  autoComplete="off"
                  plaintext
                  placeholder="*********"
                  value={incidentId}
                  // style={{ backgroundColor: "#d4c9df" }}
                />
              </Col>{" "}
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="id">
            <Row>
              <Col sm>
                <Form.Label>
                  Date<span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>{" "}
                <Form.Text className="text-muted ">(required)</Form.Text>{" "}
              </Col>
              <Col>
                <Form.Control
                  autoComplete="off"
                  style={{ backgroundColor: "#d4c9df" }}
                  placeholder="mm/dd/yyyy"
                  type="date"
                  required
                  ref={refDate}
                />
              </Col>{" "}
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasic4">
            <Row>
              <Col>
                <Form.Label>
                  Description<span style={{ color: "red" }}>*</span>{" "}
                </Form.Label>{" "}
                <Form.Text className="text-muted">(required)</Form.Text>{" "}
              </Col>
              <Col>
                <Form.Control
                  autoComplete="off"
                  style={{ backgroundColor: "#d4c9df" }}
                  as="textarea"
                  required
                  ref={refDescription}
                />{" "}
              </Col>{" "}
            </Row>
          </Form.Group>

          <Row>
            <Col></Col>
            <Col>
              <Button
                onClick={changePage}
                className="m-5 ps-3 pe-3 pb-2 shadow-lg"
                variant="secondary">
                Cancel
              </Button>
              <Button
                className="m-5 pe-4 ps-4 pb-2 shadow-lg"
                variant="primary"
                type="submit">
                Save
              </Button>
            </Col>{" "}
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default Incident;
