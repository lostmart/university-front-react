import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext, useEffect } from "react"
import HeaderComp from "./components/HeaderComp"
import FooterComp from "./components/FooterComp"
import "./assets/css/bootstrap.min.css" // custom bootstrap css min
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./assets/css/carousel.css"
import "./assets/css/signUp.css"
import "./styles.scss"


// Components
// import NavBar from "./components/ui/NavBar"

// Pages
import Home from "./pages/HomePage"
import About from "./pages/AboutPage"
import NotFound from "./pages/NotFound"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import ProfilePage from "./pages/ProfilePage"

// Auth
//import { isAuthenticated } from "./utils/Auth"

// contextProvider
import UserProvider from "./context/UserContext"
import { UserContext } from "./context/UserContext"


const authUser = async (token: string) => {

	const API_AUTH_USER = 'https://dummyjson.com/user/me'

    /* providing token in bearer */
    try {
        const res = await fetch(API_AUTH_USER, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, 
            }, 
        })
        const userData = await res.json()
        console.log(userData)
        // setUser((prev) => ({
        //     ...prev
        // }))
        
        
    } catch (error) {
        console.log(error)
        
    }    
}


function App() {
	const { setUser } = useContext(UserContext)

	const isAuthenticated = () => {
		const token = sessionStorage.getItem('token')
    
    if (!token) {
       console.log("no token !!");	   
		} else {
		authUser(token)
		
		}
		
	}
	
	useEffect(() => {
		isAuthenticated()
	}, [])
	return (
		<UserProvider>
			<Router>
				<div className="container">
					<HeaderComp />
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/profile" element={<ProfilePage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<div className="container">
					<FooterComp />
				</div>
			</Router>
		</UserProvider>
	)
}

export default App
