loadUserDetails=()=>{

    //get user details form browser memory
    let userDetails = JSON.parse(localStorage.getItem('user'))
    // console.log( userDetails)

    $('.user-name').html(userDetails.name)   // set username to dashboard
    $('#avatar').attr('src',userDetails.avatar)  // set avatar to dashboard
}

setUi=(address)=>{
    $('.context').load(address);
}