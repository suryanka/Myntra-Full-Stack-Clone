import User from "../Model/user-schema.js"

export const userSignup= async (request, response)=> {
    const phoneNumber= request.body.phoneNumber;
    const password= request.body.password;

    console.log("Inside the userSignUp function in backend");
    try{
        const exist =await  User.findOne({phoneNumber: phoneNumber});
        if(exist){
            response.status(401).json({message: 'Username already exists'});
        }

        const user= request.body;
        const newUser= new User(user);
        await newUser.save();
        response.status(200).json({message: 'Signup successful', data:user});
    }
    catch(error){
        response.status(500).json({message: error.message});
    }
}

export const userLogin= async (request, response)=>{
    const phoneNumber= request.body.phoneNumber;
    const password= request.body.password;
    try {
        let user= await User.findOne({phoneNumber: phoneNumber, password: password});
        if(user){
            response.status(200).json({ message:"Login Successful", data:user})
        }
        else{
            response.status(401).json({
                message: "Invalid Login"
            })
        }

    }
    catch(error){
        response.status(500).json({message: error.message});
    }

}