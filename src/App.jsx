import React from "react";
import './App.css'

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "65f23414-572b-4076-950b-ad390c93af5c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert('Details submitted! We\'ll get in touch with you shortly.');
      console.log("Success", res);
    }
  };

  return (
      <form onSubmit={onSubmit}>
        <div>
          <h3>Manoj's</h3>
          <h1>Diet coach</h1>
          <h2>All you need is brutal bone-crushing, soul-sucking and gut-wrenching consistency.</h2>
        </div>
        <p>Fill the details below to proceed:</p>
        <input type="text" name="name" placeholder="Your Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <input type="text" name="number" placeholder="Phone Number" required/>
        <select name="sex" id="sex" required>
          <option disabled selected value>Sex</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="date">
          <h4>Date of Birth :</h4>
          <input type="date" name="date of birth" placeholder="Date of birth" required/>
        </div>
        <input type="text" name="current weight (kg)" placeholder="Current weight (kg)" required/>
        <input type="text" name="goal weight (kg)" placeholder="Goal Weight (kg)" required/>
        <input type="text" name="height (cm)" placeholder="Height (cm)" required/>
        <input type="text" name="waist (cm)" placeholder="Waist Measurement(cm)" required/>
        <select name="work type" id="work" required>
          <option disabled selected value>Your Job Type</option>
          <option value="Desk job">Desk job</option>
          <option value="Warehouse job">Warehouse job</option>
          <option value="Field job">Field job</option>
        </select>
        <select name="diet type" id="diet" required>
          <option disabled selected value>Diet Type you prefer</option>
          <option value="Balanced Diet">Balanced</option>
          <option value="Eggetarian Diet">Eggetarian</option>
          <option value="Vegetarian Diet">Vegetarian</option>
        </select>
        <select name="activity" id="activity" required>
          <option disabled selected value>Describe your Physical Activity</option>
          <option value="Walking">Walking</option>
          <option value="Running">Running</option>
          <option value="Jogging">Jogging</option>
          <option value="Cycling">Cycling</option>
          <option value="Swimming">Swimming</option>
        </select>
        <input name="Activity Duration (mins)" type="number" placeholder="Duration of Physical Activity (Eg: 70 if 70 mins)" required/>
        <select name="goal range" id="goal" required>
          <option disabled selected value>How fast you want to achieve goal?</option>
          <option value="slow">0.1kg/week - 0.24kg/week (slower)</option>
          <option value="normal">0.25kg/week - 0.7kg/week (recommended)</option>
          <option value="fast" disabled>0.71kg/week - 1kg/week (fast)</option>
        </select>
        <input type="text" name="goal value (kg/week)" placeholder="Specify the goal Eg: 0.35 (if 0.35kg/week)" required/>
        <textarea name="message" placeholder="Any health issues or specific message(optional)"></textarea>
        <button className="btn" type="submit">Submit</button>
      </form>
  );
}

export default App;