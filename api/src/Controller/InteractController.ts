import { Request, Response } from "express";
import { extractBearerToken } from "../Helper/AuthHandler";
import Site, { SiteInterface } from "../models/Site";
import User, { UserInterface } from "../models/User";
import jwt from "jsonwebtoken"

export const performLike = (req: Request, res: Response) => {
    if(req.params.siteId != undefined){

        let token = extractBearerToken(req);

        if(token){

            jwt.verify(token, process.env.JWT_SECRET || "", async(err:any, authData: any) => {

                if(err){
                    res.status(400).json({error: "Problem Verifing Signature!"});
                }else{
    
                    //Add +1 to Site
                    const site = await Site.findById(req.params.siteId);
                    
                    //User already likes site
                    const array = await (await User.findById(authData._id))?.liked
                    const found = array?.find(item => item == req.params.siteId) != undefined

                    if(found){
                        res.json("Error")
                    } else{

                        if(site){
                            await site.updateOne({$set: {rating: {like: site.rating.like + 1, disklike: site.rating.disklike}}})
                        }else{
                            res.status(400).json({error: "Site not found!"});
                        }

                        //Add video id to user
                        const user = await User.findById(authData._id);
                    
                        if(user){

                            let array: Array<string> = new Array();

                            array = user.liked;

                            array.push(site?._id);

                            await user.updateOne({$set: { liked: array }})

                            console.log("Person danach: ",await(await User.findById(authData._id))?.liked)

                            res.status(200).json({succ: "Operation was performed sucessfully!"});

                        }else{
                            res.status(402).json({error: "user not found!"});
                        }

                    }

                }
            });

        }else{
            res.json({error: "Site Id was not provided!"});
        }

    }else{
        if(req.params.siteId == undefined) res.json({error: "Site Id was not provided!"});
    }
}

