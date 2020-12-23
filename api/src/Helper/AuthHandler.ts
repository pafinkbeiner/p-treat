import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User, { UserInterface }  from "../models/User"
import { NextFunction, Request, Response } from "express";

export function extractBearerToken(req: Request): string | undefined{
    return req.headers["authorization"]?.split(" ")[1];
}

export function allowCustomer(req: Request, res: Response ,next: NextFunction){

    let bearer: any = req.headers["authorization"];

    if(bearer != undefined){

        const token = bearer.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET || "", (err:any, authData: any) => {

            if(err){
                res.status(400).json({error: "Verification was not successfull"});
            }else{

                if(authData.role == 1 || authData.role == 2 || authData.role == 3){
                    next();
                }else{
                    res.status(400).json({error: "Wrong Role!"});
                }
            }
        });

    }else{
        res.status(400).json({error: "Bearer token was not provided"});
    }
}

export function allowPremium(req: Request, res: Response ,next: NextFunction){

    let bearer: any = req.headers["authorization"];

    if(bearer != undefined){

        const token = bearer.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET || "", (err:any, authData: any) => {

            if(err){
                res.status(400).json({error: "Verification was not successfull"});
            }else{
                if(authData.role == 2 || authData.role == 3){
                    next();
                }else{
                    res.status(400).json({error: "Wrong Role!"});
                }            
            }

        });

    }else{
        res.status(400).json({error: "Bearer token was not provided"});
    }

}

export function allowAdmin(req: Request, res: Response ,next: NextFunction){

    let bearer: any = req.headers["authorization"];

    if(bearer != undefined){

        const token = bearer.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET || "", (err:any, authData: any) => {

            if(err){
                res.status(400).json({error: "Verification was not successfull"});
            }else{
                if(authData.role == 3){
                    next();
                }else{
                    res.status(400).json({error: "Wrong Role!"});
                }            
            }

        });

    }else{
        res.status(400).json({error: "Bearer token was not provided"});
    }

}

export async function login(email: string, password:string){

    console.log(`info that user with email: ${email} tried to login`);

    let user = await User.findOne({ email });

    if(user != undefined){

        if(bcrypt.compareSync(password, user.password)){

            return {key: jwt.sign(user.toJSON(), process.env.JWT_SECRET||"" )};
        }

    }else{
        return undefined;
    }
}

export async function register(username: string, password:string, email:string){

    console.log(`info that user with email: ${email} tried to register`);

    let found: boolean = await User.findOne({email}) != undefined ? true : false; 

    if(found) return undefined

    const user: UserInterface = new User({
        username: username,
        email: email, 
        password: bcrypt.hashSync(password, 5),
    });

    const result = await user.save();

    if(result != undefined){
        return login(result.email, password);
    }else{
        return undefined;
    }

}
