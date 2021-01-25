let leds = 0
let strip2 = 0
basic.showLeds(`
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    `)
let strip = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
basic.forever(function () {
    strip2 = randint(0, 64)
    leds = neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255))
    strip.show()
    strip.setPixelColor(strip2, leds)
    basic.pause(5)
})
