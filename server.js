const express = require('express');
const app = express();
const socket = require('socket.io');
const path = require('path');
var Found = false





//function for removing all left users

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }
  










//static files
app.use(express.static(path.join(__dirname, 'static')));

//views

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});


var order = [];

//server starting
const server = app.listen(9000)

var time = 30;

var online = 0;


//users connected

var userlist = {}
console.log(Object.keys(userlist).length)
//socket work here
const io = socket(server);
io.on("connection", (socket)=>{

    //here comes the settings for name and other shit
    socket.on('sendname', (data)=>{
        console.log(data);
        console.log("till here 2");

        if(Object.keys(userlist).length === 0){
            userlist[data] = socket.id;
            order.push(data);
            console.log('no user');
            online = online + 1;
            console.log(online +"from here");
            
        } else{
            //for(var key in userlist){
                console.log("till here");
                if(userlist[data] === undefined){
                    //doesnot exist
                    userlist[data] = socket.id;
                    order.push(data)
                    online = online + 1;
                    console.log(online);
                    if(online > 1){
                        io.sockets.emit('numofsoc', online);
                        io.sockets.emit('reset', 30);
                        io.sockets.emit('allusers', userlist);
                    }
                } else {
                    var NewName  = data + Math.floor(Math.random()*10000000000).toString();
                    userlist[NewName] = socket.id;
                    order.push(NewName)
                    online = online + 1;
                    console.log(online);
                    if(online > 1){
                        io.sockets.emit('numofsoc', online);
                        io.sockets.emit('reset', 30);
                        io.sockets.emit('allusers', userlist);
                    }
                }
                    
             //   } else{
                    
                    
             //   }
            //}
        }
    });


    //turn shit

    io.sockets.emit('allusers', userlist);


    var turn = Math.floor((Math.random() * online) + 1);


    socket.on('tiktok', (data)=>{
        io.sockets.emit('startp', {list:order, turn:0});
    });

    socket.on('turnover', (data)=>{
        console.log(data['turn'] + "from turn over:" + data['list']);
        if(data['turn'] === data['list'].length){
            io.sockets.emit('startp', {list:data['list'], turn:0})
        } else{
            io.sockets.emit('startp', {list:data['list'], turn:data['turn']})
        }

    })


    socket.on("winner", (data)=>{
        io.sockets.emit('announce', data)
    });


    console.log(turn);
    //online = online + 1;
    var timedown = 30;
    io.sockets.emit('numofsoc', online)
    io.sockets.emit('reset', 30)
    console.log(online);
    console.log("new connection established");
    socket.emit('esta', "established");
    socket.on('done', (data)=>{
        io.sockets.emit('cut', data);
    });
    socket.on('name', (data)=>{
        console.log(data);
    });
    socket.on('name', (data)=>{
        console.log(data);
    });
    if(online > 1){
        console.log('start');
    }





    socket.on('disconnect', ()=>{
        console.log("one user went offline or disconnected");
        if (online > 0){
            online = online - 1;
        }

        console.log(online);
        console.log(socket.id);
        for(var key in userlist){
            if(userlist[key] === socket.id){
                var indexo = order.indexOf(key)
                console.log("found the user");
                delete userlist[key]
                //removing from order
                order = removeItemAll(order, key);
                console.log(order+"after removing"+indexo);
            }
        }
    });
});




