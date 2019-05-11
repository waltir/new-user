
var request = require('request');
var qs = require('qs')

getUser = (callback) => {
    request(`https://randomuser.me/api/`, function (error, response, body) {
        let data = JSON.parse(body)
        return callback(data.results)
    });
}

getUsers = (params, callback) => {
    let prs = qs.parse(params);
    let users = {
        results: (prs.results !== undefined)? `&results=${prs.results}` : '',
        gender: (prs.gender !== undefined)? `&gender=${prs.gender}` : '',
        password: (prs.pass !== undefined)? `&password=${prs.pass}` : '',
        nat:(prs.nat !== undefined)? `&nat=${prs.nat}` : '',
      };
    let param = `${users.results}${users.gender}${users.password}${users.nat}`.replace('&', '?')
    console.log(`https://randomuser.me/api/${param}`)
    request(`https://randomuser.me/api/${param}`, function (error, response, body) {
        let data = JSON.parse(body)
        return callback(data.results)
    });
}
module.exports = {getUser, getUsers}