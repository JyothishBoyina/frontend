import React from 'react'
import { MdDashboard } from "react-icons/md";
import "./account.css";
const Account = () => {
  return (
    <div>
      <div className="profile">
        <h2>My Profile</h2>
        <div className="profile-info">
            <p>
                <strong>Name - EduVIBE</strong>
            </p>
            <p>
                <strong>Email - EduVIBE@gmail.com</strong>
            </p>

            <button className="common-btn"><MdDashboard/>Dashboard</button>
        </div>
      </div>
    </div>
  )
}

export default Account
