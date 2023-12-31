import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PROXY } from "../../configs";

export default function ViewLesson() {
  const id = useParams().id;
  const [lesson, setLesson] = React.useState({
    lessonName: "",
    image: "",
    payment: "",
    category: "",
  });

  React.useEffect(() => {
    axios.get(PROXY + `/guid-lessons/${id}`).then((res) => {
      if (res.data.success) {
        setLesson(res.data.lesson);
      }
    });
  }, [id]);

  // console.log(lesson);

  const { lessonName, image, payment, category } = lesson;
  return (
    <div
      className="container p-5 mb-5 bg-light rounded"
      style={{ width: "70%" }}
    >
      <div style={{ marginTop: "20px" }}>
        <h4>{lessonName}</h4>
        <hr />

        <dl className="row">
          <dt className="col-sm-3">Image</dt>
          <dd className="col-sm-9">
            <img
              src={PROXY + `/images/` + image}
              width={"80vh"}
              alt="Lesson Img"
            />
          </dd>

          <dt className="col-sm-3">Payment</dt>
          <dd className="col-sm-9">{payment}</dd>

          <dt className="col-sm-3">Category</dt>
          <dd className="col-sm-9">{category}</dd>
        </dl>
      </div>
    </div>
  );
}
