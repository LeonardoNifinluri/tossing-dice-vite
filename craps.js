function roll(){
    //generate number for dice1 and dice2 in range [1,6]
    let d1 = Math.floor((Math.random() * 6) + 1)
    let d2 = Math.floor((Math.random() * 6) + 1)
    
    return [d1, d2, d1 + d2]
}

const setupCraps = (diceElements, buttons, histogram) => {
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

    buttons.forEach((button, index) => {
        button.click(() => {
            const result = roll()
            dice1.text(result[0])
            dice2.text(result[1])
            
            // setTimeout(() => {
            //     let message = (index + 2 == result[2]) ? 'You Win' : 'You Lose';
            //     message += `\nbet: ${index + 2}\noccurs: ${result[2]}`
            //     alert(message);
            // }, 10) // Small delay to allow text update

            //update the histogram
            histogram.data.datasets[0].data[result[2] - 2]++;
            histogram.update()
        })
    })

}

export {setupCraps}