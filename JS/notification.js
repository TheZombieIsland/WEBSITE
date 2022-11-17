$(document).ready(function(){
 
    function ask_permission(){
        if(!("Notification" in window)){
            alert("Your current browser does not support desktop notification!");
            console.error("Your current browser does not support desktop notification!");
        }else{
            console.log(Notification.permission)
                if(Notification.permission !== 'granted' && Notification.permission !== 'denied'){
                    Notification.requestPermission().then((permission)=>{
                        if(permission === 'granted'){
                            alert("Notification Permission is Granted")
                        }else if(permission === 'denied'){
                            alert("Notification Permission is Denied")
                        }
                        location.reload()
                    })
                }
        }
    }
    ask_permission()
    $('#notif1').click(function(){
        if(Notification.permission === 'default'){
            ask_permission()
        }else if(Notification.permission === 'granted'){
            var notification = new Notification("Sample Notification #1",{
                body:"This is a sample notification content or description 101.",
                icon:'http://localhost/js_notification/test-icon.png'
            })
            notification.onclick = (event)=>{
                    event.preventDefault()
                    window.open("https://sourcecodester.com")
            }
        }else{
            alert("Notification Permission is not granted.")
        }
    })
 
    $('#notif2').click(function(){
        if(Notification.permission === 'default'){
            ask_permission()
        }else if(Notification.permission === 'granted'){
            var notification = new Notification("JavaScript Tutorials",{
                body:"Here are some tutorials of using JavaScript for IT/CS Students or beginners.",
                icon:'http://localhost/js_notification/test-icon.png'
            })
            notification.onclick = (event)=>{
                    event.preventDefault()
                    window.open("https://www.sourcecodester.com/tutorial/javascript")
            }
        }else{
            alert("Notification Permission is not granted.")
        }
    })
    $('#notif3').click(function(){
        if(Notification.permission === 'default'){
            ask_permission()
        }else if(Notification.permission === 'granted'){
            var notification = new Notification("JavaScript Tutorials",{
                body:"This mini-project is entitled Basketball Scoreboard Application. It is a web application that simulates the scoreboard of a basketball game. It has a simple and dark user interface, easy-to-read fonts, and uses Bootstrap Framework.",
                icon:'http://localhost/js_notification/test-icon.png',
                image:'https://www.sourcecodester.com/sites/default/files/styles/large/public/images/oretnom23/JS-scoreboard-basketball.jpg'
            })
            notification.onclick = (event)=>{
                    event.preventDefault()
                    window.open("https://www.sourcecodester.com/javascript/15730/basketball-scoreboard-application-using-javascript-and-jquery-free-source-code")
            }
        }else{
            alert("Notification Permission is not granted.")
        }
    })
})