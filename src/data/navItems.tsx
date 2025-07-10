import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'
import { Home as HomeIcon, User, Code2 as CodeLogo, Contact } from 'lucide-react'
import ContactMe from '../pages/Contact'
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
}, {
    title: 'Contact',
    icon: Contact,
    path: '/contact',
    element: <ContactMe />
}]