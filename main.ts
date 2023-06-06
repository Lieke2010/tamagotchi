input.onButtonPressed(Button.A, function () {
    Knuffel += 5
})
input.onButtonPressed(Button.B, function () {
    Voeding += 5
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
let Dood = 0
let Knuffel = 20
let Voeding = 20
basic.forever(function () {
    Knuffel += -1
    Voeding += -1
    basic.pause(1000)
})
basic.forever(function () {
    if (Knuffel > 10 && Voeding > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if ((Knuffel || Voeding) < 10 && (Knuffel && Voeding) > 0) {
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
