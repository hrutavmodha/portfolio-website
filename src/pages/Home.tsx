import { useNavigate } from "react-router-dom"
import Heading from "../components/Headings"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className='text-xl'>
            <Heading level={1}>Hi, I'm Hrutav Modha</Heading>
            <div className='flex flex-col md:flex-row justify-around items-center md:items-start gap-8'>
                <div>
                    <p>I'm  a backend-focused developer who builds logical systems and scalable architectures</p>
                    <div className='mt-10 md:flex md:items-start md:gap-20'>
                        <img src='https://raw.githubusercontent.com/hrutavmodha/portfolio-website/main/images/ghpp.jpg' className='w-30 h-30 sm:w-30 sm:h-30 object-cover rounded-full border-2 border-primary shadow-2xl mx-auto md:mx-0' />
                        <Card className='bg-gray-100 backdrop-blur-lg border border-border sm:w-[100vw] md:w-[700px] mb-6 shadow-6xl mt-8 md:mt-0'>
                            <CardContent className='p-6'>
                                <p className='text-md sm-text-lg text-gray-900 mb-2 font-bold text-xl'>Projects:</p>
                                <ul className='list-disc text-left pl-5 text-gray-900 space-y-1 text-sm sm:text-base'>
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
                </div>
                <div>
                    <div className='flex gap-4'>
                        <Button className='hover:bg-gray-700 shadow-lg' onClick={() => navigate('/projects')}>View Projects</Button>
                        <p className='text-lg font-bold mt-1'>OR</p>
                        <Button className='hover:bg-gray-700 shadow-lg' onClick={() => navigate('/contact')}>Contact Me</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}