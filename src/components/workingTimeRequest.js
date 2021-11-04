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

// POST - Add new Working time

export function addWorkingTime(userID, startDate, endDate)
{
    return (
        axios.post("http://localhost:4000/api/workingtimes/" + userID, {
            workingtimes: {
                start: startDate,
                end: endDate,
                user: userID,
            }
        })
    );
}

// PUT - Modify existing Working time
export function editWorkingTime(workingTimeID, userID, startDate, endDate)
{
    return (
        axios.put("http://localhost:4000/api/workingtimes/" + workingTimeID, {
            workingtimes: {
                start: startDate,
                end: endDate,
                user: userID,
            }
        })
    );
}

// DELETE - Remove existing Working time
export function deleteWorkingTime(workingTimeID)
{
    return (
        axios.delete("http://localhost:4000/api/workingtimes/" + workingTimeID)
    );
}

// ---> !!TOTEST ONCE BACK END IMPLEMENTATION DONE!!