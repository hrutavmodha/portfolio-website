import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Textarea } from "../components/ui/textarea"
import { FaEnvelope, FaPhone, FaGithub, FaRegPaperPlane, FaLinkedin } from "react-icons/fa"
import Heading from "../components/Headings"
export default function ContactMe() {
    return (
        <div>
            <Heading level={1}>Contact Me</Heading>
            <section className="overflow-y-hidden flex items-center justify-center bg-gradient-to-r from blue-900 to purple-800">
                <Card className="w-full h-[450px] max-w-xl bg-gray-100 shadow-3xl mb-80">
                    <CardHeader>Fill up the given below details to reach me out!</CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input type="text" placeholder="Name" className="bg-white" required />
                            <Input type="email" placeholder="Email" className="bg-white" required />
                            <Input type="text" placeholder="Subject" className="bg-white" required />
                            <Textarea placeholder="Message" rows={5} className="w-full resize-none bg-white p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <Button className="w-[50%] ml-[25%] bg-black text-lg hover:bg-gray-700 text-white"><FaRegPaperPlane className="w-[50px] text-2xl" />Send Me</Button>
                        </form>
                    </CardContent>
                    <Heading level={2}>OR</Heading>
                    <div className="grid grid-cols-2 gap-2 justify-around items-center text-xl text-white text-2xl">
                        <a href="mailto:modhahrutav@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-black m-6 py-1 h-[40%] w-[70%] items-center flex justify-around shadow-xl rounded-lg m-6 p-2">
                            <FaEnvelope className="ml-5 text-3xl" />
                            Mail
                        </a>
                        <a href="tel:+919427452050" className="bg-black h-[40%] w-[70%] m-6 p-2 items-center flex justify-around shadow-xl rounded-lg">
                            <FaPhone className="ml-5 text-3xl" />
                            Call
                        </a>
                        <a href="https://linkedin.com/in/hrutav-modha-72b55a367" className="bg-black h-[40%] w-[70%] items-center flex justify-around shadow-xl rounded-lg m-6 p-2" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="ml-5 text-3xl" />
                            LinkedIn
                        </a>
                        <a href="https:/github.com/hrutavmodha" className="bg-black h-[40%] w-[70%] items-center flex justify-around shadow-xl rounded-lg m-6 p-2" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="ml-5 text-3xl" />
                            GitHub
                        </a>
                    </div>
                </Card>
            </section>
        </div>
    )
}