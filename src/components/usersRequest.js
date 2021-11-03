const { default: axios } = require("axios")

export async function createUser(username, email) {
    return (axios.post("http://localhost:4000/api/users", {
        users: {
            username: username,
            email: email,
        },
    }))
}

export async function updateUser(username, email, userID) {
    return (axios.put("http://localhost:4000/api/users/" + userID, {
        users: {
            username: username,
            email: email,
        },
    }));
}

export async function getUserByID(userID) {
    return(axios.get("http://localhost:4000/api/users/" + userID));
}

export async function getUserByUsernameAndEmail(username, email) {
    return(axios.get("http://localhost:4000/api/users?username=" + username + "&email=" + email));
}

export async function getAllUsers() {
    return(axios.get("http://localhost:4000/api/users/"));
}

export async function deleteUser(userID) {
    return (axios.delete("http://localhost:4000/api/users/" + userID))
}