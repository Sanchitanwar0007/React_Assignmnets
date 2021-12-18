import React from 'react';
import './App.css';
import data from './Data'
let arrow="<";
function App() {
  return (
    data.map((val)=>{
      return(
      <div className="site-container">
        <div className="customer-info">
          <p className="arrow">{arrow}</p>
          <div className="top-text">
            <p><b>{val.Name}</b></p>
            <p className="id">{val.Id}</p>
          </div>
          <div className="btn">
          <input type="Submit" value="Print" className="button"/>
          </div>
      </div>
      <div className="card2">
        <p><b>Appointment:</b><span>&nbsp;&nbsp;{val.Appointment}</span></p>
        <p><b>Email :</b><span>&nbsp;&nbsp;{val.Email}</span></p>
        <p><b>Phone:</b><span>&nbsp;&nbsp;{val.phone}</span></p>
      </div>
      <div className="order-info">
        <div>
          <ul className="list">
            <li><b>Status</b></li>
            <li><b>Door</b></li>
            <li><b>Time</b></li>
          </ul>
        </div>
        <div>
          <ul className="listval">
          <li>{val.Status}</li>
          <li>{val.Door}</li>
          <li>{val.Time}&nbsp;<span className="sp">({val.Date})</span></li>
          </ul>
        </div>
      </div>
      <div className="product-list">
        <div>
          <input type="checkbox"/>
        </div>
        <div>
        <img src={val.Image} alt="person"/>
        </div>
        <div>
          <p><b>{val.productName}</b></p>
          <p>{val.productDetail}</p>
        </div>
      </div>
    </div>
  )}));
}
export default App;
