import React from 'react'
import { useNavigate } from "react-router-dom"; 
import "./DataScience.css"

function DataScience() {
  const navigate = useNavigate(); 

  const GoBackToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="heading">
        <h1 className="tittle">DataScience</h1>
        <button onClick={GoBackToHome}>Go Back To Home</button>
      </div>
      <div className="dataScience">
        <h2>How Can a Commerce Student Get Into Data Science?</h2>
        <p>
          &emsp;&emsp;Getting a job as a data scientist is certainly not child’s
          play! But as they say, getting hired as a data scientist is not rocket
          science again! (No offense, it really holds its own intricacies and
          requirements to fulfill)!
        </p>
        <p>
          &emsp;&emsp;Before getting anywhere, you need to dig deep and
          understand what requisite skills are essential to get a data science
          job. How much coding is required for data science and how could you
          probably master those skills & in what time frame? So, let’s
          understand can commerce students do data science?
        </p>
        <img
          src="https://prerogative.in/internship/assets/images/blog/benefitsofdatascience.jpg"
          alt="image"
        />
        <h2>Complete your graduation:</h2>
        <p>
          &emsp;&emsp;I know it’s way too tempting to go straight into an online
          course and quit college. However, owning a degree on your collar will
          dramatically increase your chances of getting hired as a data
          scientist. Just know, it’s never too late to get into tech.
        </p>
        <p>
          &emsp;&emsp;If you are a B.Com graduate, you may take some crash
          courses on data science and get into a good job. Someone with a degree
          and a course certificate is always the first choice! Once you get
          through graduation, there are many options for those who wish to
          switch their career paths.
        </p>
        <p>
          &emsp;&emsp;Once through graduation, you can start researching new
          avenues and various skills that you need to master to get into data
          science while having a commerce background.
        </p>
        <h2>
          Explore the Skills Required for Commerce Students to Enter Data
          Science
        </h2>
        <ol type="1">
          <li>Statistics & Mathematics</li>
          <li>Analytics & Modeling</li>
          <li>Computing & Programming</li>
          <li>Data wrangling, Data Visualization</li>
          <li>Excellent Communication</li>
          <li>Intellectual Curiosity &</li>
          <li>Machine Learning Know-how</li>
        </ol>
        <p>
          &emsp;&emsp;With all these pre-requisite skills you can skyrocket your
          data science career efficiently. In short, while a B.Com degree is not
          a direct ticket to data science, a B.Com graduate can do data science,
          no matter what! All that said, there’s quite a bit of confusion when
          it comes to becoming a data scientist with a B.Com degree. Let us dive
          deep and understand how can a B.Com student get hired as a data
          scientist.
        </p>
      </div>
    </>
  );
}

export default DataScience