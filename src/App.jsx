import './App.css'
import {BrowserRouter,Routes,Route,Link,useNavigate, Outlet} from "react-router-dom"


function App(){
 //link used to directly fetch without the loader
 //only the route has the strict has neet route 
  return <div>
  <BrowserRouter>
    <Routes>
      <Route path="/neet" element={<Layout />}>
        <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
        <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
        <Route path="/" element={<Landing />}/>
        <Route path="*" element={<ErrorPage />}/>
      </Route>  
    </Routes>
  </BrowserRouter>
  Contact us later
 </div>
}

//this layout help us to render main route and then render the child routes
function Layout()
{
  return <div style={{height:"100vh"}}>
    <Link to="/">Allen</Link>

    <Link to="/neet/online-coaching-class-11">Class11</Link>

    <Link to="/neet/online-coaching-class-12">Class12</Link> 
      <div style={{height:"90vh"}}>
        <Outlet/>
      </div>
    footer
  </div>
}
//this outlet renders child routes after rendering the parent route over the application

function Class11Program(){
  return <div>
    NEET Program for the class 11th students
  </div>
}


function Class12Program()
{
 const navigate=useNavigate();

 function redirectUser()
 {
  navigate("/")
 }


 return <div>
    NEET Program for the class 12th students
    <button onClick={redirectUser}>go back to landing page</button>
  </div>
}


function Landing()
{
  return <div>
    welcome to allen
  </div>
}

function ErrorPage()
{
  return <div>
    SorryPagenotFound
  </div>
}
export default App
