module.exports = (err,req,res,next)=>{
    let error = Object.create(err)
    console.log(err.errors)
    if(err.errors?.title.kind === 'required'){
        error.message = err.errors.title.path + " is required"
    }
    else if(err.errors?.title.kind === 'maxlength'){
         error.message = err.errors.title.path + " is longer than " + err.errors.title.properties.maxlength + " characters"
    }




    error.statusCode = error.statusCode || 500
    error.status = error.status || "Fail"
    res.status(error.statusCode).json({
        status:error.status,
        message:error.message,
        stack:err.stack
    })
}

