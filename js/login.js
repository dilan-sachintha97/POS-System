const users = [{
    user: 'nimal',
    password: '123',
    avatar: 'https://img.freepik.com/premium-photo/funny-businessman-puppet-3d-character_691560-415.jpg?w=740'
},
    {
        user: 'kamal',
        password: '123',
        avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=740&t=st=1672117202~exp=1672117802~hmac=38bfd8a524b757cc75310c28a870318610121bab638764b9ae4f992235194fc5'
    }]

const login=()=> {
    let userName = $('#userName').val();
    let password = $('#password').val();

    if(userName.trim().length !==0 || password.trim().length !==0){

        //check username
        for(const tempUser of users){
            if(tempUser.user === userName){
                //check password
                if(tempUser.password === password){
                    //login  success -> store some information in browser memory
                    localStorage.setItem('user',JSON.stringify({name:tempUser.user, avatar:tempUser.avatar}))
                    // move to dashboard
                    window.location.href = 'pages/dashboard.html'
                    return;
                }else {
                    alert("Password is invalid !")
                    return
                }
            }
        }
        alert("Username is invalid !")

    }else {
        alert("username or password is required !")
    }
}
