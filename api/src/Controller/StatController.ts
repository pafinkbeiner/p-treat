import { Request, Response } from "express";
import Site, { SiteInterface } from "../models/Site";

export const getCategories = (req: Request, res: Response) => {
    const site = Site.find( (err: any, sites: SiteInterface[]) => {
        if(err){
            res.send(err);
        }else{
            
            let categories: Array<String> = new Array();

            sites.map(site => {
                if(categories.find( item => item == site.category) == undefined) categories.push(site.category);
            })

            res.json(categories);
        }
    });
}

export const getOverviewContent = (req: Request, res: Response) => {
    const site = Site.find((err: any, sites: SiteInterface[]) => {
        if(err){
            res.send(err);
        }else{
            
            let categories: Array<string> = new Array();

            sites.map(site => {
                if(categories.find( item => item == site.category) == undefined) categories.push(site.category);
            })

            let array: Array<{name: string, data: SiteInterface[]}> = new Array();

            categories.map(cat => {
                array.push({
                    name: cat,
                    data: sites.filter(site => site.category == cat).slice(0,3)
                })
            })

            res.json({data: array});

        }
    });
}
