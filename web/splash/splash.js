import './splash.css';
import newExpensifyLogo from 'logo?raw';

const minMilisecondsToWait = 1.5 * 1000;
let passedMiliseconds = 0;
let rootMounted = false;
const splash = document.getElementById('splash');
const splashLogo = document.querySelector('.splash-logo');
const root = document.getElementById('root');

splashLogo.innerHTML = newExpensifyLogo;

const intervalId = setInterval(() => {
    passedMiliseconds += 250;
    rootMounted = root.children.length > 0;
    if (passedMiliseconds >= minMilisecondsToWait && rootMounted) {
        splash.parentNode.removeChild(splash);
        clearInterval(intervalId);
    }
}, 250);
