const setupCounter = (element) => {
  let counter = 0
  element.text(`Counter is : ${counter}`)
  element.click(() => {
    counter++
    element.text(`Counter is : ${counter}`)
  })
}

export {setupCounter}
