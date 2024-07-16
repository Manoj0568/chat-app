export function extractTime(dateString){
    const date = new Date(dateString)
    const hours = pasZero(date.getHours())
    const minutes = pasZero(date.getMinutes())
    return `${hours}: ${minutes}`
}

function pasZero(number){
    return number.toString().padStart(2,"0")
}