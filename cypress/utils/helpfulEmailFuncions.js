class helpfulEmailFuncions {

    createRandomEmailAddress() {
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    var string = '';
    for(var i=0; i<15; i++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    return(string + '@gmail.com');
}

}
export default helpfulEmailFuncions;