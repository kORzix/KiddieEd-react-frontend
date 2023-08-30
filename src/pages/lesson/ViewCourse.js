import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ViewCourse() {
  const id = useParams().id;
  const [lesson, setLesson] = React.useState({
    lessonName: "",
    image: "",
    payment: "",
    category: "",
  });

  React.useEffect(() => {
    axios.get(`http://localhost:8000/lesson/${id}`).then((res) => {
      if (res.data.success) {
        setLesson(res.data.lesson);
      }
    });
  }, [id]);

  console.log(lesson);

  const { lessonName, image, payment, category } = lesson;
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>{lessonName}</h4>
      <hr />

      <dl className="row">
        <dt className="col-sm-3">Image</dt>
        <dd className="col-sm-9"><img src={`http://localhost:8000/images/`+image} width={'80vh'}/></dd>

        <dt className="col-sm-3">Payment</dt>
        <dd className="col-sm-9">{payment}</dd>

        <dt className="col-sm-3">Category</dt>
        <dd className="col-sm-9">{category}</dd>
      </dl>
    </div>
  );
}
