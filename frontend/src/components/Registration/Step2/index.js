import React from 'react';
import './index.css';

const Step2 = ({ validAge, validPhoneNumber, finalSubmitted, details, setDetails, handleDetailsSubmit, uniqueEmail }) => {
  return (
    <div className="step-container">
      <h2 style={{marginTop: '2rem', marginBottom: '2rem' }}>Step 2: Additional Details</h2>
      <form onSubmit={handleDetailsSubmit} className="form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="form-control"
          />
          {finalSubmitted && details.email.trim() === '' && <div className="text-danger">Please fill in your email.</div>}
          {finalSubmitted && details.email.trim() !== '' && !uniqueEmail
                 && <div className="text-danger">Email is already taken.</div>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            value={details.phoneNumber}
            onChange={(e) => setDetails({ ...details, phoneNumber: e.target.value })}
            className="form-control"
          />
          {finalSubmitted && details.phoneNumber.trim() === '' && <div className="text-danger">Please fill in your phone number.</div>}
          {finalSubmitted && details.phoneNumber.trim() !== '' && !validPhoneNumber(details.phoneNumber) && 
            ( <div className="text-danger">Please enter a valid phone number.</div>)}
        </div>

        <div className="form-group">
          <label>Birthday:</label>
          <input
            type="date"
            value={details.birthday}
            onChange={(e) => setDetails({ ...details, birthday: e.target.value })}
            className="form-control"
          />
          {finalSubmitted && details.birthday.trim() === '' && <div className="text-danger">Please fill in your birthday.</div>}
          {finalSubmitted && details.birthday.trim() !== '' && !validAge(details.birthday) &&
            <div className="text-danger">User must be greater than 13 years old.</div>}
        </div>

        <div className="form-group">
          <label>Gender:</label>
          <select
            value={details.gender}
            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
            className="form-control"
          >
            <option value="other"></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
          {finalSubmitted && details.gender.trim() === '' && <div className="text-danger">Please select your gender.</div>}
        </div>

        <div className="form-group">
          <label>School's Program:</label>
          <input
            type="text"
            value={details.schoolProgram}
            onChange={(e) => setDetails({ ...details, schoolProgram: e.target.value })}
            className="form-control"
          />
          {finalSubmitted && details.schoolProgram.trim() === '' && <div className="text-danger">Please fill in your schoolProgram.</div>}
        </div>

        <div className="form-group">
          <label>Year of Study in University:</label>
          <input
            type="number"
            value={details.yearOfStudy}
            onChange={(e) => {
              const newValue = Math.min(7, Math.max(1, e.target.value));
              setDetails({ ...details, yearOfStudy: newValue });
            }}
            className="form-control"
            min="1"
            max="7"
          />
          {finalSubmitted && details.yearOfStudy === '' && <div className="text-danger">Please select your year of study.</div>}
        </div>

        <button type="submit" className="btn btn-primary" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Step2;
