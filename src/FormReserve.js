import { useState } from "react";
function FormReserve ({availableTimes, setAvailableTimes}) {
    const [date, setDate] = useState(new Date());
    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00","20:00","21:00","22:00"]);
    const [nrPeople, setNrPeople] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("table requested");
    }


    return(
        <div className="formReserveContainer">
            <form onSubmit={handleSubmit} className="formReserve" id="form-component">
                <h2>Reserve a Table</h2>

                <div>
                    <label htmlFor="datela">Choose a Date:</label> <br/>
                    <input type="date" name="date" id="date" value={date} onChange={(e)=> setDate(e.target.value) } ></input>
                </div>
                <div>
                    <label htmlFor="time">Choose a Time:</label><br/>
                    <select name="time" id="time">
                        {availableTimes.map((element) => {
                            return (<option value={element} key={element}>{element}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor="number">Choose the number of people:</label><br/>
                    <input type="number" placeholder="1" min="1" max="10" name="number" id="number" value={nrPeople} onChange={(e) => setNrPeople(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="occasion">Choose the Occasion:</label><br/>
                    <select name="occasion" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="Birthday">Birthday</option>
                        <option value="Business">Business</option>
                        <option value="Family">Family</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <input type="submit" value="Request Table"></input>
            </form>
        </div>
    );
}

export default FormReserve;