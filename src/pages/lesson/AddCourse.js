import axios from "axios";
import React ,{ useState } from "react";

export default function AddCourse() {  
  const [file,setFile] = useState();
  const [lessonName,setLessonName] = useState({});
  const [payment,setPayment] = useState({});
  const [category,setCategory] = useState({});

  const onSubmit = (e) => {
    const formdata = new FormData();

    formdata.append('file',file);
    formdata.append('lessonName',lessonName);
    formdata.append('payment',payment);
    formdata.append('category',category);

    console.log(formdata);

    axios.post("http://localhost:8000/lesson/add", formdata).then((res) => {
      if (res.data.success) {
        console.log(res.data.success);
        setFile({});
        setLessonName({});
        setPayment({});
        setCategory({});
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
            // value={lesson.lessonName} e => setLessonName(e.target)
            onChange={e => setLessonName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Image</label>
          <input
            type="file"
            className="form-control"
            name="file"
            placeholder="Upload a Image"
            // value={lesson.image}
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payement Type</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            placeholder="Enter Payement Type"
            // value={lesson.payment}
            onChange={e => setPayment(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Lesson Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            placeholder="Enter Lesson Category"
            // value={lesson.category}
            onChange={e => setCategory(e.target.value)}
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
