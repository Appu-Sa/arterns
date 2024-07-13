import React from "react";
import "./form.css";

function Form() {
  return (
    <form>
      <div className="form-row1">
        <div className="form-group">
          <label htmlFor="First name" className="formlabel">
            First name
          </label>
          <input
            type="text"
            id="First name"
            value="Text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Last name" className="formlabel">
            Last name
          </label>
          <input
            type="text"
            id="Last name"
            value="Text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="DOB" className="formlabel">
            DOB
          </label>
          <input type="text" id="DOB" value="DOB" className="form-input" />
        </div>
      </div>
      <div className="form-row2">
        <div className="form-group">
          <label htmlFor="Gender" className="formlabel">
            Gender
          </label>
          <select id="Gender" className="form-input">
            <option value="">Select</option>
            <option value="option1">Female</option>
            <option value="option2">Male</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="NickName" className="formlabel">
            NickName
          </label>
          <input
            type="text"
            id="NickName"
            value="Text"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-row1">
        <div className="form-group">
          <label htmlFor="University Name" className="formlabel">
            University Name
          </label>
          <select id="University Name" className="form-input">
            <option value="">Select</option>
            <option value="option1">1</option>
            <option value="option2">2</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Course Name" className="formlabel">
            Course Name
          </label>
          <input
            type="text"
            id="Course Name"
            value="Text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Branch" className="formlabel">
            Branch
          </label>
          <input type="text" id="Branch" value="Text" className="form-input" />
        </div>
      </div>
      <div className="form-row2">
        <div className="form-group">
          <label htmlFor="Year Of Passing" className="formlabel">
            Year Of Passing
          </label>
          <select id="Year Of Passing" className="form-input">
            <option value="">Select</option>
            <option value="option1">A</option>
            <option value="option2">B</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="CGPA" className="formlabel">
            CGPA
          </label>
          <input type="text" id="CGPA" value="Text" className="form-input" />
        </div>
      </div>
      <div className="submit">
        <button className="form-submit" onClick={(e) => e.preventDefault()}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
