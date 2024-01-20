import { RouterProvider } from "react-router-dom"
import HeaderComp from "./components/ui/HeaderComp"
import router from "./router.jsx"

const App = () => {
	return <RouterProvider router={router} />
}

export default App
