const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DB
db.createUser ({
    user : `${user}`,
    pwd : `${password}`,
    roles : [{
        role : "readWrite", db : `${db}`
    }]
});

db.auth(`${user}`,`${password}`);