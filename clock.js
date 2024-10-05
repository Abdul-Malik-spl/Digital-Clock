function update()
{let date=new Date()
let inpdate=date.getDate()
let inphour=date.getHours()
let inpmin=date.getMinutes()
let inpsec=date.getSeconds()
let inpday=date.getDay()
let showDate=document.getElementById('date')
let showMonth=document.getElementById('month')
let showYear=document.getElementById('year')
let showHour=document.getElementById('hour')
let showMinute=document.getElementById('minute')
let showSecond=document.getElementById('second')
let showDay=document.getElementById('day')

let allmonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Agu","SEP","Oct","Nov","Dec"]
let mnt=date.getMonth()
let month=allmonth[mnt].toUpperCase()
let year=date.getFullYear()
let allday=["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THIRSDAY","FRIDAY","SATURDAY"]
let realday=allday[inpday]


showDate.innerHTML=inpdate
showMonth.innerHTML=month
showYear.innerHTML=year
showHour.innerHTML=inphour
showMinute.innerHTML=inpmin
showSecond.innerHTML=inpsec
showDay.innerHTML=realday
}
setInterval(update,1000)


