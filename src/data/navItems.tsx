import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import { Home as HomeIcon, User, Code2 as CodeLogo } from 'lucide-react'
export const navItems = [{
    title: 'Home',
    icon: HomeIcon,
    path: '/',
    element: <Home />
}, {
    title: 'About',
    icon: User,
    path: '/about',
    element: <About />
}, {
    title: 'Projects',
    icon: CodeLogo,
    path: '/projects',
    element: <Projects />
}]