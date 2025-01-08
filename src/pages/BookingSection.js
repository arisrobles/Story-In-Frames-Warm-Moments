import React, { useState } from 'react';
import '../assets/styles/Booking.css'; // Assuming the styles are stored in this file

const Booking = () => {
    // State for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [packageSelection, setPackageSelection] = useState('');
    const [message, setMessage] = useState('');
    
    // State for error message display
    const [error, setError] = useState(false);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Simulate a server error condition
        const serverIsDown = true;  // Example condition, set to `true` to simulate server error
        
        if (serverIsDown) {
            // Display error message
            setError(true);
        } else {
            // Perform the actual booking form submission (e.g., API call)
            console.log({
                name,
                email,
                phone,
                date,
                time,
                packageSelection,
                message,
            });
            // Reset error state on successful submission
            setError(false);
        }
    };

    return (
        <section id="booking" className="booking-section pt-2 pb-2">
            <div className="container">
                <h3 className="section-subtitle">Booking Your Session</h3>
                <h2 className="section-title">Reserve Your Spot with Us</h2>
                
                <form id="bookingForm" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="col-md-6">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-row mt-3">
                        <div className="col-md-6">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                className="form-control"
                                name="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder="Enter your phone number"
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="date">Preferred Date</label>
                            <input
                                type="date"
                                id="date"
                                className="form-control"
                                name="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-row mt-3">
                        <div className="col-md-6">
                            <label htmlFor="time">Preferred Time</label>
                            <input
                                type="time"
                                id="time"
                                className="form-control"
                                name="time"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="package">Package Selection</label>
                            <select
                                id="package"
                                className="form-control"
                                name="package"
                                value={packageSelection}
                                onChange={(e) => setPackageSelection(e.target.value)}
                                required
                            >
                                <option value="">Choose a package</option>
                                <option value="Platinum">Platinum</option>
                                <option value="Diamond">Diamond</option>
                                <option value="Emerald">Emerald</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row mt-3">
                        <div className="col-md-12">
                            <label htmlFor="message">Additional Notes</label>
                            <textarea
                                id="message"
                                className="form-control"
                                name="message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Any additional requests or questions?"
                            ></textarea>
                        </div>
                    </div>

                    <div className="form-row mt-4">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-block">
                                Book My Session
                            </button>
                        </div>
                    </div>
                </form>

                {/* Message for Server Error */}
                {error && (
                    <div id="serverErrorMessage" className="alert alert-warning mt-4">
                        <strong>Oops!</strong> Our server is not working right now. Sorry for the inconvenience! You can still book by contacting us through our social media accounts.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Booking;
