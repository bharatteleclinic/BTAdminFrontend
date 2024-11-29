import React from 'react'

const TodayAppointment = () => {
  return (
    <table className="appointments-table">
    <thead>
      <tr>
        <th>Appointment ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Patient</th>
        <th>Location</th>
        <th>Payment Status</th>
        <th>Consultation Type</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colSpan="8" className="no-appointments">
          No Appointments Found in today's list
        </td>
      </tr>
    </tbody>
  </table>
  )
}

export default TodayAppointment
