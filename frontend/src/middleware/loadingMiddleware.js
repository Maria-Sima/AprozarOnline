import Swal from 'sweetalert2';

const loadingMiddleware = (store) => (next) => (action) => {
    if (action.type.startsWith('api/') && action.type.endsWith('/pending')) {
        Swal.showLoading();
    }

    if (action.type.startsWith('api/') && action.type.endsWith('/fulfilled')) {
        Swal.close();
    }


    if (action.type.startsWith('api/') && action.type.endsWith('/rejected')) {
        Swal.close();
        Swal.fire('Error', action.error.message, 'error');
    }

    return next(action);
};
export default loadingMiddleware;