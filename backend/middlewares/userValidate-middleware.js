//to check wheather the form filled by the user satisfies the userschema.


const validate = (schema) => async (req, res, next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();

    } catch (e) {
        const errors = e.errors.map((err) => err.message);
        res.status(400).json({ errors });
    }
};

module.exports = validate;