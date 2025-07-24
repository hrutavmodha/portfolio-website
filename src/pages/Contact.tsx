import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Textarea } from "../components/ui/textarea"
import { FaPhone, FaGithub, FaRegPaperPlane, FaLinkedin } from "react-icons/fa"
import Heading from "../components/Headings"
import { useState } from "react"
import { useToast } from "../hooks/use-toast"
import { Toaster } from "../components/ui/toaster"
export default function ContactMe() {
    const [name, setName] = useState<string>('')
    const [mail, setMail] = useState<string>('')
    const [sub, setSub] = useState<string>('')
    const [msg, setMsg] = useState<string>('')
    const { toast } = useToast()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        if (!name || !mail || !sub || !msg)
            toast({
                title: 'Error',
                description: 'Please fill up all the details',
                variant: 'destructive'
            })
        else {
            fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: mail,
                    subject: sub,
                    message: msg
                })
            }).then((res) => {
                return res.json()
            }).then((data) => {
                toast({
                    title: 'Success',
                    description: data.message,
                    variant: 'default'
                })
                setName('')
                setMail('')
                setSub('')
                setMsg('')
            }).catch((error) => {
                toast({
                    title: 'Error',
                    description: error,
                    variant: 'destructive'
                })
                console.log(error)
            })
        }
    }
    return (
        <div>
            <Heading level={1}>Contact Me</Heading>
            <Toaster />
            <section className="overflow-y-hidden flex items-center justify-center bg-gradient-to-r from blue-900 to purple-800">
                <Card className="w-full h-[450px] max-w-xl bg-gray-100 shadow-3xl mb-80">
                    <CardHeader>Fill up the given below details to reach me out!</CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <Input type="text" placeholder="Name" className="bg-white" value={name} onChange={(e) => setName(e.target.value)} required />
                            <Input type="email" placeholder="Email" className="bg-white" value={mail} onChange={(e) => setMail(e.target.value)} required />
                            <Input type="text" placeholder="Subject" className="bg-white" value={sub} onChange={(e) => setSub(e.target.value)} required />
                            <Textarea placeholder="Message" rows={5} className="w-full resize-none bg-white p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" value={msg} onChange={(e) => setMsg(e.target.value)} />
                            <Button className="w-[50%] ml-[25%] bg-black text-lg hover:bg-gray-700 text-white" onClick={(e) => { handleClick(e) }}><FaRegPaperPlane className="w-[50px] text-2xl" />Send Me</Button>
                        </form>
                    </CardContent>
                    <Heading level={2}>OR</Heading>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center items-center text-xl text-white px-8 py-4 mb-5">
                        <a href="tel:+919427452050" className="bg-black w-full md:w-[80%] p-3 items-center flex justify-center gap-2 shadow-xl rounded-lg hover:bg-gray-800 transition-colors">
                            <FaPhone className="text-2xl" />
                            Call
                        </a>
                        <a href="https://linkedin.com/in/hrutav-modha-72b55a367" className="bg-black w-full md:w-[80%] p-3 items-center flex justify-center gap-2 shadow-xl rounded-lg hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl" />
                            LinkedIn
                        </a>
                        <a href="https:/github.com/hrutavmodha" className="bg-black w-full md:w-[80%] p-3 items-center flex justify-center gap-2 shadow-xl rounded-lg hover:bg-gray-800 transition-colors" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl" />
                            GitHub
                        </a>
                    </div>
                </Card>
            </section>
        </div>
    )
}