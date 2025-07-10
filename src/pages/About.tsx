import { Separator } from '@radix-ui/react-dropdown-menu'
import Heading from '../components/Headings'
import { Card, CardContent } from '../components/ui/card'
import { skillSet } from '../data/skillSet'
export default function About() {
    return (
        <section>
            <Heading level={1}>About Me</Heading>
            <div className='flex flex-col sm:flex-row sm:justify-around items-center gap-6'>
                <img
                    src='../../images/ghpp.jpg'
                    className='w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full border-2 border-primary shadow-2xl flex-shrink-0'
                    alt='MyProfile'
                />
                <Separator className='hidden sm:block mt-6 ml-6' />
                <p className='mt-4 text-muted-foreground text-base sm:text-xl max-w-xs sm:max-w-lg text-center sm:text-left break-words'>
                    I'm a Computer Engineering student who is passionate about full-stack development and turning ideas into code that works.
                    <br /><br />
                    I'm currently in 3rd semester of Diploma in Computer Engineering.
                    <br /><br />
                    I'm a student at Government Polytechnic Jamnagar
                    <br /><br />
                    Following is the list in cards of <b>my tech-stacks</b>
                </p>
            </div>
            <Separator className='my-6' />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grod-cols-4 gap-4'>
                {skillSet.map((skill, i) => (
                    <Card key={i} className='flex flex-col items-center m-2 sm:m-4 p-4 h-fit cursor-default bg-gray-100 shadow-xl hover:shadow-2xl transition-shadow'>
                        <skill.icon className='text-3xl mb-2 text-primary' />
                        <CardContent className='text-center'>{skill.name}</CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}