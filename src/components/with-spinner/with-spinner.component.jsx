import React from "react";
import {SpinnerOverlay, SpinnerContainer} from "./with-spinner.styles";

const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent {...otherProps} />
    )
};

export default WithSpinner;

// explicit version
// const WithSpinner = (WrappedComponent) => {
//     const Spinner = ({isLoading, ...otherProps}) => {
//         return isLoading ? (
//             <SpinnerOverlay>
//                 <SpinnerContainer/>
//             </SpinnerOverlay>
//         ) : (
//             <WrappedComponent {...otherProps} />
//         )
//     };
//     return Spinner;
// };