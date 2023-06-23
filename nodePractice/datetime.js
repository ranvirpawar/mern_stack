
 function getCurrentDateTime (){
    const currentDateTime = new Date();
    return currentDateTime.toISOString();
};
exports.getCurrentDateTime = getCurrentDateTime