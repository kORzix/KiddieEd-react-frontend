import axios from "axios";
import React from "react";

export default function AddCourse() {
  const [lesson, setLesson] = React.useState({
    lessonName: "",
    image: "",
    payment: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLesson({
      ...lesson,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { lessonName, image, payment, category } = lesson;

    const data = {
      lessonName: lessonName,
      image: image,
      payment: payment,
      category: category,
    };

    console.log(data);

    axios.post("http://localhost:8000/lesson/add", data).then((res) => {
      if (res.data.success) {
        setLesson({
          lessonName: "",
          image: "",
          payment: "",
          category: "",
        });
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add New Lesson</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Lesson Name</label>
          <input
            type="text"
            className="form-control"
            name="lessonName"
            placeholder="Enter Lesson Name"
            value={lesson.lessonName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            placeholder="Upload a Image"
            value={lesson.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payement Type</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            placeholder="Enter Payement Type"
            value={lesson.payment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Lesson Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Enter Lesson Category"
            value={lesson.category}
            onChange={handleInputChange}
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
