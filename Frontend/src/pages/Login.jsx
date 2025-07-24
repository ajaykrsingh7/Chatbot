import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImagesIcon } from 'lucide-react';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState(false)
  const [message, setMessage] = useState("")

  const navigator = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = { email, password }
      const response = await axios.post("http://localhost:3000/api/auth/login", data, {withCredentials: true})

      setIsError(false)
      setMessage(response.data?.message)
      setTimeout(()=>{
        navigator("/chat")
      },2000);
      
    } catch (err) {
      setIsError(true)
      setMessage(err.message)
      console.log(err)
    }

    setEmail("")
    setPassword("")
  }

  return (
 
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#344e41] to-[#588157]">
    <Card className="w-full max-w-sm border-8 border-black-700">

      <CardHeader className=" flex justify-center items-center flex-col">
        <div className="h-15 w-15">
        <img src="/assets/logo125.webp" alt="logo" /></div>
      
        <cardTitle className=" font-bold text-2xl">Welcome</cardTitle>
        <CardTitle className="  font-bold font-weight:900 text-yellow-600 text-xl">Login to your account</CardTitle>
  
      </CardHeader>
      <CardContent>
          <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4" />
            
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">What's your e-mail?</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Your Password?</Label>
              </div>
              <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
               />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit"onClick={handleSubmit} className="w-full cursor-pointer">
          Login
        </Button>
      </CardFooter>
      {message && (
              <p
                className={`text-center font-semibold ${
                  isError ? "text-red-600" : "text-green-600"
                }`}
              >
                {message}
              </p>
            )}
    </Card>
  </div>
  )
}

export default Login
