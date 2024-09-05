import React, { useState } from 'react';
import { FaQuestionCircle, FaArrowLeft, FaArrowRight, FaPlus } from 'react-icons/fa';
import './index.css'
import { FaRegCircleQuestion } from "react-icons/fa6";


const Home = () => {
    const [selectedSection, setSelectedSection] = useState('about');
    const [images, setImages] = useState([
      'images/image.png',
      'images/image.png',
    ]);
    const handleSectionClick = (section) => {
      setSelectedSection(section);
    };
  
    const handleAddImage = (e) => {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImages([...images, newImage]);
    };

  return (
    <div className='main-container'>
    <div className='sub-container-one'></div>
    <div className="sub-container-two">
 
    <div className='about-container'>
    {/* <FaRegCircleQuestion color='white' size={80} /> */}
    {/* <div> */}
      <div className="section-tabs">
        <div className={`tab ${selectedSection === 'about' ? 'active' : ''}`} onClick={() => handleSectionClick('about')}>
          About Me
        </div>
        <div className={`tab ${selectedSection === 'experience' ? 'active' : ''}`} onClick={() => handleSectionClick('experience')}>
          Experiences
        </div>
        <div className={`tab ${selectedSection === 'recommended' ? 'active' : ''}`} onClick={() => handleSectionClick('recommended')}>
          Recommended
        </div>
      {/* </div> */}
      </div>
{/* <div className="section-content" style={{display:'flex'}}> */}
      {/* <div>hi</div> */}

      <div className="section-content">
        {selectedSection === 'about' && (
          <div>
          {/* <p> */}
            Hello! I’m Kirthi, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years...
            {/* </p> */}
          </div>
        )}
        {selectedSection === 'experience' && (
          <div>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years...
            </p>
          </div>
        )}
        {selectedSection === 'recommended' && (
          <div>
            <p>
              Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
            </p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years...
            </p>
          </div>
        )}
      </div>
      </div>
      {/* </div> */}

      <hr className='line'/>

      <div className="gallery-section">
        <div className="gallery-header">
        <div style={{alignSelf:'start'}} className="tooltip-container">
              <FaRegCircleQuestion color='white' size={20} />
              <div className="tooltip-text">I am an image container where you can upload more images</div>
            </div>
          <div className='gallery-title'>
           <button className='gallery-button'>Gallery</button>
           </div>
           <div className='add-image-container'>
           <div>
                <label className="add-image-button" htmlFor="file-input">
                  <FaPlus /> ADD IMAGE
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleAddImage}
                />
              </div>
          <div>
          <FaArrowLeft className="carousel-control" />
          </div>
          <div>
          <FaArrowRight className="carousel-control" />
          </div>
          </div>
        </div>
        <div className="image-carousel">
          <div className="image-list">
          {images.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index}`} className="gallery-image" />
              ))}
          </div>
        </div>
      </div>
    <hr className='line'/>
    </div>

      
    </div>
  )
}

export default Home
