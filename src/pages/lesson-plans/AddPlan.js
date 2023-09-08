import axios from "axios";
import React, { useState } from "react";
import upload from "../../images/upload.jpg";
import { PROXY } from "../../configs";

export default function AddPlan() {
  const [file, setFile] = useState();
  const [planName, setPlanName] = useState({});
  const [payment, setPayment] = useState({});
  const [category, setCategory] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("planName", planName);
    formdata.append("payment", payment);
    formdata.append("category", category);

    console.log(formdata);

    axios.post(PROXY + "/lesson-plans/add", formdata).then((res) => {
      if (res.data.success) {
        setFile({});
        setPlanName({});
        setPayment({});
        setCategory({});
        alert("Lesson plan added successfully");
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Lesson Plan</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Plan Name</label>
          <input
            type="text"
            className="form-control"
            name="planName"
            placeholder="Enter Plan Name"
            required
            onChange={(e) => setPlanName(e.target.value)}
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
                alt="Plan Img"
              />
            ) : (
              <img src={upload} height={"100vh"} alt="Plan Img" />
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
          <label style={{ marginBottom: "5px" }}>Plan Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Enter Plan Category"
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
          <i className="far fa-check-square"></i>&nbsp; Add
        </button>
      </form>
    </div>
  );
}
