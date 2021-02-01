import React, { useState } from 'react';
import FileUpload from "../../components/utils/FileUpload";

const ProductUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState([]);
  
  const titleChangeHandler = (e) => {
    setTitle(e.target.value)
  }
  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value)
  }
  const priceChangeHandler = (e) => {
    setPrice(e.target.value)
  }
  
  return (
    <div className="container-sm my-5">
      <div className="text-center">
        <h2>강쥐 용품 업로드</h2>
      </div>
      <FileUpload/>
      <div className="input-group my-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">이름</span>
        </div>
        <input type="text" className="form-control" value={title} onChange={titleChangeHandler} placeholder="이름" aria-label="이름"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">설명</span>
        </div>
        <textarea className="form-control" value={description} onChange={descriptionChangeHandler} aria-label="설명"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">가격($)</span>
        </div>
        <input type="number" className="form-control" value={price} onChange={priceChangeHandler} placeholder="가격" aria-label="가격"/>
      </div>
      <button type="submit" className="btn btn-primary btn-block">확인</button>
    </div>
  );
};

export default ProductUpload;