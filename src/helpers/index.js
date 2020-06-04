export const convertTimeString = (time) =>{
    let timeString = null;
    timeString = ((time.getMonth() > 8) ? (time.getMonth() + 1) : ('0' + (time.getMonth() + 1))) + '/' + ((time.getDate() > 9) ? time.getDate() : ('0' + time.getDate())) + '/' + time.getFullYear()
    return timeString
}
