loadUserDetails=()=>{
    //get user details form browser memory and set to dashboard
    let userDetails = JSON.parse(localStorage.getItem('user'))
    console.log( userDetails)

    $('.user-name').html(userDetails.name)   // set username to dashboard
    $('#avatar').attr('src',userDetails.avatar)  // set avatar to dashboard
}

// to load customer, item, placeOrder, ......
setUi=(address)=>{
    $('.context').load(address);
}