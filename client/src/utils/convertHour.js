const convertHour = (hour) => {
    let newHour = null;

    // if (hour.substr(0,1) === 0 )
    // {
    //     console.log("Killing time")
    //     newHour = hour.substr(1,1) + ":" + hour.substr(2);
    // }else
    // newHour = hour.substr(0, 2) + ":" + hour.substr(2);


    //getting weird bug that there are two colons when you first click on a booked lesson
    //this line is fixing that error
    newHour = hour.replace(/(.{2})$/, ':$1')
    return newHour;
}

module.exports = convertHour;