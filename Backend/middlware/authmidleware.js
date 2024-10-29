import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        // Retrieve the JWT token from the cookies
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }

        // Verify the token
        const data = jwt.verify(token, process.env.SECRET);
        req.user = data; 
        next();
    } catch (error) {
        // Check if error is from token verification failure
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        // Handle other unexpected errors
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
