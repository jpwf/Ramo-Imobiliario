import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
    if (!req.headers.authorization)
        return res.status(401).json({ error: 'No token provided' });

    try {
        const parts = validateBearer(req.headers.authorization);
        const decoded = tokenDecode(parts);
        return userAuth(decoded);
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    function validateBearer(token) {
        const parts = token.match(/^Bearer (.*)$/);
        if (!parts)
            throw new Error('Token malformatted');
        return parts;
    }

    function tokenDecode(parts) {
        const [_, token] = parts;
        return jwt.verify(token, process.env.secret);
    }

    function userAuth(decoded) {
        req.userInfo = { id: decoded.id };
        return next();
    }
}