import Heading from "../components/Headings"
import type { project } from "../types/projects"
import { projects } from "../data/projects"
import { Card, CardContent, CardTitle, CardDescription } from '../components/ui/card'
export default function Projects() {
    return (
        <section className='px-4 md:px-16 py-10'>
            <Heading level={1}>My Projects</Heading>
        </section>
    )

}