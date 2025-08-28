const validPin = 1234;
const transactionData = []

//functions to get inputNumber / input values
function getInputValueNumber (id){
   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt(inputFieldValue)
   return inputFieldValueNumber
}
function getInputValue (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// functions to get inner text
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}
// function to set inner text
function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}
//function to toggle
function handleToggle (id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn');
    
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.remove('text-[#0874f2]');
        btn.classList.add('border-gray-300');
        // child label reset
        const label = btn.querySelector('.label-text');
        if (label) {
            label.classList.remove('text-[#0874f2]','font-semibold');
            label.classList.add('text-gray-600');
        }
    }
    const activeBtn = document.getElementById(id);
    activeBtn.classList.remove('border-gray-300');
    activeBtn.classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
    // child label active
    const activeLabel = activeBtn.querySelector('.label-text');
    if (activeLabel) {
        activeLabel.classList.remove('text-gray-600');
        activeLabel.classList.add('text-[#0874f2]','font-semibold');
    }
}

//add money feature
document.getElementById('add-money-btn').addEventListener
("click", function(e){
    e.preventDefault()
    const bank = getInputValue('bank') 
    const accountNumber = getInputValue('account-number')  
    const amount = getInputValueNumber('add-amount') 

    if(amount<=0){
        alert('invalid amount')
        return;
    }
    const pin = getInputValueNumber('add-pin')  
    const availableBalance = getInnerText('available-balance')
    
    if(accountNumber.length < 11){
        alert('please provide valid account number')
        return;
    }
    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance
    setInnerText('available-balance', totalNewAvailableBalance);

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
})
 
const cashValidPin = 1234;
// cash out feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){
    e.preventDefault()
    const cashAccountNumber = getInputValue('cash-agent') 
    const amount = getInputValueNumber('withdraw-amount') 
    const availableBalance = getInnerText('available-balance') 

    if(amount<=0 || amount>availableBalance){
        alert('invalid amount')
        return;
    }
    const cashPin = getInputValueNumber('cash-pin')
    
    if(cashAccountNumber.length < 11){
        alert('please provide valid cash account number')
        return;
    }
    if(cashPin !== cashValidPin){
        alert('please provide valid cash pin number')
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount
    setInnerText('available-balance', totalNewAvailableBalance);

    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
    console.log(transactionData)
})

//transaction feature
document.getElementById('Transactions-button').addEventListener('click', function (){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        `
        transactionContainer.appendChild(div)
    }
})

// toggling feature

document.getElementById('add-button').addEventListener('click',function(){
    handleToggle('add-money-parent')
    handleButtonToggle('add-button')
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    handleToggle('cash-out-parent')
    handleButtonToggle('cash-out-button')
})

document.getElementById('transfer-button').addEventListener('click', function(){
    handleToggle('transfer-money-parent')
    handleButtonToggle('transfer-button')
})

document.getElementById('get-button').addEventListener('click',function(){
    handleToggle('get-bonus-parent')
    handleButtonToggle('get-button')
})

document.getElementById('pay-button').addEventListener('click', function(){
    handleToggle('pay-bill-parent')
    handleButtonToggle('pay-button')
})

document.getElementById('Transactions-button').addEventListener('click', function(){
    handleToggle('Transactions-parent')
    handleButtonToggle('Transactions-button')
})