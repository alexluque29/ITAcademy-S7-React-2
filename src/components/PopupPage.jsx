
import Modal from 'react-modal';
import '../styles/popupPage.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const PopupPage = (props) => {
  const { estado, close, texto } = props;

  return (
    <Modal    
      isOpen={ estado }
      onRequestClose={ close }
      style={ customStyles }
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={ 200 }
    >
      <h4 className=' modalText'> { texto } </h4>    
    </Modal>
  )
}