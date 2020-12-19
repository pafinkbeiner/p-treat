import { Request, Response } from "express";
import User, { UserInterface } from "../models/User";

export const allUsers = (req: Request, res: Response) => {
    const sites = User.find( (err: any, users: UserInterface[]) => {
        if(err){
            res.send(err);
        }else{
            res.send(sites);
        }
    });
};

export const getUser = (req: Request, res: Response) => {
    const users = User.findOne( {name: req.params.name},(err: any, user: UserInterface) => {
        if(err){
            res.send(err);
        }else{
            res.send(users);
        }
    });
};