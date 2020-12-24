import * as express from "express";
import * as AuthHandler from "../Helper/AuthHandler";
import jwt from "jsonwebtoken"
import User from "../models/User";
import bcrypt from "bcrypt"

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.json("pTREAT API");
});

router.post("/login", async (req, res, next) => {

  if(req.body.email != undefined && req.body.password != undefined){

    const result = await AuthHandler.login(req.body.email, req.body.password)

    if(result != undefined){
      res.json(result);
      console.log(`info that login of ${req.body.email} was performed successfully!`);
    }else{
      res.status(400).json({error: "Login Process was not successfull"});
    }

  }else{
    if(req.body.email == undefined) res.status(400).json({error: "email was not provided"});
    if(req.body.password == undefined) res.status(400).json({error: "Password was not provided"});
  }

});

router.post("/register", async (req, res, next) => {

  if(req.body.username != undefined && req.body.password != undefined && req.body.email != undefined){

    const result = await AuthHandler.register(req.body.username, req.body.password, req.body.email);

    if(result != undefined){
      res.json(result)
    }else{
      res.status(400).json({error: "There is already a user with the provided credentials!"});
    }

  }else{
    if(req.body.username == undefined) res.status(400).json({error: "Username was not provided"});
    if(req.body.password == undefined) res.status(400).json({error: "Password was not provided"});
    if(req.body.email == undefined) res.status(400).json({error: "email was not provided"});
  }

});

router.get("/decodeJWT", async(req, res, next) => {

  let bearer: any = req.headers["authorization"];

  if(bearer != undefined){

      const token = bearer.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET || "", (err:any, authData: any) => {;
          if(err){
              res.status(400).json({error: "Verification was not successfull"});
          }else{
            res.json(authData)    
          }

      });

  }else{
      res.status(400).json({error: "Bearer token was not provided"});
  }

});

router.get("/refreshJWT", async(req, res, next) => {

  let bearer: any = req.headers["authorization"];

  if(bearer != undefined){

      const token = bearer.split(" ")[1];

      jwt.verify(token, process.env.JWT_SECRET || "", async(err:any, authData: any) => {;
        
        let user = await User.findOne({ email: authData.email });

        if(user != undefined){
    
          res.json( {key: jwt.sign(user.toJSON(), process.env.JWT_SECRET||"" )} );
    
        }else{
          res.status(400).json({error: "Problem authenticating"});
        }

    });

  }else{
      res.status(400).json({error: "Bearer token was not provided"});
  }

});

export default router;