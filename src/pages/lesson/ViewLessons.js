import React from "react";
import axios from "axios";
import { PROXY } from "../../configs";

export default function ViewLessons() {
  const [lessons, setLessons] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveLessons();
  }, []);

  function retrieveLessons() {
    setIsLoading(true);
    axios
      .get(PROXY + "/lessons")
      .then((res) => {
        if (res.data.success) {
          setLessons(res.data.existingLessons);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(PROXY + `/lesson/delete/${id}`).then((res) => {
      retrieveLessons();
      alert("Delete Successfully");
    });
  };

  function filterData(lessons, searchKey) {
    searchKey=searchKey.toLowerCase();
    const result = lessons.filter(
      (lesson) =>
        lesson.lessonName.toLowerCase().includes(searchKey) ||
        lesson.payment.toLowerCase().includes(searchKey) ||
        lesson.category.toLowerCase().includes(searchKey)
    );
    setLessons(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get(PROXY + "/lessons")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingLessons, searchKey);
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
          <h4>All Lessons</h4>
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
            <th scope="col">Lesson Name</th>
            <th scope="col">Image</th>
            <th scope="col">Payment</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? (<div className="p-5">Loading...</div>)
            : lessons.map((lessons, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a
                      href={`/lesson/view/${lessons._id}`}
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {lessons.lessonName}
                    </a>
                  </td>
                  {/* <td>{lessons.image}</td> */}
                  <td>
                    <img
                      src={PROXY + `/images/` + lessons.image}
                      width={"80vh"}
                      alt="Lesson Img"
                    />
                  </td>
                  <td>{lessons.payment}</td>
                  <td>{lessons.category}</td>
                  <td>
                    <a
                      className="btn btn-warning"
                      href={`/lesson/edit/${lessons._id}`}
                    >
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(lessons._id)}
                    >
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
      <a
        href="/lesson/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add New Lesson
      </a>
    </div>
  );
}
