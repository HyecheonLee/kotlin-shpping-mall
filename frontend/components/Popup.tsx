import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { RootState } from "../redux/reducer";
import { useDispatch, useSelector } from 'react-redux';
import { hidePopupAction } from "../redux/reducer/popup";
import Alert from "react-bootstrap/Alert";

const Popup = () => {
  const handleClose = () => {
    dispatch(hidePopupAction())
  }
  const popup = useSelector((state: RootState) => state.popup);
  const dispatch = useDispatch();
  
  return (
    <>
      <Modal show={popup.isDisplay} onHide={handleClose}>
        {popup.popup.variant ?
          <Alert style={{margin: 0}} variant={popup.popup.variant} onClose={handleClose} dismissible>
            <Alert.Heading>{popup.popup.title}</Alert.Heading>
            <p>{popup.popup.body}</p>
          </Alert>
          :
          <>
            <Modal.Header closeButton>
              <Modal.Title>{popup.popup.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{popup.popup.body}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                닫기
              </Button>
            </Modal.Footer>
          </>
        }
      </Modal>
    </>
  );
};

export default Popup;