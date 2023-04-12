import React from 'react';
import ReservationFormInput from './ReservationFormInput';
import FormGroupButton from './FormGroupButton';
import ReservationFormButton from './ReservationFormButton';
import { useState } from 'react';

export default function ReservationForm() {
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Submitting form: Date: ${date}, Phone: ${phone}, Email: ${email}`);
    }

    return (
        <form onSubmit={handleSubmit} className="reservation-form" action="#">
            <ReservationFormInput FormOnchange={(e) => setDate(e.target.value)} formValue={date} formIcon="icon-calendar" formId="date" formType="date" formName="date" formPlaceholder="dd/mm/yyyy" requiredForm="" />
            <ReservationFormButton />
            <ReservationFormInput FormOnchange={(e) => setPhone(e.target.value)} formValue={phone} formIcon="icon-phone" formId="number" formType="text" formName="number" formPlaceholder="Phone number" requiredForm="required" />
            <ReservationFormInput FormOnchange={(e) => setEmail(e.target.value)} formValue={email} formIcon="icon-envelope" formId="email" formType="email" formName="email" formPlaceholder="Your Email*" requiredForm="required" />
            <FormGroupButton />
        </form>
    )
}
