const fs = require('fs');
const path = require('path');

const dbFilePath =path.join(process.cwd(), 'data', 'users.json');


function readDatabase() {
    try {
        const data = fs.readFileSync(dbFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('readDatabase error:', error);
        return [];
        
    }
}

function writeDatabase(data) {
fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf-8');
}

function createUser(user) {
    const users = readDatabase();
    users.push(user);
    writeDatabase(users);
    return user;
}

    module.exports = {
        createUser,
    };
