// const fs = require('fs');
// const data = fs.readFileSync('./data.json');
// const jdata = (JSON.parse(data));

function li() {
  const usr = document.getElementById('username').value;
  const psw = document.getElementById('password').value;

  fetch('')
    .then(response => response.json())
    .then(data => {
      const users = data.users;
      const n = users.length;

      for (let i = 0; i < n; i++) {
        let u = users[i].username;
        let p = users[i].password;

        if (usr == u && psw == p) {

      document.getElementById('content-container').classList.remove('hidden');
      document.getElementById('login').classList.add('hidden');

        }
      }
    }
  )
} 

    function lo() {
      document.getElementById('content-container').classList.add('hidden');
      document.getElementById('login').classList.remove('hidden');
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }


// function ac() {
//   const usr = document.getElementById('username').value;
//   const psw = document.getElementById('password').value;

//   fetch('data.json')
//     .then(response => response.json())
//     .then(data => {

//       data.users.push({ username: String(usr), password: String(psw) });

//       alert(data.users[3].username);

//     })

// }


// console.log(jdata);

// const ns = {
//   username: 'test',
//   password: 'test'
// }

// jdata.users.push(ns);


// let j = parseInt( jdata.users.length);

// let np = String (jdata.users[0].username);

// console.log(np);


// fs.writeFileSync('./data.json', JSON.stringify(jdata), 'utf-8', err =>{
//   if(err)
//   console.log('Done');
// });