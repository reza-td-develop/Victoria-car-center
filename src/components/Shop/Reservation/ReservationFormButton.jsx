import React, {useState} from 'react'

export default function ReservationFormButton() {

    const [selectedValue, setSelectedValue] = useState('default');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    }

    return (
        <div className="form-group">
            <div className="input-group">
                <div className="input-group-addon"><i className="icon-clock"></i></div>
                <select value={selectedValue} onChange={handleSelectChange} className="form-control input-lg" id="time" name="time" type="text" required="required">
                    <option value="default">Select Time</option>
                    <option value="1.30">1:30 pm</option>
                    <option value="3.00">3:00 pm</option>
                    <option value="4.30">4:30 pm</option>
                    <option value="6.00">6:00 pm</option>
                    <option value="7.30">7:30 pm</option>
                </select>
            </div>
        </div>
    )
}
