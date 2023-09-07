import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import upload from "../../images/upload.jpg";
import { PROXY } from "../../configs";

export default function EditGame() {
  const id = useParams().id;
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const [gameName, setGameName] = useState({});
  const [payment, setPayment] = useState({});
  const [category, setCategory] = useState({});

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  React.useEffect(() => {
    axios.get(PROXY + `/games/${id}`).then((res) => {
      if (res.data.success) {
        setImage(PROXY + `/images/` + res.data.game.image);
        setGameName(res.data.game.gameName);
        setPayment(res.data.game.payment);
        setCategory(res.data.game.category);
      }
    });
  }, [id]);

  const onSubmit = (e) => {
    const formdata = new FormData();

    formdata.append("file", file);
    formdata.append("gameName", gameName);
    formdata.append("payment", payment);
    formdata.append("category", category);

    // console.log(formdata);

    axios.put(PROXY + `/games/update/${id}`, formdata).then((res) => {
      if (res.data.success) {
        console.log(res.data.success);
        setFile({});
        setImage({});
        setGameName({});
        setPayment({});
        setCategory({});
      }
    });
  };

  return (
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Game</h1>
      <form className="needs-validation" noValidate>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Game Name</label>
          <input
            type="text"
            className="form-control"
            name="gameName"
            value={gameName}
            required
            onChange={(e) => setGameName(e.target.value)}
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
            onChange={handleInputChange} //file = URL.createObjectURL(file)
          />
          <label
            htmlFor="image-upload"
            style={{ marginBottom: "5px", marginTop: "20px" }}
          >
            {image ? (
              <img src={image} height={"100vh"} alt="Game Img" />
            ) : (
              <img src={upload} height={"100vh"} alt="Game Img" />
            )}
            <br />
            Upload Image
          </label>
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label style={{ marginBottom: "5px" }}>Payment</label>
          <input
            type="text"
            className="form-control"
            name="payment"
            value={payment}
            required
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
            required
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
