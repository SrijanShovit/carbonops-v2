const mongoose = require('mongoose');

const ScoreSchmea=mongoose.Schema(
    {
        scoreId:{
            required: true,
            type: String
        },
        individualId:{
            required: true,
            type: String
        }
    }
)
const ScoresModel=mongoose.model('score',ScoreSchmea);

module.exports=ScoresModel;