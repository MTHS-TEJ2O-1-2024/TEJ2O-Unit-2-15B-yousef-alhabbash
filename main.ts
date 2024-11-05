/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Yousef
 * Created on: Oct 2024
 * This program moves a light across the screen perimeter
*/

// variables
let sprite: game.LedSprite = null

// happy
basic.showIcon(IconNames.Happy)

// on button A edge moving
input.onButtonPressed(Button.A, function () {
    sprite = game.createSprite(0, 0)

    // loop setup
    let counter = 0

    while (counter <= 4) {
        if (counter == 0) {
            // move the top now
            while (sprite.get(LedSpriteProperty.X) < 4) {
                sprite.change(LedSpriteProperty.X, 1)
                basic.pause(500)
            }
        }
        if (counter == 1) {
            // move right column
            while (sprite.get(LedSpriteProperty.Y) < 4) {
                sprite.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
        if (counter == 2) {
            // move bottom row
            while (sprite.get(LedSpriteProperty.X) > 0) {
                sprite.change(LedSpriteProperty.X, -1)
                basic.pause(500)
            }
        }
        if (counter == 3) {
            // moves left column
            while (sprite.get(LedSpriteProperty.Y) > 0) {
                sprite.change(LedSpriteProperty.Y, -1)
                basic.pause(500)
            }
        }
        counter += 1
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})

// on button B edge moving counter clockwise
input.onButtonPressed(Button.B, function () {
    sprite = game.createSprite(4, 0)

    // loop setup
    let counter = 0

    while (counter >= 0) {
        if (counter == 0) {
            // move right column
            while (sprite.get(LedSpriteProperty.Y) < 4) {
                sprite.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
        if (counter == 1) {
            // move bottom row
            while (sprite.get(LedSpriteProperty.X) > 0) {
                sprite.change(LedSpriteProperty.X, -1)
                basic.pause(500)
            }
        }
        if (counter == 2) {
            // move left column
            while (sprite.get(LedSpriteProperty.Y) > 0) {
                sprite.change(LedSpriteProperty.Y, -1)
                basic.pause(500)
            }
        }
        if (counter == 3) {
            // move top row
            while (sprite.get(LedSpriteProperty.X) < 4) {
                sprite.change(LedSpriteProperty.X, 1)
                basic.pause(500)
            }
        }
        counter += 1
        basic.clearScreen()
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
