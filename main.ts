input.onButtonPressed(Button.A, function () {
    skritt = 0
    basic.showNumber(skritt)
})
input.onGesture(Gesture.Shake, function () {
    gå_et_skrit += 1
})
let gå_et_skrit = 0
let skritt = 0
skritt = 0
basic.forever(function () {
    basic.showNumber(skritt)
})
