import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PROXY } from "../../configs";

export default function ViewGame() {
  const id = useParams().id;
  const [game, setGame] = React.useState({
    gameName: "",
    image: "",
    payment: "",
    category: "",
  });

  React.useEffect(() => {
    axios.get(PROXY + `/games/${id}`).then((res) => {
      if (res.data.success) {
        setGame(res.data.game);
      }
    });
  }, [id]);

  // console.log(game);

  const { gameName, image, payment, category } = game;
  return (
    <div
      className="container p-5 mb-5 bg-light rounded"
      style={{ width: "70%" }}
    >
      <div style={{ marginTop: "20px" }}>
        <h4>{gameName}</h4>
        <hr />

        <dl className="row">
          <dt className="col-sm-3">Image</dt>
          <dd className="col-sm-9">
            <img
              src={PROXY + `/images/` + image}
              width={"80vh"}
              alt="Game Img"
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
