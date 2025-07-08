import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import { Home as HomeIcon, User } from 'lucide-react'
export default function App() {
    const navItems = [{
                title: 'Home', 
                icon: HomeIcon,
                path: '/',
                element: <Home />
            }, {
                title: 'About',
                icon: User,
                path: '/about',
                element: <About />
            }]
    return <NavBar navItems={navItems} />
}