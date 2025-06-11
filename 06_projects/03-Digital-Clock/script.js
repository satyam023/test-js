const div = document.querySelector('#clock')
// const calculate_time = new Date()
// console.log(calculate_time.toLocaleTimeString())


setInterval(function(){
    let calculate_time = new Date().toLocaleTimeString()
    div.innerText = calculate_time;
    // console.log(calculate_time)
} , 1000)



// method which control function and interval to execute js file again and again 

/*
| Method                     | Best For             | Syntax Example                              |
| -------------------------- | -------------------- | ------------------------------------------- |
| `setInterval(fn, delay)`   | Auto-repeating tasks | `setInterval(() => {...}, 1000)`            |
| `setTimeout()` + recursion | Controlled repeat    | `setTimeout(repeatFn, delay)`               |
| `requestAnimationFrame()`  | Smooth animations    | `requestAnimationFrame(fn)`                 |
| `async/await + setTimeout` | Delay in loops       | `await new Promise(r => setTimeout(r, ms))` |





A cron job is a scheduled task that runs automatically at specific intervals — like every minute, every day at 10AM, every Monday, etc.

🛠️ It's not part of JavaScript — it's a server-side feature, usually used in Linux environments or cloud platforms like AWS, Heroku, or Railway.

*/