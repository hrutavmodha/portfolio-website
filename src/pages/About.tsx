import { Separator } from '@radix-ui/react-dropdown-menu'
import Heading from '../components/Headings'
import { Card, CardContent } from '../components/ui/card'
import { skillSet } from '../data/skillSet'
export default function About() {
    return (
        <section>
            <Heading level={1}>About Me</Heading>
            <div className='flex justify-between'>
                <img src='../../images/ghpp.jpg' className='w-50 h-50 sm:w-60 sm:h-60 object-cover rounded-full border-2 border-primary shadow-2xl' alt='MyProfile' />
                <Separator className='mt-6 ml-6' />
                <p className='mt-4 text-muted-foreground max-w-full text-xl'>I'm a Computer Engineering student who is passionate about full-stack development and turning ideas into code that works.
                    <br /><br />
                    I'm currently in 3rd semester of Diploma in Computer Engineering.
                    <br /><br />
                    I'm a student at Government Polytechnic Jamnagar
                    <br /><br />
                    Following is the list in cards of <b>my tech-stacks</b></p>
            </div>
            <Separator className='my-6' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grod-cols-4 gap-4'>
                {skillSet.map((skill, i) => (
                    <Card key={i} className='cursor-default bg-gray-100 shadow-xl hover:shadow-2xl'>
                        <skill.icon className='text-2xl mt-10'/>
                        <CardContent className='text-center'>{skill.name}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}