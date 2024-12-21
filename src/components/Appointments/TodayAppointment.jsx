import React, { useEffect } from "react";
import "./Appointment.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysAppointmentList } from "../Redux/authTodayAppointmentList";
const TodayAppointment = () => {
  const { todaysAppointmentList } = useSelector(
    (state) => state.todayAppointmentList
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!todaysAppointmentList) {
      dispatch(fetchTodaysAppointmentList());
    }
  }, [todaysAppointmentList, dispatch]);
  // console.log(todaysAppointmentList?.appointments,"----------")

  return (
    <table className="appointments-table">
      <thead>
        <tr>
          <th>Appointment ID</th>
          <th>Date</th>
          <th>Time</th>
          <th>Patient Name</th>
          <th>Doctor Name</th>
          <th>Location</th>
          <th>Consultation Type</th>
          <th>Payment Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
        todaysAppointmentList?.appointments.map((list,index)=>(
          <tr key={index}>
          <td>{list?.appointment_details?.slot_id}</td>
          <td>{list?.appointment_details?.date}</td>
          <td>{list?.appointment_details?.start_time}</td>
          <td>{list?.patient_details?.name}</td>
          <td>{list?.doctor_details?.name}</td>
          <td>{list?.doctor_details?.location || "-"}</td>
          <td><div id="videoData">Video Consultation</div></td>
          <td><div id="paymentData">Unpaid</div></td>
          <td id="eyeIcon"><i className="fa-regular fa-eye"></i></td>
        </tr>
        ))
      }

      </tbody>
    </table>
  );
};

export default TodayAppointment;
