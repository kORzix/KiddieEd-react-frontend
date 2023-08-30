import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditCourse() {
  const id = useParams().id;
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

  React.useEffect(() => {
    axios.get(`http://localhost:8000/lesson/${id}`).then((res) => {
      if (res.data.success) {
        setLesson({
            lessonName: res.data.lesson.lessonName,
            image: res.data.lesson.image,
            payment: res.data.lesson.payment,
            category: res.data.lesson.category
        });
      }
    });
  }, [id]);

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

    axios.put(`http://localhost:8000/lesson/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Lesson updated successfully");
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
      <h1 className="h3 mb-3 font-weight-normal">Edit Lesson</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Lesson Name</label>
          <input
            type="text"
            className="form-control"
            name="lesssonName"
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
            // value={lesson.image}
            onChange={handleInputChange}
          />
          <img src={`http://localhost:8000/images/`+lesson.image} width={'80vh'}/>
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payment</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            value={lesson.payment}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
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
          <i className="far fa-check-square"></i>&nbsp; Update
        </button>
      </form>
    </div>
  );
}
