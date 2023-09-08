import axios from "axios";
import React, { useState } from "react";
import upload from "../../images/upload.jpg";
import { PROXY } from "../../configs";

export default function Addgame() {
  const [file, setFile] = useState();
  const [gameName, setgameName] = useState({});
  const [payment, setPayment] = useState({});
  const [category, setCategory] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("gameName", gameName);
    formdata.append("payment", payment);
    formdata.append("category", category);

    console.log(formdata);

    axios.post(PROXY + "/games/add", formdata).then((res) => {
      if (res.data.success) {
        setFile({});
        setgameName({});
        setPayment({});
        setCategory({});
        alert("Game added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Game</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Game Name</label>
          <input
            type="text"
            className="form-control"
            name="gameName"
            placeholder="Enter Game Name"
            required
            onChange={(e) => setgameName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <input
            hidden
            id="image-upload"
            type="file"
            className="form-control"
            name="file"
            placeholder="Upload a Image"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label
            htmlFor="image-upload"
            style={{ marginBottom: "5px", marginTop: "20px" }}
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                height={"100vh"}
                alt="Game Img"
              />
            ) : (
              <img src={upload} height={"100vh"} alt="Game Img" />
            )}
            <br />
            Upload Image
          </label>
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payement Type</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            placeholder="Enter Payement Type"
            required
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Game Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Enter Game Category"
            required
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          className="btn btn-success"
          type="submit"
          style={{ marginTop: "15px" }}
          onClick={onSubmit}
        >
          {" "}
          <i className="far fa-check-square"></i>&nbsp; Add
        </button>
      </form>
    </div>
  );
}
