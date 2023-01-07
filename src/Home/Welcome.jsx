
import "../Home/Welcome.css";

import React from 'react'

function Welcome() {
  return (
    <>
    
        <div className="container" >
          <div className="main">
            <h1>Bienvenidos</h1>
            <a href="/menu" className="btn-main">
             Vamos
            </a>
          </div>
        </div>
    </>
  );
}

export default Welcome;