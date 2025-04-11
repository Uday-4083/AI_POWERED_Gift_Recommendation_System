const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
  try {
    let token

    // Check if auth header exists and has Bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      try {
        // Get token from header
        token = req.headers.authorization.split(" ")[1]

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        // Get user from the token (excluding password)
        const user = await User.findById(decoded.id).select("-password")

        if (!user) {
          return res.status(401).json({ message: "User not found" })
        }

        // Add user to request object
        req.user = user
        next()
      } catch (error) {
        console.error("Token verification error:", error)
        if (error.name === "JsonWebTokenError") {
          return res.status(401).json({ message: "Invalid token" })
        }
        if (error.name === "TokenExpiredError") {
          return res.status(401).json({ message: "Token expired" })
        }
        return res.status(401).json({ message: "Not authorized, token failed" })
      }
    } else {
      return res.status(401).json({ message: "Not authorized, no token" })
    }
  } catch (error) {
    console.error("Auth middleware error:", error)
    return res.status(500).json({ message: "Server error" })
  }
}

module.exports = { protect }
