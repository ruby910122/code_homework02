basic.forever(function () {
    for (let I = 0; I <= 8; I++) {
        for (let J = 0; J <= 4; J++) {
            led.plot(4 - J, 4 - (I - J))
            basic.pause(100)
        }
    }
    basic.clearScreen()
    for (let I = 0; I <= 8; I++) {
        for (let J = 0; J <= 4; J++) {
            led.plot(J, I - J)
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
