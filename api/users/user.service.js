const { connect } = require('../../config/database');
const connection = require('../../config/database');

module.exports = {
    create : (data, callback) => {
        connection.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                    values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
            ],
            (err, results, fields) => {
                if (err) {
                    return callback(err);
                } else {
                    return callback(null, results);
                }
            }
        )
    } ,
    getUsers: callback => {
        connection.query(
            `select id,firstName,lastName,gender,email,number from registration`,
            [],
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                return callback(null, results);
            }
        );
    },
    getUserById : (id, callback) => {
        connection.query(
            `select id,firstName,lastName,gender,email,number from registration where id = ?`,
            [id],
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                return callback(null, results[0]);
            }
        );
    },
    updateUser: (data, callback) => {
        connection.query(
            `update registration set firstName=?,lastName=?,gender=?,email=?,password=?,number=? where id=?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                return callback(null, results);
            }
        )
    },
    deleteUser: (data, callback) => {
        connection.query(
            `delete from registration where id =?`,
            [
                data.id
            ],
            (err, results, fields) => {
                if (err) {
                    console.error(err);
                    return callback(err);
                }
                return callback(null, results[0]);
            }
        )
    }
}