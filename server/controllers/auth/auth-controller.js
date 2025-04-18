
// const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken');
// const User=require('../../models/User')
// ///register
// const registerUser=async(req,res)=>{
    
//     try {
//         const {userName,email,password}=req.body;
//         const hashPassword=bcrypt.hash(password,12);
//         const newUser=new User({
//             userName,email,password:hashPassword
//         })
//         await newUser.save()
//         res.status(200).json({
//             success:true,
//             message:'User created successfully'
//         })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success:false,
//             message:"Error registering user"
//         })
//     }
// }


// //login
// const login=async(req,res)=>{
//     try {
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success:false,
//             message:"Error registering user"
//         })
//     }
// }


//logout


//auth middleware


// module.exports={registerUser}




const bcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const User = require('../../models/User'); // Adjust path according to your project

exports.registerUser = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        // Check if username already exists
        const existingUser = await User.findOne({ userName });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Username already exists. Please choose another one.',
            });
        }

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered. Please login.',
            });
        }

        // Create new user
        const newUser = new User({ userName, email, password });
        await newUser.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully!',
        });
    } catch (error) {
        console.error(error);

        // Handle MongoDB duplicate key error (just in case)
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0]; // which field is duplicated
            return res.status(400).json({
                success: false,
                message: `Duplicate ${field}. Please use a different one.`,
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
// const login=async(req,res)=>{
//          try {
            
//         } catch (error) {
//             console.log(error)
//             res.status(500).json({
//                 success:false,
//                 message:"Error registering user"
//             })
//         }
//     }
