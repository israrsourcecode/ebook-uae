import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FooterFormMain from '../FooterForm/FooterFormMain/FooterFormMain';

// Receive 'show' and 'onClose' as props from App.js
function CustomModal({ show, onClose }) {
    return (
        <Modal show={show} onHide={onClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Get A Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modalForm">
                    <FooterFormMain />
                </div>
            </Modal.Body>

        </Modal>
    );
}

export default CustomModal;