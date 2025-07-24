import { useState } from "react";
import axios from "axios";
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

import {useNavigate} from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const navigator = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        username,
        email,
        password,
      };
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        data
      );
      setIsError(false);
      setMessage(response.data?.message);
      setTimeout(()=>{
        navigator("/login")
      },2000);
      
    } catch (err) {
      setIsError(true);
      setMessage(err.message);
      console.log(err);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
     <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#344e41] to-[#588157]">

   <div className="w-80 h-[400px] flex justify-center items-center flex-wrap ">
        


      <Card className="w-full max-w-sm border-8 border-black-200">
      <CardHeader className=" flex justify-center items-center">
        <CardTitle className="font-bold font-weight:900 text-green-700">Register to Ayurveda-AI</CardTitle>
      
        
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>

         <div className="flex flex-col gap-6">

            <div className="grid gap-2">
              <Label htmlFor="username"> What's your username?</Label>
              <Input
                id="usernamer"
                type="text"
                placeholder="Enter your username..."
                
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">What's your e-mail?</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your e-mail..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password"> Your Password?</Label>
               
              </div>
              <Input id="password" type="password" placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" onClick={handleSubmit} className="w-full cursor-pointer">
          Register
        </Button>
       
      </CardFooter>
      {isError && message.length != 0 ? (
           <h1 className="text-red-600">{message}</h1>
         ) : (
           <h1 className="text-green-600">{message}</h1>
         )}
    </Card>
    </div>
    </div>
  );
}

export default Register;
