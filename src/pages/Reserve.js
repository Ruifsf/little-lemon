import Header from '../Header';
import Footer from '../Footer';
import FormReserve from '../FormReserve';
import { useState } from 'react';

function Reserve() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00","20:00","21:00","22:00"]);
  function updateTimes (availableTimes, date) {
    setAvailableTimes(["17:00", "18:00", "19:00","20:00","21:00","22:00"]);
  }
  function initializeTimes (){
    return ["17:00", "18:00", "19:00","20:00","21:00","22:00"];
  }

  return (
    <>
      <Header/>
      <FormReserve availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
      <Footer/>
    </>
  );
}

export default Reserve;
