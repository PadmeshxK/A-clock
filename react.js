const hourel = document.querySelector('.hour_arrow')
const minutesel = document.querySelector('.minute_arrow')
const secondsel = document.querySelector('.second_arrow')

seconds_counter = 0
minutes_counter = 0
hours_counter = 0
function update_clock(){
    let hour_time = new Date().getHours()
    let minute_time = new Date().getMinutes()
    let second_time = new Date().getSeconds()
    if (hour_time>12){
        hour_time = hour_time - 12
    }
    if (second_time == 0){
        seconds_counter += 60
    }
    if (minute_time == 0){
        minutes_counter += 60
    }
    if (hour_time == 0){
        hours_counter += 60
    }
    second_time += seconds_counter
    minute_time += minutes_counter
    hour_time += hours_counter
    const rotation_deg_hour = (hour_time/12)*360
    const rotation_deg_minute = (minute_time/60)*360
    const rotation_deg_second = (second_time/60)*360
    hourel.style.transform = `rotate(${rotation_deg_hour}deg)`
    minutesel.style.transform = `rotate(${rotation_deg_minute}deg)`
    secondsel.style.transform = `rotate(${rotation_deg_second}deg)`
}

setInterval(update_clock,1000)