import React from "react";
import classes from "./FormsControls.module.css"

export const FormControl = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    );
};

