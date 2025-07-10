import { NavLink, Routes, Route } from 'react-router-dom'
import type { NavProps } from '../types/navbar'
export default function NavBar({ navItems }: NavProps) {
    return (
        <div className='overflow-visible'>
            <nav className='sticky top-0 z-50 shadow-2xl bg-blue-900 justify-between mb-5'>
                <div className='flex items-center justify-between p-3'>
                    <h1 className='text-white font-bold text-2xl'>Hrutav Modha</h1>
                    <ul className="flex gap-4">
                        {navItems.map((item, index) => (
                            <NavLink to={item.path} key={index} className={({ isActive }) => isActive ? 'text-white font-bold' : 'text-gray-200 hover:text-gray-100 transition'}>
                                <item.icon/>
                                <li>{item.title}</li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </nav>
            <Routes>
                {navItems.map((item, index) => (
                    <Route key={index} path={item.path} element={item.element} />
                ))}
            </Routes>
        </div>
    )
}