import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";
...
const TutorialsList = () => {
  const [tutorials, setTutorials] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];
  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};
    if (searchTitle) {
      params["title"] = searchTitle;
    }
    if (page) {
      params["page"] = page - 1;
    }
    if (pageSize) {
      params["size"] = pageSize;
    }
    return params;
  };
  const retrieveTutorials = () => {
    const params = getRequestParams(searchTitle, page, pageSize);
    TutorialDataService.getAll(params)
      .then((response) => {
        const { tutorials, totalPages } = response.data;
        setTutorials(tutorials);
        setCount(totalPages);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(retrieveTutorials, [page, pageSize]);

  const findByTitle = () => {
    setPage(1);
    retrieveTutorials();
  };
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };
  return (

  );
};
export default TutorialsList;
