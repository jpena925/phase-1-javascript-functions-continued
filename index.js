// code your solution here
function saturdayFun(verb = "roller-skate"){
    return `This Saturday, I want to ${verb}!`;
};

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(flair = "*"){
    return function(word = "special"){
        return `You are ${flair}${word}${flair}!`;
    };
};