import { Request, Response } from "express";
import { extractBearerToken } from "../Helper/AuthHandler";
import Site, { SiteInterface } from "../models/Site";
import User, { UserInterface } from "../models/User";
import jwt from "jsonwebtoken"

export const performLike = (req: Request, res: Response) => {
    if(req.body.siteId != undefined){

        let token = extractBearerToken(req);

        if(token){

            jwt.verify(token, process.env.JWT_SECRET || "", async(err:any, authData: any) => {

                if(err){
                    res.status(400).json({error: "Problem Verifing Signature!"});
                }else{
    
                    //Add +1 to Site
                    const site = await Site.findById(req.body.siteId);
                    if(site){
                        await site.update({$set: {rating: {like: site.rating.like + 1, disklike: site.rating.disklike}}})
                    }else{
                        res.status(400).json({error: "Site not found!"});
                    }

                    //Add video id to user

                    const user = await User.findById(req.body.userId);
                    if(user){
                        let array: Array<string> = new Array();
                        array = user.liked;
                        array.push(site?._id);

                        await user.update({$set: { liked: array }})

                    }else{
                        res.status(400).json({error: "user not found!"});
                    }

                    res.status(200).json({succ: "Operation was performed sucessfully!"});

                }
            });

        }else{
            res.json({error: "Site Id was not provided!"});
        }

    }else{
        if(req.body.siteId == undefined) res.json({error: "Site Id was not provided!"});
    }
}

