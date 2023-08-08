

exports.getApi = function (request, response, next) {
   response.redirect("https://place.dog/300/200");   
};

exports.deleteApi = function (request, response, next) {
    response.send("THIS IS A DELETE FROM API");
};
