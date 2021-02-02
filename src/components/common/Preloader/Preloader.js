import React from "react";
import loader from '../../../assets/images/loader.svg'


let Preloader = () => {
    return (
        <div>
            <img src = {loader} alt = 'loader'/>
        </div>
    )
}
export default Preloader;