import React from 'react';


export default function ReservationFormInput({formIcon, formId, formType, formName, formPlaceholder, requiredForm, formValue, FormOnchange}) {
    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-addon"><i className={formIcon}></i></div>
                <input onChange={FormOnchange} className="form-control input-lg" id={formId} value={formValue} type={formType} name={formName}  placeholder={formPlaceholder}
                    required={requiredForm} />
            </div>
        </div>
    )
}
