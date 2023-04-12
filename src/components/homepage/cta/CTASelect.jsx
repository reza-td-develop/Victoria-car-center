import React, { useState } from 'react'

export default function CTASelect({formValue, formOnchange}) {

    return (
        <div className="form-group col-sm-6 col-xs-12">
            <select className="form-control input-lg" name="subject" value={formValue} onChange={formOnchange}>
                <option value="default">Subject</option>
                <option value="Financial">Financial</option>
                <option value="Tuning">Tuning</option>
                <option value="PartsStore">Parts store</option>
                <option value="Warranty">Warranty</option>
                <option value="Complaints">Complaints</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )
}
