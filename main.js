'use strict';
let highscore =0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) +1;
function defaultSetting()
{
    secretNumber = Math.trunc(Math.random() * 20) +1;
    score = 20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.playing-area__number').value = ' ';
    document.querySelector('.decoration').classList.add('hidden');
    console.log(secretNumber);

};
document.querySelector('.btn-again').addEventListener('click', 
function() {
    defaultSetting();
});


function notice(info)
{
    document.querySelector('.number-info').textContent = info;
}
document.querySelector('.btn-check').addEventListener('click', 
function()
{
    let number = Number(document.querySelector('.playing-area__number').value);
    if(!number)
    {
        notice('Please enter a number');
    }
    else
    {
    if(number === secretNumber)
    {
        notice('You win!!!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = String(secretNumber);
        document.querySelector('.decoration').classList.remove('hidden');
        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else{
        notice(number > secretNumber ? 'Too high!...' : 'Too low!...');
        score--;
        if(score < 0)
        {
            notice('You lose!...');
        }
        else{
            document.querySelector('.score').textContent = String(score);
        }
    }
    }
});
addEventListener('En')