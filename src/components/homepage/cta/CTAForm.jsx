import React from 'react';
import CTAInput from "./CTAInput";
import CTASelect from './CTASelect';
import CTAButton from './CTAButton';
import { useState } from 'react';

export default function CTAForm() {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedValue, setSelectedValue] = useState('default');

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting form: Name: ${name}, Phone: ${phone}, Subject: ${selectedValue}`);
    }
    return (
        <form onSubmit={handleSubmit} className="form rqst-form" role="form" action="#">
            <CTAInput InputName="name" inputValue={name} inputOnchange={(e) => setName(e.target.value)} InputPlaceholder="Name" />
            <CTASelect formValue={selectedValue} formOnchange={handleSelectChange} />
            <CTAInput InputName="phone" inputValue={phone} inputOnchange={(e) => setPhone(e.target.value)} InputPlaceholder="Phone Number" />
            <CTAButton />
        </form>
    )
}
