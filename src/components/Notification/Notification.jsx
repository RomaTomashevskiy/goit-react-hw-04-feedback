import './index.css'
import PropTypes from 'prop-types';



const Notification = ({ message }) => {
    return <p className='text'>{message}</p>
};



Notification.propTypes = {
    message: PropTypes.string.isRequired,
};


export default Notification;