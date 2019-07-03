let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}

start();

let appData = {
    yourMoney: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: "",
    savings: true
};

function chooseExpenses(){
    for(let i = 0; i < 2; i++) {
        let question1 = prompt("Введите обязательную статью расходов в этом месяце","");
        let question2 = prompt("Во сколько обойдется?","");
    
        if(typeof(question1) === 'string' && 
            typeof(question1) != null && 
            typeof(question2) != null &&
            question1 != "" && question2 != "" && 
            question1.length < 50) {
    
            console.log("Done!");    
            appData.expenses[question1] = question2;
        } else {
            console.log("Error");
            i--;
        }
    }
}

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        let question1 = prompt("Статья необязательных расходов?","");
    
        if(typeof(question1) === 'string' && 
            typeof(question1) != null && 
            question1 != "" &&
            question1.length < 50) {
    
            console.log("Done!");    
            appData.optionalExpenses[i] = question1;
        } else {
            console.log("Error");
            i--;
        }
    }
}

chooseExpenses();
chooseOptExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.yourMoney / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    detectLevel();
}

function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Че-то не так...");
    }
}

function checkSavings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome)
    }
}

checkSavings();