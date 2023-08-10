import "./Test.css";
import React from 'react';

const Test = () => {
  return (
    <div className="container test-container">
        <h1>Test Me</h1>
        <div className="test-links">
            
            {/* anchor tag to link to another Website,
            can use <Link> to replace <a> */}
            <a href="" className="contact youtube">
                <h2>Youtube</h2>
            </a>

            <a href="" className="contact youtube">
                <h2>Youtube</h2>
            </a>

            <a href="" className="contact youtube">
                <h2>Youtube</h2>
            </a>
        </div>
    </div>
  )
}

export default Test