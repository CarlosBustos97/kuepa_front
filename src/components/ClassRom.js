import React from 'react';
import Chat from './Chat';
import 'bootstrap/dist/css/bootstrap.min.css';

const ClassRoom = () => {
  return (
    <div className="container-fluid mt-4">
      <h2 className="text-center mb-4">Clase Online</h2>
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <div className="card w-100 h-100 border-0">
            <div className="card-body p-6">
              <div className="embed-responsive embed-responsive-16by9 h-100">
                <iframe width="100%" height="45%" src="https://www.youtube.com/embed/PVoZ86J3tGQ?si=DT0OkvTBRC4XKlmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center p-0">
          <div className="chat-box-container w-100 h-100">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
