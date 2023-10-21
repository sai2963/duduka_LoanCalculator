document.getElementById('formd').addEventListener('submit',function(e){
    e.preventDefault();

    let LAmountEL=document.getElementById('LAmount').value;
    let InterestEL=document.getElementById('Interest').value;
    let LoanTermEL=document.getElementById('LoanTerm').value;
    let Button1=document.getElementById('btn1');
    let result=document.getElementById('data');

    let Interestrate=(LAmountEL*InterestEL)/100;
    let permonthLA=LAmountEL/LoanTermEL;
    let permonth=permonthLA+Interestrate;
    let resultmsg='Per Month :'+permonth.toFixed(2) +'<br>' 
    resultmsg+='Total Intrest: '+InterestEL*LoanTermEL
    result.innerHTML=resultmsg;
    
    
})