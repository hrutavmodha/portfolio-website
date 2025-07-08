import type { heading } from '../types/headings'
export default function Heading({ level, children } : heading){
    const sizeMap = {
        1: 'text-5xl font-bold',
        2: 'text-4xl font-semibold',
        3: 'text-3xl font-semi-bold',
        4: 'text-2xl font-medium',
        5: 'text-xl font-medium',
        6: 'text-lg font-medium'
    } [level]
    return <p className={`${sizeMap} my-4 py-4 text-center`}>{children}</p>
}