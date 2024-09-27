function roll(dice1, dice2, bet){
    //generate number for dice1 and dice2 in range [1,6]
    let d1 = Math.floor((Math.random() * 6) + 1)
    let d2 = Math.floor((Math.random() * 6) + 1)
    dice1.text(d1)
    dice2.text(d2)
    setTimeout(() => {
        let message = (bet == d1 + d2) ? 'You Win' : 'You Lose';
        alert(message);
    }, 10); // Small delay to allow text update
}

const setupCraps = (diceElements, buttons) => {
    //diceElement and buttons array of elements

    //for diceElement:
    let dice1 = diceElements[0]
    let dice2 = diceElements[1]

    /* 
    for buttons: 
    0 -> btn2
    1 -> btn3
    ...
    10 -> btn12
    */
    buttons[0].click(() => {
        roll(dice1, dice2, 2)
    })

    buttons[1].click(() => {
        roll(dice1, dice2, 3)
    })

    buttons[2].click(() => {
        roll(dice1, dice2, 4)
    })

    buttons[3].click(() => {
        roll(dice1, dice2, 5)
    })

    buttons[4].click(() => {
        roll(dice1, dice2, 6)
    })

    buttons[5].click(() => {
        roll(dice1, dice2, 7)
    })

    buttons[6].click(() => {
        roll(dice1, dice2, 8)
    })

    buttons[7].click(() => {
        roll(dice1, dice2, 9)
    })

    buttons[8].click(() => {
        roll(dice1, dice2, 10)
    })

    buttons[9].click(() => {
        roll(dice1, dice2, 11)
    })

    buttons[10].click(() => {
        roll(dice1, dice2, 12)
    })
}

export {setupCraps}