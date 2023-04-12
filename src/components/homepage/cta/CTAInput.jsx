import React from 'react'

export default function CTAInput({InputName, InputPlaceholder, inputValue, inputOnchange}) {
    return (
        <div className="form-group col-sm-6 col-xs-12">
            <input className="form-control input-lg" type="text" value={inputValue} onChange={inputOnchange} name={InputName} placeholder={InputPlaceholder} />
        </div>
    )
}
