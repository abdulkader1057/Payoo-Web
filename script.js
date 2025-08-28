// login button functionality
// e / e.preventDefault()

document.getElementById('login-btn').addEventListener('click', function(){
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value 
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const PinNumberValue = document.getElementById('pin-number').value 
    const pinNumberValueConverted = parseInt(PinNumberValue)

    console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if( mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }else if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted !== pinNumber){
        alert('worng password')
    }
    else{
        alert('Invalid')
    }
})