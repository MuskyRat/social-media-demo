import React from 'react';
import style from './FormsControls.module.css';
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;

    return (
        <div className={style.formControl+" "+ (hasError? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...restProps} {...input} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text="") => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props} /> {text}
    </div>
}