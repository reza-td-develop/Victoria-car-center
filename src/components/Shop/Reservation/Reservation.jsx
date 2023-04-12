import React from 'react';
import ReservationTitle from './ReservationTitle';
import ReservationForm from './ReservationForm';
import ReservationImg from './ReservationImg';

export default function Reservation() {
    return (
        <section className="module pt-0 pb-0">
        <div className="row position-relative m-0">
            <div className="col-xs-12 col-md-6 side-image-text">
                <ReservationTitle />
                <ReservationForm />
            </div>
            <ReservationImg />
        </div>
        </section>
    )
}
