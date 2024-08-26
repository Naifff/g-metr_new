input.onButtonPressed(Button.A, function () {
    basic.showNumber(g)
})
let n = 0
let g = 0
g = 0
basic.forever(function () {
    basic.pause(100)
    n = input.acceleration(Dimension.Strength)
    basic.pause(100)
    g = Math.max(Math.abs(n - input.acceleration(Dimension.Strength)), g)
})
