import React, { useState } from "react";

function FileUploader() {
  // const [fileData, setFileData] = useState();

  // const fileChangeHandler = (e) => {
  //   setFileData(e.target.files[0]);
  // };

  // const onSubmitHandler = (e) => {
  //   e.preventDefault();

  //   // Handle File Data from the state Before Sending
  //   const data = new FormData();

  //   data.append("image", fileData);

  //   fetch("http://localhost:5000/single", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((result) => {
  //       console.log("File Sent Successful   this is result",result);

  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  const [file, setFile] = useState(null);

  const handleChange = function loadFile(e) {
    if (e.target.files.length > 0) {
      const file = URL.createObjectURL(e.target.files[0]);
      setFile(file);
    }
  };

  
  return (
    <div className="App">
     
      {/* <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Submit File to Backend</button>
        <img src={fileData} alt="uploadImage" />
      </form> */}
      <input type="file" onChange={handleChange} id="upload" accept="image/*" />
      <label htmlFor="upload">
        <div>
          <img alt="uploadImage" src={file} />

        </div>
      </label>
    </div>
  );
}

export default FileUploader;
