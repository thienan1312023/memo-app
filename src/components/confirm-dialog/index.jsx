import { Modal, Button } from 'react-bootstrap'

export const ConfirmDialog = (props) => {
    const { title, description, onCancel, onAgree } = props;
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>

            </Modal.Header>
            <Modal.Body>
                {description}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Ok
                </Button>

                <Button variant="primary" onClick={onAgree}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

ConfirmDialog.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    onCancel: PropTypes.func.isRequired,
    onAgree: PropTypes.func.isRequired,
};