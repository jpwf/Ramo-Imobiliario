import jwt from 'jsonwebtoken';
import ms from 'ms';

const createToken = (user) => {
    return jwt.sign({id: user.id}, process.env.secret, {
        expiresIn: ms('8h'),
    });
};

export default createToken
