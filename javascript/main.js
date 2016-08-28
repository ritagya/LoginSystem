var account = [
{
	username: 'rita',
	password: 'password'
},
{
	username: 'ritagya',
	password: 'pass'
},
{
	username: 'sham',
	password: 'bhavi'
},
{
	username: 'chia',
	password: 'sukriti'
}
]

function getInfo(){
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

for(var i = 0; i < account.length; i++){
	if(username == account[i].username && password == account[i].password){
		document.write(username + ' is logged in!')
		return
	}
}
	document.write('Incorrect username or password or both')
}














