import Swal from 'sweetalert2';
import {isRejectedWithValue} from "@reduxjs/toolkit";

const loadingMiddleware = (api) => (next) => (action) => {
    if (action.type.startsWith('api/') && action.type.endsWith('/pending')) {
        Swal.showLoading();
    }

    if (action.type.startsWith('api/') && action.type.endsWith('/fulfilled')) {
        Swal.close();
    }


    if (isRejectedWithValue(action)) {
        const errorDescription = action.error.data.message || 'An error occurred';
        Swal.fire('Error', errorDescription, 'error');
    }

    return next(action);
};
export default loadingMiddleware;