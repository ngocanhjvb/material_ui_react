export const convertTimeString = (time) =>{
    let timeString = null;
    timeString = time
        .toISOString()
        .split("T")[0];

    return timeString
}
