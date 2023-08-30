import { useRef, useState } from "react";
import axios from "axios";
import profile from "../../images/lessons plans-img-2.png";

function Photo() {
  //   const inputRef = useRef(null);
  //   const [image, setImage] = useState("");

  //   const handleImageClick = () => {
  //     inputRef.current.click();
  //   };

  //   const handleImageChange = (event) => {
  //     const file = event.target.files[0];
  //     const imgname = event.target.files[0].name;
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () =>{
  //         const img = new Image();
  //         img.src = reader.result;
  //         img.onload = () => {
  //             const canvas = document.createElement("canvas");
  //             const maxSize = Math.max(img.width,img.height);
  //             canvas.width = maxSize;
  //             canvas.height = maxSize;
  //             const ctx = canvas.getContext("2d");
  //             ctx.drawImage(
  //                 img,
  //                 (maxSize-img.width)/2,
  //                 (maxSize-img.height)/2
  //             );
  //             canvas.toBlob(
  //                 (blob) => {
  //                     const file = new File([blob],imgname, {
  //                         type:"image/png",
  //                         lastModified:Date.now(),
  //                     });
  //                     console.log(file);
  //                     setImage(file);
  //                 },
  //                 "image/jpeg",
  //                 0.8
  //             );
  //         }
  //     }
  //   };

  //   return (
  //     <div className="image-upload-container">
  //       <div onClick={handleImageClick}>
  //         {image ? <img src={URL.createObjectURL(image)} alt="" /> : <img src={profile} alt="" />}
  //         <input
  //           type="file"
  //           ref={inputRef}
  //           onChange={handleImageChange}
  //           style={{ display: "none" }}
  //         />
  //       </div>
  //     </div>
  //   );

  const [postImage, setPostImage] = useState({ image: "" });

  const createPost = async (newImage) => {
    try {
      await axios.post("http://localhost:8000/lesson/add", newImage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(postImage);
    console.log("Uploaded");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, image: base64 });
    console.log(postImage);
  };

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="customFileUpload">
          <img src={postImage.image || profile} alt="" height={"100vh"} />
        </label>
        <input
          type="file"
          aria-label="Image"
          name="image"
          id="file-upload"
          accept=".jpeg,.png,.jpg"
          style={{ display: "none" }}
          onChange={(e) => handleFileUpload(e)}
        />
        <h3>Dorris</h3>
        <span>Designer</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Photo;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const filleReader = new FileReader();
    filleReader.readAsDataURL(file);
    filleReader.onload = () => {
      resolve(filleReader.result);
    };
    filleReader.onerror = (error) => {
      reject(error);
    };
  });
}
