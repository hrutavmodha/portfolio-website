import Heading from "../components/Headings"
import { projects } from "../data/projects"
import { Card, CardContent, CardTitle, CardDescription, CardFooter } from '../components/ui/card'
export default function Projects() {
    return (
        <section>
            <Heading level={1}>My Projects</Heading>
            {projects.map((project, index) => (
                <Card key={index} className='m-5 p-5 shadow-2xl bg-gray-100'>
                    <CardTitle className='text-xl'>{project.title}</CardTitle>
                    <CardDescription>{project.subtitle}</CardDescription>
                    <CardContent>
                        <ul className='ml-5 list-disc'>
                        <li>{project.details[0]}</li>
                        <li>{project.details[1]}</li>
                        <li>{project.details[2]}</li>
                        </ul>
                    </CardContent>
                    <CardFooter>Is it deployed?: {project.deployed ? 'Yes' : 'No'}</CardFooter>
                </Card>
            ))}
        </section>
    )

}