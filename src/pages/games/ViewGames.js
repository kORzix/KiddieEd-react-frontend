import React from "react";
import axios from "axios";
import { PROXY } from "../../configs";

export default function ViewGames() {
  const [games, setGames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    retrieveGames();
  }, []);

  function retrieveGames() {
    setIsLoading(true);
    axios
      .get(PROXY + "/games")
      .then((res) => {
        if (res.data.success) {
          setGames(res.data.existingGames);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const onDelete = (id) => {
    axios.delete(PROXY + `/games/delete/${id}`).then((res) => {
      retrieveGames();
      alert("Delete Successfully");
    });
  };

  function filterData(games, searchKey) {
    searchKey = searchKey.toLowerCase();
    const result = games.filter(
      (game) =>
        game.gameName.toLowerCase().includes(searchKey) ||
        game.payment.toLowerCase().includes(searchKey) ||
        game.category.toLowerCase().includes(searchKey)
    );
    setGames(result);
  }

  const handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;
    setIsLoading(true);
    axios
      .get(PROXY + "/games")
      .then((res) => {
        if (res.data.success) {
          filterData(res.data.existingGames, searchKey);
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
          <h4>All Games</h4>
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
            <th scope="col">Game Name</th>
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
            games.map((games, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <a
                    href={`/games/view/${games._id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {games.gameName}
                  </a>
                </td>
                {/* <td>{games.image}</td> */}
                <td>
                  <img
                    src={PROXY + `/images/` + games.image}
                    width={"80vh"}
                    alt="Game Img"
                  />
                </td>
                <td>{games.payment}</td>
                <td>{games.category}</td>
                <td>
                  <a
                    className="btn btn-warning"
                    href={`/games/edit/${games._id}`}
                  >
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => onDelete(games._id)}
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
        href="/games/add"
        className="btn btn-success"
        style={{ textDecoration: "none", color: "white" }}
      >
        Add New Game
      </a>
    </div>
  );
}
