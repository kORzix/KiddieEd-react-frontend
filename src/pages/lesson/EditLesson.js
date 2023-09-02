import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import upload from "../../images/upload.jpg";
import { PROXY } from "../../configs";

export default function EditLesson() {
  const id = useParams().id;
  const [file, setFile] = useState();  
  const [image, setImage] = useState();
  const [lessonName, setLessonName] = useState({});
  const [payment, setPayment] = useState({});
  const [category, setCategory] = useState({});

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  React.useEffect(() => {
    axios.get(PROXY+`/lesson/${id}`).then((res) => {
      if (res.data.success) {
        setImage(PROXY+`/images/` + res.data.lesson.image);
        setLessonName(res.data.lesson.lessonName);
        setPayment(res.data.lesson.payment);
        setCategory(res.data.lesson.category);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    const formdata = new FormData();

    formdata.append("file", file);
    formdata.append("lessonName", lessonName);
    formdata.append("payment", payment);
    formdata.append("category", category);

    // console.log(formdata);

    axios
      .put(PROXY+`/lesson/update/${id}`, formdata)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.success);
          setFile({});
          setImage({});
          setLessonName({});
          setPayment({});
          setCategory({});
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
            name="lessonName"
            value={lessonName}
            onChange={(e) => setLessonName(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          {/* <label style={{ marginBottom: "5px" }}>Image</label> */}
          <input
            hidden
            id="image-upload"
            type="file"
            className="form-control"
            name="image"
            // value={lesson.image}
            onChange={handleInputChange} //file = URL.createObjectURL(file)
          />
          <label
            htmlFor="image-upload"
            style={{ marginBottom: "5px", marginTop: "20px" }}
          >
            {image ? (
              <img src={image} height={"100vh"} alt="Lesson Img"/>
            ) : (
              <img src={upload} height={"100vh"} alt="Lesson Img"/>
            )}
            <br />
            Upload Image
          </label>
          {/* <img src={`http://localhost:8000/images/`+lesson.image} width={'80vh'}/> */}
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payment</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
