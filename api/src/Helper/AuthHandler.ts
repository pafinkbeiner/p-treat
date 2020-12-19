import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User, { UserInterface }  from "../models/User"
import { NextFunction, Request, Response } from "express";

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

    let user;

    try{
        user = await User.findOne({ email });
    }catch{
        user = undefined;
    }

    if(user != undefined){

        if(bcrypt.compareSync(password, user.password)){
            return {key: jwt.sign(user, process.env.JWT_SECRET||"" )};
        }

    }else{
        return undefined;
    }
}

export async function register(username: string, password:string, mail:string){

    console.log(`info that user with email: ${mail} tried to register`);

    let found: boolean;

    try{
        if(await User.findOne({mail}))
            { found = true; 
        }else{
            found = false;
        }
    }catch{
        found = false;
    }

    if(found) return undefined

    const user: UserInterface = new User({
        username: username,
        email: mail, 
        password: bcrypt.hashSync(password, 5),
    });

    user.save()
    .then( (result) => {return login(mail, password)})
    .catch( (err) => {return undefined});
}
