import Heading from "../components/Headings"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
export default function Home() {
    return (
        <div>
            <Heading level={1}>Hi, I'm Hrutav Modha</Heading>
            <div className='flex justify-around'>
                <div>
                    <p>I'm  a backend-focused developer who builds logical systems and scalable architectures</p>
                    <Card className='bg-gray-100 backdrop-blur-lg border border-border max-w-md mb-6 shadow-xl'>
                        <CardContent className='p-6'>
                            <p className='text-md sm-text-lg text-muted-foreground mb-2 font-bold text-xl'>Projects:</p>
                            <ul className='list-disc text-left pl-5 text-muted-foreground space-y-1 text-sm sm:text-base'>
                                <li className='font-bold shadow-xl'>Text Utility:</li>
                                <p>The full stack text utility web app</p>
                                <li className='font-bold shadow-xl'>E-Commerce</li>
                                <p>An another e-commerce platform, just like Amazon and Flipkart, etc..</p>
                                <li className='font-bold shadow-xl'>Desktop Assistant</li>
                                <p>A smart web-based voice-assistant which automates your daily tasks</p>
                                <li className='font-bold shadow-xl'>Basic Data Analytics tools</li>
                                <p>It is a project through which I learned basics and intermediate of the data analysis using Python libraries like NumPy, Pandas and MatPlotLib</p>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
                <div>
                    <div className='flex gap-4'>
                        <Button>View More Projects</Button>
                        <Button variant='outline'>Contact Me</Button>
                    </div>
                    <div className='mt-10'>
                        <img src='../../images/hrutav.jpg' className='w-50 h-50 sm:w-60 sm:h-60 object-cover rounded-full border-2 border-primary shadow-2xl' alt='MyProfile' />
                    </div>
                </div>
            </div>
        </div>
    )
}