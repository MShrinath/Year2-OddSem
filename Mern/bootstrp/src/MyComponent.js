import React from 'react';

const MyComponent = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Welcome to My Bootstrap React App</h1>
      <p className="text-center">This is a simple example of using Bootstrap in a React application.</p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">This is a sample card using Bootstrap classes.</p>
              <a href="/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;