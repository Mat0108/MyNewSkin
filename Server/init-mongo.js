db.createUser ({
    user : "po",
    pwd : "popass",
    roles : [{
        role : "readWrite", db : "podb"
    }]
});

db.auth('po', 'popass');