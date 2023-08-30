import React from "react";
import axios from "axios";

export default function ViewAll() {
  const [lessons, setLessons] = React.useState([]);

  React.useEffect(() => {
    retrieveLessons();
  }, []);

  function retrieveLessons() {
    axios.get("http://localhost:8000/lessons").then((res) => {
      if (res.data.success) {
        setLessons(res.data.existingLessons);
      }
    });
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/lesson/delete/${id}`).then((res) => {
      alert("Delete Successfully");
      retrieveLessons();
    });
  };

  function filterData(lessons,searchKey){
    const result = lessons.filter((lesson)=>
    lesson.lessonName.toLowerCase().includes(searchKey)||
    lesson.payment.toLowerCase().includes(searchKey)||
    lesson.category.toLowerCase().includes(searchKey)
    )
    setLessons(result)
  }

  const handleSearchArea = (e)=>{
    const searchKey = e.currentTarget.value;
    axios.get("http://localhost:8000/lessons").then(res =>{
      if(res.data.success){
        filterData(res.data.existingLessons,searchKey);
      }
    });
  }

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
          {lessons.map((lessons, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>
                <a
                  href={`/viewlesson/${lessons._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {lessons.lessonName}
                </a>
              </td>
              {/* <td>{lessons.image}</td> */}
              <td><img src={`http://localhost:8000/images/`+lessons.image} width={'80vh'}/></td>
              <td>{lessons.payment}</td>
              <td>{lessons.category}</td>
              <td>
                <a
                  className="btn btn-warning"
                  href={`/editlesson/${lessons._id}`}
                >
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>
                &nbsp;
                <a
                  className="btn btn-danger"
                  href="#"
                  onClick={() => onDelete(lessons._id)}
                >
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success">
        <a href="/addlesson" style={{ textDecoration: "none", color: "white" }}>
          Create New Post
        </a>
      </button>
    </div>
  );
}