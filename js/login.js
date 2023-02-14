const users = [{
    user: 'nimal',
    password: '123',
    avatar: 'https://img.freepik.com/premium-photo/funny-businessman-puppet-3d-character_691560-415.jpg?w=740'
},
    {
        user: 'kamal',
        password: '123',
        avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-glasses-half-shaved-head_23-2149436187.jpg?w=740&t=st=1673770909~exp=1673771509~hmac=83f732819b98ce188c15d8c27d6653ca6fbdce1c79cc5b9fa02d25e4ca2353d3'
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
