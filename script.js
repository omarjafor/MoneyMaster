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
    console.log(income, totalExp, balance);
}