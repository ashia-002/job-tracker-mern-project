const validateJob = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (e) {
        // Check if the error is a ZodError
        if (e.errors && Array.isArray(e.errors)) {
            const errors = e.errors.map((err) => err.message);
            return res.status(400).json({ errors });
        }

        // For any other errors
        return res.status(500).json({ error: "An unexpected error occurred." });
    }
};

module.exports = validateJob;
