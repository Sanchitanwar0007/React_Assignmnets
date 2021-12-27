
import './App.css';
import data from './Data';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div>
      <div className='image'>
        <img src={data.profileImg} alt='Alternet text'/>


      </div>

      <div className='text'>
        <h1>{employee.name}</h1>
        <p className='Loc'>Location</p>
        <p><b>{employee.location}</b></p>
        <p className='Loc1'>Blood Group</p>
        <p><b>{employee.bloodGroup}</b></p>
        <p className='Loc2'>Age</p>
        <p><b>{employee.age}</b></p>

      </div>
    </div>
  
  </div>
)
}



export default App;