import NavBar from './components/NavBar'
import { navItems } from './data/navItems'
export default function App() {
    return <NavBar navItems={navItems} />
}