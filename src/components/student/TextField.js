import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props)
    return (
        // <div className="row">
        //     <div className="col-12">
        <>
            <label htmlFor={field.name} className="form-label mt-2 mb-0 text-light">{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"}`} {...field} {...props} autoComplete="off"/>
            <span>
             <ErrorMessage component="span" name={field.name} className="error" />
            </span>
        </>
        //     </div>

        // </div>

    )
}
