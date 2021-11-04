const { default: axios } = require("axios")

// GET - Retreive Clocks - User Specific Clocks 

// NOT WORKING CURRENTLY BECAUSE NO WORKING TIMES CAN BE CREATED YET
export async function getClockFromUser(userID)
{
    return (
        axios.get(
            "http://localhost:4000/api/clocks/" + userID
        )
    );
}

// POST - Add a new Clock

// NOT WORKING CURRENTLY BECAUSE NO WORKING TIMES CAN BE CREATED YET
export function addClock(userID, dateTime, clockStatus)
{
    return (
        axios.post("http://localhost:4000/api/clocks/" + userID, {
            clocks: {
                time: dateTime,
                status: clockStatus,
                user: userID,
            }
        })
    );
}

// ---> !!TOTEST ONCE BACK END IMPLEMENTATION DONE!!