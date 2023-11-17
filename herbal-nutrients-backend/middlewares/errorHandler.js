//If Not found
const notFound = (req, res, next) => {
    const error = newError(`Not Found : ${req.originalURL}`)
    res.status(404);
    next(error);
}

//Error Handler: this is the handler that will be used when there is an error thrown

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err?.message,
        stack: err?.stack
    });
};

module.exports={notFound, errorHandler};