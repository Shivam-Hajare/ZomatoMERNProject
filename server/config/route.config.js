
import JwtPassport from "passport-jwt";

//Database Model
import { UserModel } from "../Database/allModels";

const JwtStrategy = JwtPassport.Strategy;
const ExtractJWT = JwtPassport.ExtractJwt;

//Authorization :"bearer someTokenString"
const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "QWERTYUIOPASDFGHJKLZXCVBNMQWERTYUIOPASDFGHJKLqdcsdvrgbdbdfvbrgvsdvdbdr"
}
export default (passport) => {
    passport.use(
        new JwtStrategy(options, async(jwt__payload, done) => {
            try {
                const doesUserExist = UserModel.findById(jwt__payload.user);
                if(!doesUserExist) return done(null, false);

                return done(null, doesUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    );
};