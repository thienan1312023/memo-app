import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
export const ConfirmDialog = (props) => {
    const { title, description, isShow, handleClose, handleApprove } = props;
    const [show, setShow] = useState(false);
    useEffect(() => {
        isShow ? setShow(true) : setShow(false);
    });
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                {description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleApprove}>
                    Ok
                </Button>

                <Button variant="primary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConfirmDialog.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    isShow: PropTypes.bool
};

