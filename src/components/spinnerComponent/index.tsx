import React from "react";

import { SpinnerLoader } from './styles';


const Spinner: React.FC = () => {
    return (
        <>
            <SpinnerLoader>
                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>
            </SpinnerLoader>
        </>
    );
};

export default Spinner;