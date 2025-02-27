import { Link } from "react-router-dom";




export default function Navbar(props) {



  //  const [mystyle, setMyStyle] = useState({
  //             color: 'black',
  //             backgroundColor:'white' 
  //  })


//   let mystyle={
//     color: 'white',
//     backgroundColor:'black' 
// }

// const [mystyle,setMyStyle]= useState({
//   color: 'white',
//   backgroundColor:'black' 
// })

// const click= ()=>{
//      if(mystyle.color === 'black'){
//        setMyStyle({ 
//          color:'white',
//           backgroundColor:'black'
//      })
     
//     }


//      else{
//        setMyStyle({
//          color:'black',
//          backgroundColor:'white'
//        })
       
//      }
// }


  return (
    <>
    
     
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}   >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" >Abdullah</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/" id='home'>Home</Link>  
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" id='nav'>About</Link>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
     <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="label1">Enable Dark mode
     </label>
     <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.click}/>

 
</div>
    </>
  )
}
