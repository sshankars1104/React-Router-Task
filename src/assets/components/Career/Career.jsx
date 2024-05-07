import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Career.css"

function Career() {
    const navigate = useNavigate();

    const GoBackToHome = () => {
      navigate("/");
    };
  return (
    <>
      <div className="heading">
        <h1 className="tittle">Career</h1>
        <button onClick={GoBackToHome}>Go Back To Home</button>
      </div>
      <div className="career">
        <h2>Who We Are ?</h2>
        <p>
          &emsp;&emsp;&emsp;GUVI is an online skill acceleration and hiring
          platform which makes IT skilling more effective by offering technology
          courses like Python,Machine Learning, Artificial Intelligence, etc. in
          vernacular languages(Tamil, Telugu, Hindi, Kannada, Bengali). AI-based
          adaptive algorithm customizes and proposes the learning path based on
          student skill level. GUVI uses similar approach like Udacity but the
          path breaking difference is that, it delivers the content in
          vernacular languages which helps the students to learn faster and make
          them land in jobs .GUVI builds the coding profile for learner by
          tracking his learning activities and show case it to their hiring
          partners.
        </p>
        <img src="https://www.guvi.in/img/flow.png" alt="image" />
        <h2>Ready To Take Challenge?</h2>
        <p>Upload your files to github and do mail the link to dev@guvi.in</p>
      </div>
    </>
  );
}

export default Career