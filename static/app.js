var socket = io.connect();
var counter = 1
var turn = null;
var th1 = document.querySelectorAll("th")
var totalOnline = 0;
var time = 30
var sockid = null
var submit = document.getElementById("submit")
var name = null
var winner = null;
var randomarray = null;
var randomvar = null;



//checking if all are marked in up to down
var uptodown = document.getElementsByTagName("tr");
var firstrow = uptodown[0].getElementsByTagName("th");
var secondrow = uptodown[1].getElementsByTagName("th");
var thirdrow = uptodown[2].getElementsByTagName("th");
var fourthrow = uptodown[3].getElementsByTagName("th");
var fifthrow = uptodown[4].getElementsByTagName("th");
var firstman = setInterval(()=>{
    var filled = true
    for (var i=0;i<firstrow.length-1; i++){
        if(!firstrow[i].innerHTML.endsWith("</div>")){
            filled = false
        }
    }
    if(filled){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(firstman);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(firstman);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(firstman);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(firstman);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(firstman);
        }
    }
}, 1000);

//second row
var secondRasfd = setInterval(()=>{
    var filled = true
    for (var i=0;i<secondrow.length-1; i++){
        if(!secondrow[i].innerHTML.endsWith("</div>")){
            filled = false
        }
    }
    if(filled){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(secondRasfd);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(secondRasfd);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(secondRasfd);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(secondRasfd);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(secondRasfd);
        }
    }
}, 1000);
//thirdrow
var thirdman = setInterval(()=>{
    var filled = true
    for (var i=0;i<thirdrow.length-1; i++){
        if(!thirdrow[i].innerHTML.endsWith("</div>")){
            filled = false
        }
    }
    if(filled){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(thirdman);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(thirdman);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(thirdman);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(thirdman);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(thirdman);
        }
    }
}, 1000);
//fourthrow
var fourthman = setInterval(()=>{
    var filled = true
    for (var i=0;i<fourthrow.length-1; i++){
        if(!fourthrow[i].innerHTML.endsWith("</div>")){
            filled = false
        }
    }
    if(filled){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(fourthman);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(fourthman);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(fourthman);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(fourthman);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(fourthman);
        }
    }
}, 1000);
//fifthrow
var fifthman = setInterval(()=>{
    var filled = true
    for (var i=0;i<fifthrow.length-1; i++){
        if(!fifthrow[i].innerHTML.endsWith("</div>")){
            filled = false
        }
    }
    if(filled){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(fifthman);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(fifthman);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(fifthman);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(fifthman);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(fifthman);
        }
    }
}, 1000);

var leftright = document.getElementsByTagName("th");

var lrone = setInterval(()=>{
    var coloum = [0, 6, 12, 18, 24]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(lrone);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(lrone);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(lrone);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(lrone);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(lrone);
        }
    }
}, 1000);
var lrtwo = setInterval(()=>{
    var coloum = [1, 7, 13, 19, 25]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(lrtwo);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(lrtwo);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(lrtwo);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(lrtwo);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(lrtwo);
        }
    }
}, 1000);
var lrthree = setInterval(()=>{
    var coloum = [2, 8, 14, 20, 26]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(lrthree);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(lrthree);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(lrthree);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(lrthree);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(lrthree);
        }
    }
}, 1000);
var lrfour = setInterval(()=>{
    var coloum = [3, 9, 15, 21, 27]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(lrfour);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(lrfour);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(lrfour);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(lrfour);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(lrfour);
        }
    }
}, 1000);
var lrfive = setInterval(()=>{
    var coloum = [4, 10, 16, 22, 28]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(lrfive);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(lrfive);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(lrfive);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(lrfive);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(lrfive);
        }
    }
}, 1000);


//side ways
var sideway1 = setInterval(()=>{
    var coloum = [0, 7, 14, 21, 28]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(sideway1);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(sideway1);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(sideway1);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(sideway1);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(sideway1);
        }
    }
}, 1000);
var sideway2 = setInterval(()=>{
    var coloum = [4, 9, 14, 19, 24]
    var markb = true
    for(var i=0;i<5;i++){
        //console.log(coloum[i]);
        //console.log(coloum[i]+ leftright[coloum[i]]);
        var endsornot = !leftright[coloum[i]].innerHTML.endsWith("</div>")
        //console.log(endsornot);
        if(endsornot){
            markb = false
        }
    
    }
    if(markb){
        if(!document.getElementById("b").innerHTML.endsWith("</div>")){
            document.getElementById("b").innerHTML = '<div class="numberCircle">'+document.getElementById("b").textContent+'</div>'
            clearInterval(sideway2);
        }
        else if(!document.getElementById("i").innerHTML.endsWith("</div>")){
            document.getElementById("i").innerHTML = '<div class="numberCircle">'+document.getElementById("i").textContent+'</div>'
            clearInterval(sideway2);
        }
        else if(!document.getElementById("n").innerHTML.endsWith("</div>")){
            document.getElementById("n").innerHTML = '<div class="numberCircle">'+document.getElementById("n").textContent+'</div>'
            clearInterval(sideway2);
        }
        else if(!document.getElementById("g").innerHTML.endsWith("</div>")){
            document.getElementById("g").innerHTML = '<div class="numberCircle">'+document.getElementById("g").textContent+'</div>'
            clearInterval(sideway2);
        }
        else if(!document.getElementById("o").innerHTML.endsWith("</div>")){
            document.getElementById("o").innerHTML = '<div class="numberCircle">'+document.getElementById("o").textContent+'</div>'
            clearInterval(sideway2);
        }
    }
}, 1000);

setInterval(()=>{
    var bingoarr = ["b", "i", "n", "g", "o"];
    var cutthatb = true
    for(var i=0;i<5;i++){
        var bofbin = document.getElementById(bingoarr[i]);
        if(!bofbin.innerHTML.endsWith("</div>")){
            cutthatb = false;
        }
    }
    if(cutthatb){
        socket.emit("winner", name);
        console.log("you win");
    }
}, 1000);




submit.addEventListener("click", ()=>{
    submit.disabled = true
    name = document.getElementById("name").value
    console.log(name);
    socket.emit('sendname', name);
    document.getElementById("name").disabled = true
});

socket.on('connect', ()=>{
    console.log(socket.id);
    sockid = socket.id
});



socket.emit('sendid', sockid);

//listing users


socket.on('allusers', (data)=>{
    var empty_list_open = "<li>"
    var empty_list_close = "</li>"
    document.getElementById("userlist").innerHTML = "";
    console.log(data);
    for(var key in data){
        //document.getElementById("userlist").innerHTML = empty_list_open + "<>"++"<>" + empty_list_close
        document.getElementById("userlist").innerHTML = document.getElementById("userlist").innerHTML+"<li>"+ key +"</li>"
    }
});


//turn shit

socket.on('startp', (data)=>{
    console.log(data['turn']+"from startp client side");
    var o = data['list'];
    turn = o[data['turn']];
    randomarray = data['list']
    randomvar = data['turn'];
});

//turn settings
setInterval(()=>{
    document.getElementById("turn").textContent = turn
}, 1000);


socket.on('esta', (data)=>{
    console.log(data);
    socket.emit('done', 'done from client side');
});
socket.on('numofsoc', (data)=>{
    console.log(data);
    totalOnline = data;
});
socket.on('reset', (data)=>{
    time = data
});
var boxt = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
const timer = document.getElementById("timer");

socket.on('timedown', (data)=>{
    
    time = data
});

socket.on("announce", (data)=>{
    winner = data
    if(data === name){
        document.getElementById("result").textContent = "You Won"
    }
    if(data!= name){
        document.getElementById("result").textContent = data + " Won"
    }
});


var turn = null;
var myInterval = setInterval(()=>{
        if(time > 0){
            if(totalOnline > 1){
            time = time - 1;
            timer.textContent = time
            console.log(time);
            }
        }
        if (time === 0){
            socket.emit('tiktok', 'timeup')
            //console.log(counter);
            
            //filling random numbers
            //th1.forEach((btn)=>{
             //   if (btn.textContent === ""){
                //    btn.textContent = counter
              //      counter = counter + 1;
               // }

            var randomN = Math.floor((Math.random()*2)+1);
            if (randomN === 1){
                console.log("upar se niche jo abhi hai");
                th1.forEach((btn)=>{
                    if(btn.textContent === ""){
                        btn.textContent = counter;
                        counter = counter + 1;
                    }
                });
            } else{
                var RCounter = 25;
                console.log("reverse");
                th1.forEach((btn)=>{
                    if (btn.textContent === ""){
                        btn.textContent = RCounter;
                        RCounter = RCounter - 1;
                    }
                });
            }

            console.log(randomN);



//            });

            clearInterval(myInterval);
        }
}, 1000);
socket.on('cut', (data)=>{
    th1.forEach((btn)=>{
        if(btn.textContent === data){
            var tomark = btn.textContent
            btn.innerHTML = '<div class="numberCircle">'+tomark+'</div>'
        }
    });
});
console.log("connected to html");

if(time === 0){
    console.log("time up");
}
th1.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        if(counter < 26 && time != 0){
            if (btn.textContent === ""){
                btn.textContent = counter;
                counter = counter + 1;
            } else {
            
            }
        }else{
            if ((btn.textContent != "" && time === 0) && (turn === name && winner === null )){
                if(btn.textContent === "B"){

                } else if(btn.textContent === "I"){

                }else if(btn.textContent === "N"){

                }else if(btn.textContent === "G"){

                }else if(btn.textContent === "O"){

                }else{
                    var unmarked = btn.textContent
                    socket.emit('done', unmarked)
                    btn.innerHTML = '<div class="numberCircle">'+unmarked+'</div>'
                    socket.emit('turnover', {list:randomarray, turn:randomvar + 1});
                }
            } 
        }

    });
});





//function to append list
function myFunction() {
    var x = document.createElement("OL");
    x.setAttribute("id", "myOl");
    document.body.appendChild(x);
  
    var y = document.createElement("LI");
    var t = document.createTextNode("Coffee");
    y.appendChild(t);
    document.getElementById("myOl").appendChild(y);
  }