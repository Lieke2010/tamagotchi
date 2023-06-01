input.onButtonPressed(Button.A, function () {
    Knuffel += 2.5
})
input.onButtonPressed(Button.B, function () {
    Voeding += 2.5
})
let Voeding = 0
let Dood = 0
let Knuffel = 10
Dood = 10
basic.forever(function () {
    if (Dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    Knuffel += -1
    Voeding += -1
    basic.pause(1000)
})
basic.forever(function () {
    if ((Knuffel && Voeding) > 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if ((Knuffel || Voeding) < 0) {
        Dood += 1
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((Knuffel || Voeding) < 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})
