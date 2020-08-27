const axios = require('axios');

// WIT starting point //
let Wit = null; 
let interactive = null;
try {
    Wit = require('../').Wit;
    interactive = require('node-wit').interactive;
} catch (e){
    Wit = require('node-wit').Wit;
    interactive = require('node-wit').interactive;
}

const accessToken = '2UWGAWXVDTRMHFLTXNEGZ5IHPO3HJJ3U'

const firstEntityValue = (entities, entity) => {
    const val = entities && entities[entity] &&
        Array.isArray(entities[entity]) &&
        entities[entity].length > 0 &&
        entities[entity][0].value
    ;
    if (!val){
        return null;
    }
    return typeof val === 'object' ? val.value : val;
};

const actions = {
    send(request, response){
        const {sessionId, context, entities} = request;
        const {text, quickreplies} = response;
        console.log(JSON.stringify(response.text));
    },

};

const client = new Wit({accessToken, actions});
interactive(client);
