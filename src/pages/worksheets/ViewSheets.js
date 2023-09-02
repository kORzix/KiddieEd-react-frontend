import React from "react";
import axios from "axios";
import { PROXY } from "../../configs";

export default function ViewSheets() {
  const [sheets, setSheets] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveSheets();
  }, []);

  function retrieveSheets() {
    setIsLoading(true);
    axios
      .get(PROXY + "/worksheets")
      .then((res) => {
        if (res.data.success) {
          setSheets(res.data.existingSheets);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(PROXY + `/worksheets/delete/${id}`).then((res) => {
      retrieveSheets();
      alert("Delete Successfully");
    });
  };

  function filterData(sheets, searchKey) {
    searchKey=searchKey.toLowerCase();
    const result = sheets.filter(
      (sheet) =>
        sheet.sheetName.toLowerCase().includes(searchKey) ||
        sheet.payment.toLowerCase().includes(searchKey) ||
        sheet.category.toLowerCase().includes(searchKey)
    );
    setSheets(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get(PROXY + "/worksheets")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingSheets, searchKey);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h4>All Sheets</h4>
        </div>
        <div className="col-lg-3 mt-2 mb-2">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={handleSearchArea}
          ></input>
        </div>
      </div>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sheet Name</th>
            <th scope="col">Image</th>
            <th scope="col">Payment</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? (<div className="p-5">Loading...</div>)
            : sheets.map((sheets, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/worksheets/view/${sheets._id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {sheets.sheetName}
                    </a>
                  </td>
                  {/* <td>{sheets.image}</td> */}
                  <td>
                    <img
                      src={PROXY + `/images/` + sheets.image}
                      width={"80vh"}
                      alt="Sheet Img"
                    />
                  </td>
                  <td>{sheets.payment}</td>
                  <td>{sheets.category}</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/worksheets/edit/${sheets._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(sheets._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <a
        href="/worksheets/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add New Sheet
      </a>
    </div>
  );
}
