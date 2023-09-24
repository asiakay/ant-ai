import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    weight: '',
    dietaryRestrictions: [],
    goals: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkboxes separately
    if (type === 'checkbox') {
      const updatedDietaryRestrictions = [...formData.dietaryRestrictions];

      if (checked) {
        updatedDietaryRestrictions.push(value);
      } else {
        const index = updatedDietaryRestrictions.indexOf(value);
        if (index !== -1) {
          updatedDietaryRestrictions.splice(index, 1);
        }
      }

      setFormData({
        ...formData,
        dietaryRestrictions: updatedDietaryRestrictions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, redirect to the profile page
        window.location.href = '/profile'; // You can use Next.js routing here
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Dietary Restrictions:</label>
          {/* Use Bootstrap's form-check for checkboxes */}
          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="None"
                checked={formData.dietaryRestrictions.includes('None')}
                onChange={handleInputChange}
                className="form-check-input"
              />
              None
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="Nuts"
                checked={formData.dietaryRestrictions.includes('Nuts')}
                onChange={handleInputChange}
                className="form-check-input"
              />
              Nuts
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="dietaryRestrictions"
                value="Shellfish"
                checked={formData.dietaryRestrictions.includes('Shellfish')}
                onChange={handleInputChange}
                className="form-check-input"
              />
              Shellfish
            </label>
          </div>
          {/* Add more dietary options as needed */}
        </div>
        <div className="form-group">
          <label htmlFor="goals">Goals:</label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
