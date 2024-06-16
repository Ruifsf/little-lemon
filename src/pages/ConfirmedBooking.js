import Header from '../Header';
import Footer from '../Footer';

function ConfirmedBooking() {

  return (
    <>
      <Header/>
      <main className='confirmedBooking'>
          <h2>Thank you for Reserving a Table.</h2>
          <p>Please check your email for further details.</p>
      </main>
      <Footer/>
    </>
  );
}

export default ConfirmedBooking;
