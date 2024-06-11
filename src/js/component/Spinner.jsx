import React from "react";

export const Spinner = () => {
    let spinner = {
        back: 'danger',
        text: 'Call Actions'
    }
    return (
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
};