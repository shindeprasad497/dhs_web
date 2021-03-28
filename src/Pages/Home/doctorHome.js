import React from 'react'
import DoctorAppointmentsTable from '../Appointment/doctorAppointmentTable'

export default function DoctorHome(props) {
    return (
        <div>
            

            <h1>DoctorHome</h1>
            <DoctorAppointmentsTable {...props}/>

        </div>
    )
}
