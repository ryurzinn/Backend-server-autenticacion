const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '985724716953-fms457m8gr46fhsj98vq8ep0q92qmmau.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
             CLIENT_ID,
             '985724716953-qr0an0job8pa55rntb89954uaagock2v.apps.googleusercontent.com',
             '985724716953-r51rd3hjv8a2661g7gcqcmc6sfhe6ke1.apps.googleusercontent.com'
            ],  
        });
        const payload = ticket.getPayload();
    
        return{
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
        }
    
    } catch (error) {
        return null;
    }

   
}

module.exports ={
    validarGoogleIdToken
}

