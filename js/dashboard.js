loadUserDetails=()=>{

    try {
        //get user details form browser memory and set to dashboard
        let userDetails = JSON.parse(localStorage.getItem('user'))
        // console.log( userDetails)
        $('.user-name').html(userDetails.name)   // set username to dashboard
        $('#avatar').attr('src',userDetails.avatar)  // set avatar to dashboard
        //dashbord akatath => customer.html page akama set krnna
        setUi('customer.html');
    }catch (e){
        alert("Something Wrong !")
        window.location.replace('../index.html');
        console.log(e);
    }

}

// to load customer, item, placeOrder, ......
setUi=(address)=>{
    if(address === 'customer.html'){
        initializeCustomers();
    }
    $('.context').load(address);
}