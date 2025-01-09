import React from "react";
import "./Profile.css";
import { Link } from "react-router";

const Profile = () => {
  return (
    
    <div className="profile-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="user-info">
          <img
            // src="https://via.placeholder.com/80"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxksz_0WVfcdYFqUAdkX1Gvgqb8y7r4rHRg&s"
            alt="User"
            className="user-avatar"
          />
          <h3>Hii, Shubh</h3>
        </div>
        <ul className="menu">
          <li className="menu-item active">My Profile</li>
          <li className="menu-item"> <Link to="/OrderHistory">Order History</Link></li>
          <li className="menu-item">Setting</li>
          <li className="menu-item">Delete Account</li>
          <li className="menu-item">Log out</li>
        </ul>
      </div>

      {/* Profile Form */}
      <div className="form-section">
        <form>
          {/* Full Name and Date of Birth */}
          <div className="form-group">
            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label>Date of Birth</label>
              <input type="date" placeholder="Select Your Date" />
            </div>
          </div>

          {/* Mobile Number and Email Address */}
          <div className="form-group">
            <div>
              <label>Mobile Number</label>
              <input type="tel" placeholder="Enter Your Mobile Number" />
            </div>
            <div>
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
              />
            </div>
          </div>

          {/* Address */}
          <div className="form-group single">
            <label>Full Address</label>
            <textarea
              placeholder="Enter Your Full Address"
              rows={3}
            />
          </div>

          {/* Pincode */}
          <div className="form-group single">
            <label>Pincode</label>
            <input type="text" placeholder="Enter Your Pincode" />
          </div>

          {/* Add Another Address */}
          <div className="add-address">
            <button type="button">+ Add Another Address</button>
          </div>

          {/* Save Button */}
          <div className="save-button">
            <button type="submit">Save</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Profile;
