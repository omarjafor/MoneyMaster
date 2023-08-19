function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}
function calculate(){
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');
    const totalExp = food + rent + clothes;
    const balance = income - totalExp;
    document.getElementById('totalExp').innerText = totalExp;
    document.getElementById('balance').innerText = balance;
}
function savingsBalance(){
    const income = getInputValue('income');
    const save = getInputValue('save');
    const savings = (save / 100)*income;
    document.getElementById('saving').innerText = savings;
    const balance = parseFloat(document.getElementById('balance').innerText);
    const remainingBalance = balance - savings;
    document.getElementById('remaining').innerText = remainingBalance;
}