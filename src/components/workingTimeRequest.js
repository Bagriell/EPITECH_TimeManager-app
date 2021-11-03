const { default: axios } = require("axios")

// GETTERS - Retreive Working Times - Specific Working Time / ALL Working Times / User Specific Working Time

export async function getAllWorkingTimes()
{
    return (
        axios.get(
            "http://localhost:4000/api/workingtimes/"
        )
    );
}

// NOT WORKING CURRENTLY BECAUSE NO WORKING TIMES CAN BE CREATED YET
export async function getWorkingTime(workingTimeID)
{
    return (
        axios.get(
            "http://localhost:4000/api/workingtimes/" + workingTimeID
        )
    );
}

// NOT WORKING CURRENTLY BECAUSE NO WORKING TIMES CAN BE CREATED YET
export async function getAllWorkingTimesFromUser(userID)
{
    return (
        axios.get(
            "http://localhost:4000/api/workingtimes/user/" + userID
        )
    );
}

// SETTERS - Add new Working Times 

// !!TODO ONCE BACK END IMPLEMENTATION DONE!!