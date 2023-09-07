import React from "react";
import axios from "axios";
import { PROXY } from "../../configs";

export default function ViewPlans() {
  const [plans, setPlans] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrievePlans();
  }, []);

  function retrievePlans() {
    setIsLoading(true);
    axios
      .get(PROXY + "/lesson-plans")
      .then((res) => {
        if (res.data.success) {
          setPlans(res.data.existingPlans);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(PROXY + `/lesson-plans/delete/${id}`).then((res) => {
      retrievePlans();
      alert("Delete Successfully");
    });
  };

  function filterData(plans, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = plans.filter(
      (plan) =>
        plan.planName.toLowerCase().includes(searchKey) ||
        plan.payment.toLowerCase().includes(searchKey) ||
        plan.category.toLowerCase().includes(searchKey)
    );
    setPlans(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get(PROXY + "/lesson-plans")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingPlans, searchKey);
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
          <h4>All Plans</h4>
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
            <th scope="col">Plan Name</th>
            <th scope="col">Image</th>
            <th scope="col">Payment</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <div className="p-5">Loading...</div>
          ) : (
            plans.map((plans, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/lesson-plans/view/${plans._id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {plans.planName}
                  </a>
                </td>
                {/* <td>{plans.image}</td> */}
                <td>
                  <img
                    src={PROXY + `/images/` + plans.image}
                    width={"80vh"}
                    alt="Plan Img"
                  />
                </td>
                <td>{plans.payment}</td>
                <td>{plans.category}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/lesson-plans/edit/${plans._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(plans._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <a
        href="/lesson-plans/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add New Lesson
      </a>
    </div>
  );
}
