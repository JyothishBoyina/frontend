import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { useUserData } from '../../context/UserContext';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useUserData();

  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our EduVIBE platform</h1>
          <p>Learn, Grow, Excel</p>
          <button onClick={() => navigate("/courses")} className="common-btn">Get started</button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;