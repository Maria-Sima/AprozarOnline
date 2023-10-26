import Swal from 'sweetalert2';

const ErrorModal = ({title,message, icon,}) => {
    console.log(icon)
    return (
        Swal.fire(
            title,
            message,
            icon
        )
    );
};

export default ErrorModal;