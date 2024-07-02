import React from 'react';
import { Slide, ToastContainer } from "react-toastify";

function Toast() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            draggable
            progress={undefined}
            transition={Slide}
            toastClassName="toastCustom"
        />
    );
}

export default Toast;
