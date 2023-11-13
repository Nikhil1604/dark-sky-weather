import react,{useState} from 'react';
import './App.css';

function App() {
  const [long,setLong]=useState()
  const [lati,setLati]=useState()
  
  const outer = {
    textAlign:'center',
    width:'80%',
    margin:'auto',
    display:'flex',
    flexDirection:'column',
    fontSize:"1.325rem",
    justifyContent:'center',
    padding:'20px',
    backgroundColor:'red'

  }
  const inner={
    height:'100px',
    width:"50%",
    margin:"auto",
    display:'flex',
    flexDirection:"column",
    paddingTop:'10px',
    // fontSize:'32px'
  }
  
  const custompadd={
    padding:"10px", 
    fontSize:'20px'
  }
  const custButton ={
    padding:"10px",
    width:'50%',
    margin:'auto',
    fontSize:"20px"
  }


  return (
    <div style={outer}>
    <h3>This is Weather React app</h3>
    <div style={inner}>
      <input style={custompadd} placeholder="Latitude" type="text" name='lat' 
      onChange={e => setLati(e.target.value)}
      />
    </div>

    <div style={inner}>
      <input style={custompadd} placeholder="Langitude" type="text" name='lomg'
      onChange={e => setLong(e.target.value)}
      />
    </div>

    <button style={custButton}
    
    >Click Me</button>



    </div>
  );
}

export default App;
