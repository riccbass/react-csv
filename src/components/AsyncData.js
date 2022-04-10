import React, { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";

const AsyncData = () => {
  const [transactionData, setTransactionData] = useState([]);
  const csvLink = useRef();

  const downloadReport = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(data.data);
    setTransactionData(data.data);

    csvLink.current.link.click();
  };

  return (
    <div>
      <input
        type="button"
        values="Export to CSV (Async)"
        onClick={(e) => downloadReport()}
      />
      <CSVLink
        headers={[
          { label: "Name", key: "name" },
          { label: "Username", key: "username" },
          { label: "Email", key: "email" },
          { label: "Phone", key: "phone" },
          { label: "Website", key: "website" },
        ]}
        data={transactionData}
        filename="ReportAsync.csv"
        ref={csvLink}
        separator=";"
      />
    </div>
  );
};

export default AsyncData;
