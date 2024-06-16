import Header from '../Header';
import Footer from '../Footer';
import BookingForm from '../BookingForm';
import { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../api';
import { useNavigate } from 'react-router-dom';

function Reserve() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00","20:00","21:00","22:00"]);
  const navigate = useNavigate();
  function updateTimes (availableTimes, date) {
    setAvailableTimes(["17:00", "18:00", "19:00","20:00","21:00","22:00"]);
  }
  function initializeTimes (){
    return ["17:00", "18:00", "19:00","20:00","21:00","22:00"];
  }
  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()));
  }, []);

  const submitForm = (formAnswer) => {
    submitAPI(formAnswer);
    navigate("/confirmed");
  }

  return (
    <>
      <Header/>
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} submitForm={submitForm}/>
      <Footer/>
    </>
  );
}

export default Reserve;
