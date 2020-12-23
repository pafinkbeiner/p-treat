import { Request, Response } from "express";
import Site, { SiteInterface } from "../models/Site";

export const allSites = (req: Request, res: Response) => {
  const site = Site.find((err: any, sites: SiteInterface[]) => {
    if (err) {
      res.send(err);
    } else {
      res.send(sites);
    }
  });
};

export const getSiteByName = (req: Request, res: Response) => {
  const sites = Site.findOne(
    { name: req.params.name },
    (err: any, site: SiteInterface) => {
      if (err) {
        res.send(err);
      } else {
        res.send(site);
      }
    }
  );
};

export const getSitesByCategory = (req: Request, res: Response) => {
  const sites = Site.find(
    { category: req.params.category },
    (err: any, sites: SiteInterface[]) => {
      if (err) {
        res.send(err);
      } else {
        res.send(sites);
      }
    }
  );
};

export const getSiteById = (req: Request, res: Response) => {
  const sites = Site.findOne(
    { _id: req.params.id },
    (err: any, sites: SiteInterface[]) => {
      if (err) {
        res.send(err);
      } else {
        res.send(sites);
      }
    }
  );
};

export const addSiteForm = (req: Request, res: Response) => {
  res.redirect("/index.html");
};

export const addSite = (req: Request, res: Response) => {

  if (
    req.body.name !== undefined &&
    req.body.subname !== undefined &&
    req.body.category !== undefined &&
    req.body.thumbs !== undefined && 
    req.body.description !== undefined && 
    req.body.score !== undefined && 
    req.body.keywords !== undefined && 
    req.body.review !== undefined && 
    req.body.exclusive !== undefined &&
    req.body.url !== undefined
  ) {
    const site = new Site({
      name: req.body.name,
      subname: req.body.subname,
      category: req.body.category,
      thumbs: req.body.thumbs,
      description: req.body.description,
      score: req.body.score,
      keywords: req.body.keywords,
      review: req.body.review,
      exclusive: req.body.exclusive,
      meta: {
        updated: req.body.updated,
        uploaded: req.body.uploaded,
      },
      rating: {
        like: req.body.like,
        disklike: req.body.disklike,
      },
      url: req.body.url
    });

    console.log("Versuche Seite: "+req.body.name+" hinzuzufügen!");

    site
      .save()
      .then((result) => { console.log("Erfolg!"); res.send(result)})
      .catch((err) => { console.log("Fehler!"); res.send(err)});
  } else {
    res.sendStatus(400).json({ succ: 0 });
  }
};
