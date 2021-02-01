import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from "axios";
import { API } from "../../config";
import { getAuthConfig } from "../../actions/auth";
import { useDispatch } from 'react-redux';
import { showPopupAction } from "../../redux/reducer/popup";
import { UploadState } from "../../types/uploadType";

const FileUpload = () => {
  const dispatch = useDispatch();
  const [images, setImages] = useState<UploadState[]>([]);
  const dropHandler = (files) => {
    const formData = new FormData();
    formData.append('file', files[0])
    const config = getAuthConfig();
    config.headers['Content-Type'] = 'multipart/form-data'
    axios.post(`${API}/api/v1/product/image`, formData, config)
      .then(response => response.data)
      .then(result => {
        setImages([result.data, ...images])
      }).catch(e => {
      dispatch(showPopupAction("업로드 실패", e.response.data.message, "danger"))
    })
  }
  const deleteHandler = (index) => {
    const deleteImage = images[index];
    const config = getAuthConfig();
    axios.delete(`${API}/api/v1/product/image?path=${deleteImage.path}`, config)
      .then(value => {
        setImages([...images.splice(0, index), ...images.splice(index + 1)])
      }).catch(e => {
      dispatch(showPopupAction("업로드 실패", e.response.data.message, "danger"))
    })
  }
  
  return (
    <div className="d-flex justify-content-between">
      <Dropzone onDrop={acceptedFiles => dropHandler(acceptedFiles)}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div className="d-flex justify-content-center align-items-center" {...getRootProps()}>
              <input {...getInputProps()} />
              <i style={{fontSize: "5rem"}} className="bi bi-file-earmark-arrow-up"/>
            </div>
          </section>
        )}
      </Dropzone>
      <div className="d-flex" style={{overflowX: 'scroll'}}>
        {images.map((value, index) =>
          <div onClick={() => deleteHandler(index)} key={`images_${index}`}>
            <img style={{objectFit: "contain", maxWidth: 200, maxHeight: 200}} src={`${API}/${value.path}`}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUpload;