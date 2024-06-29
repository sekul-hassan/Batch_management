import React from 'react';
import {ColorRing} from "react-loader-spinner";

function Loading(props) {
    return (
        <div className="loading-container">
            <ColorRing
                height="50"
                width="50"
                colors={['#4fa94d', '#4fa94d', '#4fa94d', '#4fa94d']}
                ariaLabel="circles-with-bar-loading"
                visible={true}
            />
        </div>
    );
}

export default Loading;