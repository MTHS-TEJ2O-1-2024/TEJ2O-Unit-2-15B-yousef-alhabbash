/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yousef
 * Created on: Oct 2024
 * This program moves a light across the screen perimeter
*/

// variables
let sprite: game.LedSprite = null
let counter = 0
let spritemove = 0

// happy
basic.showIcon(IconNames.Happy)

// on button A edge moving
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    counter = 0
    sprite = game.createSprite(0, 0)
    basic.pause(100)

// setting up the movement
    while (counter < 4) {
        spritemove = 0
        while (spritemove < 4) {
            sprite.move(1)
            basic.pause(100)
            spritemove++
        }
        sprite.turn(Direction.Right, 90)
        counter++
    }
    
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
