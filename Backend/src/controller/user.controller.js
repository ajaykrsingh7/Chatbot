const User = require("../models/User.model");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

exports.register = async function(req, res){
  try{
    const {username, email, password}=req.body
    if(!username || !email || !password){
      return res.status(401).json({message:"All values are required!"});
    }
    const user = await User.create({ username, email, password });
     if(!user){
      return res.status(401).json({message:"Something went wrong while registering the user "});
    }
    return res.status(200).json({message:"User registered successfully",
      user:{
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    })
  }catch(err){
    return res.status(500).json({message: err.message})

  }
}

exports.login = async function(req,res){
  try{
    const { email, password}=req.body
    if( !email || !password){
      return res.status(401).json({message:"All values are required!"});
    }
    const user =await User.findOne({email});
     if(!user){
      return res.status(401).json({message:"Something went wrong while login the user "});
    }
    const isMatched = await bcrypt.compare(password, user.password)
    if(!isMatched){
      return res.status(400).json({message:"password is incorrect "});
    }

      const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:"7d"})
     res.cookie('token', token,{
      httpOnly:true,
      expires: new Date(
        Date.now() +30 * 24 * 60 * 1000
      )
     });
     res.json({sucess: true,message:"Login sucessful", token, user:{_id: user._id, username: user.username, email: user.email}});

    return res.status(200).json({message:"Login successful",
      user:{
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    })
  }catch(err){
    return res.status(500).json({message:err.message})
  }
};

exports.logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ error: "User not found" });
    
    res.json({ _id: user._id, username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ error: err.message});
}
};
