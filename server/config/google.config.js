import googleOauth from "passport-google-oauth20";

import {UserModel} from "../datbase/allModels";

const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:  "http://localhost:5000/auth/google/callback"
        },
        
        async(accessToken, refreshToken, profile, done)  => {
            const newUser = {
                fullname: profile.displayName,
                email:    profile.emails[0].value,
                profilePic: profile.photos[0].value

            };

           try {
               const user = await UserModel.findOne({eamil: newUser.email}) 
               const token = user.generateJwtToken();
               if(user) {
                   done(null, {user, token});
               } else {
                   constuser = await UserModel.create(newUser);
               }
               
           } catch (error) {
               done(error, null);
           }
        
        }

        )
    )
}


