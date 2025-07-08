import type { JSX } from 'react'
type NavItem = {
    title: string,
    icon: React.ForwardRefExoticComponent<any>
    path: string,
    element: JSX.Element
}
export type NavProps = {
    navItems: NavItem[]
}