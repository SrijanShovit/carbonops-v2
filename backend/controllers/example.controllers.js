const scores=require('../models/score.model')
const event=require('../models/events.model');
//const IndividualProfileCompletion = require('../models/individual_profle_completions.model');
//const OrganizationProfileCompletion = require('../models/individual_profle_completions.model');
const addScore=async (req, res) => {
    try{
        const newscore = await scores.create(req.body);
        console.log(newscore)
        res.send(newscore);
    }catch(err){
        throw new Error(err);
    }
}
const addEvent= async(req,res)=>{
     try{
        const newEvent=await event.create(req.body);
     res.send(newEvent);
     }catch(e){
        throw new Error(e);
     }
}
const addIndividualProfile=async (req, res) => {
    try{
            const newIndividualProfile=await IndividualProfileCompletion.create(req.body);
            res.send(newIndividualProfile);
        }catch(err){
            throw new Error(err);
        }
}
const addOrganizationProfile=async (req, res) => {
    try{
            const newOrganizationProfile=await OrganizationProfileCompletion.create(req.body);
            res.send(newOrganizationProfile);
        }catch(err){
            throw new Error(err);
        }
}


module.exports = {addScore,addEvent};