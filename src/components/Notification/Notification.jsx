import PropTypes from 'prop-types';
import { NotText } from './Notification.styled';

const Notification = ({message}) => (
    <NotText>{message}</NotText>
);

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Notification;