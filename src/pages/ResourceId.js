import React from "react";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";

const ResourceId = () => {
  const [resourceId, setResourceId] = useState("");

  const fitchId = () => {
    axios
      .get("/resourceId")
      .then((response) => {
        setResourceId(response.data.resourceId);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div>
      <h2>{resourceId}</h2>
    </div>
  );
};

export default ResourceId;
