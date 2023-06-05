input.onButtonPressed(Button.A, function () {
    Knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    Voeding += 5
})
let Voeding = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let Dood = 0
let Knuffel = 20
Dood = 20
basic.forever(function () {
    Knuffel += -1
    Voeding += -1
    basic.pause(1000)
})
basic.forever(function () {
    if ((Knuffel && Voeding) > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if ((Knuffel || Voeding) < 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if ((Knuffel || Voeding) < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
