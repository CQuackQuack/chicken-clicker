namespace SpriteKind {
    export const mainClicker = SpriteKind.create()
    export const Detector = SpriteKind.create()
    export const auto = SpriteKind.create()
    export const auto2 = SpriteKind.create()
    export const auto3 = SpriteKind.create()
    export const Text3 = SpriteKind.create()
    export const auto4 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.auto3, SpriteKind.Detector, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b d 1 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d d b . . . 
        . b b b b b d d d d d d d b . . 
        . b d d b d d d d d d d d b . . 
        . . b d 1 b d d 9 8 d d 4 f . . 
        . . b 1 1 1 b 9 8 8 d 4 4 c . . 
        b b d b 1 1 d d 8 6 4 4 4 4 b . 
        b d d c d d d b d 4 4 4 4 4 4 b 
        c d d d c c b d 1 1 1 1 1 1 b . 
        c b d d d d d d 1 1 1 1 1 1 b . 
        . c d d d d d d d d 1 1 1 d b . 
        . . c b d d d d d 1 1 1 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d 1 b . . . 
        . b b b b b d d d d d d d b . . 
        . b d 1 b d d d d d d d d b . . 
        . . b 1 1 b d d 9 8 d d 4 f . . 
        . . b d 1 1 b 9 8 8 d 4 4 c . . 
        b b d b 1 1 1 d 8 6 4 4 4 4 4 b 
        b d d c d 1 1 b d 4 4 4 4 4 b . 
        c d d d c c b d 1 d 1 1 1 d b . 
        c b d d d d d d d 1 1 1 1 d b . 
        . c d d d d d d d 1 1 1 d d b . 
        . . c b d d d d d d 1 d b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d d b . . . 
        . . . . b b d d 9 8 d d d f . . 
        . . . . b d d 9 8 8 d d 4 c . . 
        . . . . b d d d 8 6 d d 4 4 . . 
        b d d 1 b b d d d d 4 4 4 4 4 b 
        b b d d 1 1 b d d 4 4 4 4 4 b . 
        b d c d d 1 d d d d d 1 1 b . . 
        c d d c d d d b d d 1 1 1 d b . 
        c b d d c c b d 1 1 1 1 1 d b . 
        . c d d d d d d d 1 1 1 d d b . 
        . . c b d d d d d d d d b b . . 
        . . . c c c c c c c c b 6 . . . 
        `,img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d d b . . . 
        . . . . b b d d 9 8 d d 4 c . . 
        . . . . b d d 9 8 8 d d 4 4 4 b 
        . . . . b 1 d d 8 6 4 4 4 4 b . 
        . . . b d 1 d d d 4 4 4 4 b . . 
        . . b d d d d d d d 1 1 1 b . . 
        . b 1 d d d d d d d d 1 1 1 b . 
        b 1 1 d b b b d d 1 1 1 1 d b . 
        c d d b 1 1 d c d d 1 1 d d b . 
        c b b d 1 d c d d 1 d d d d b . 
        . b 1 1 b c d d d d d d d d b . 
        b b c c c d d d d d d d b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d 1 b . . . 
        . . . . b b d d 9 8 d d 4 c . . 
        . . . . b d d 9 8 8 d d 4 4 4 b 
        . . . . b 1 d d 8 6 4 4 4 4 b . 
        . . . b 1 d d d d 4 4 4 4 b . . 
        . b b d d d d d d 1 1 1 1 b . . 
        b d d d b b b d d d 1 1 1 1 b . 
        c d d b 1 1 d c d 1 1 1 1 1 b . 
        c b b d 1 d c d d 1 1 d 1 d b . 
        c b 1 1 b c d d d d 1 1 d d b . 
        b b c c c d d d d d d d d d b . 
        . . . . c c d d d d d d b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d d b . . . 
        . . . . b b 1 d 9 8 d d d f . . 
        . . . . b 1 d 9 8 8 d d 4 c . . 
        . . . . b d d d 8 6 d d 4 4 . . 
        . b b b d d d d d d 4 4 4 4 4 b 
        b d d d b b d d d 4 4 4 4 4 b . 
        b b d 1 1 1 b d d 1 1 1 1 b . . 
        c d c 1 1 1 1 d d d 1 1 1 d b . 
        c b d c d 1 1 b d d d d 1 1 b . 
        . c d d c c b d d d d 1 d d b . 
        . . c b d d d d d d d d b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    autoEggProductionSpeed / 6,
    false
    )
    pause(autoEggProductionSpeed)
    Glitch = randint(1, 50)
    if (Glitch == 1) {
        info.changeScoreBy(autoEggProductionQuantity * 5)
        textSprite3 = textsprite.create("+" + autoEggProductionQuantity * 5, 0, 2)
    } else if (Glitch == 50) {
        info.changeScoreBy(autoEggProductionQuantity * 500)
        textSprite3 = textsprite.create("+" + autoEggProductionQuantity * 500, 0, 5)
    } else {
        info.changeScoreBy(autoEggProductionQuantity * 50)
        textSprite3 = textsprite.create("+" + autoEggProductionQuantity * 50, 0, 7)
        textSprite3.setKind(SpriteKind.Text3)
    }
    textSprite3.setPosition(sprite.x + randint(-5, 5), sprite.y + randint(-5, 5))
    sprite.startEffect(effects.spray, 500)
    pause(250)
    textSprite3.setText("")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameBeingPlayed) {
        shopIsOpen = 1 - shopIsOpen
        textSprite = textsprite.create("SHOP", 14, 5)
        textSprite.setPosition(80, 40)
        textSprite.setScale(2, ScaleAnchor.Middle)
        textSprite2 = textsprite.create("", 5, 4)
        story.showPlayerChoices("UPGRADES", "CEPS UPGRADES", "BACK")
        if (story.checkLastAnswer("UPGRADES")) {
            upgrades()
        } else if (story.checkLastAnswer("CEPS UPGRADES")) {
            higherCEPS()
        }
        shopIsOpen = 1 - shopIsOpen
        textSprite.setText("")
    }
})
function upgrades () {
    textSprite.setText("UPGRADES")
    textSprite.setPosition(80, 40)
    while (!(story.checkLastAnswer("back"))) {
        story.showPlayerChoices("[" + (CEM * CEM * 2 + CEM * 50) + "~E] Chicken Egg Multiplier", "[" + autoEggProductionQuantity * autoEggProductionQuantity * autoEggProductionQuantity * 25 + "~E] CEPS Quantity", "[" + autoEggProductionSpeedCost * autoEggProductionSpeedCost * 20 + "~E] CEPS Speed", "back")
        if (story.checkLastAnswer("[" + (CEM * CEM * 2 + CEM * 50) + "~E] Chicken Egg Multiplier")) {
            story.startCutscene(function () {
                story.printDialog("+1 egg per click", 95, 90, 20, 160, 14, 5, story.TextSpeed.Normal)
            })
            textSprite2.setText("Do you want to buy this?")
            textSprite2.setPosition(80, 55)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                if (info.score() >= CEM * CEM * 2 + CEM * 50) {
                    info.changeScoreBy(-1 * (CEM * CEM * 2 + CEM * 50))
                    CEM += 1
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                } else {
                    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                    game.splash("not enough money!!", "go get more ~E!")
                }
            }
            story.clearAllText()
            textSprite2.setText("")
        } else if (story.checkLastAnswer("[" + autoEggProductionQuantity * autoEggProductionQuantity * autoEggProductionQuantity * 25 + "~E] CEPS Quantity")) {
            story.startCutscene(function () {
                story.printDialog("200% auto production quantity", 95, 90, 20, 160, 14, 5, story.TextSpeed.Normal)
            })
            textSprite2.setText("Do you want to buy this?")
            textSprite2.setPosition(80, 55)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                if (info.score() >= autoEggProductionQuantity * autoEggProductionQuantity * autoEggProductionQuantity * 25) {
                    info.changeScoreBy(-1 * (autoEggProductionQuantity * autoEggProductionQuantity * autoEggProductionQuantity * 25))
                    autoEggProductionQuantity += autoEggProductionQuantity
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                } else {
                    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                    game.splash("not enough money!!", "go get more ~E!")
                }
            }
            story.clearAllText()
            textSprite2.setText("")
        } else if (story.checkLastAnswer("[" + autoEggProductionSpeedCost * autoEggProductionSpeedCost * 20 + "~E] CEPS Speed")) {
            story.startCutscene(function () {
                story.printDialog("+20% auto production speed", 95, 90, 20, 160, 14, 5, story.TextSpeed.Normal)
            })
            textSprite2.setText("Do you want to buy this?")
            textSprite2.setPosition(80, 55)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                if (info.score() >= autoEggProductionSpeedCost * autoEggProductionSpeedCost * 20) {
                    info.changeScoreBy(-1 * (autoEggProductionSpeedCost * autoEggProductionSpeedCost * 20))
                    autoEggProductionSpeed = autoEggProductionSpeed * 0.8
                    autoEggProductionSpeedCost += 1
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                } else {
                    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                    game.splash("not enough money!!", "go get more ~E!")
                }
            }
            story.clearAllText()
            textSprite2.setText("")
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(shopIsOpen)) {
        animation.runImageAnimation(
        chicken,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        false
        )
        info.changeScoreBy(CEM)
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
        chicken.startEffect(effects.spray, 500)
    }
})
function unusedAssets () {
    autoCEPS3ChickenGPT = sprites.create(img`
        . . . . . . . . . . b 1 b . . . 
        . . . . . . . . . b d b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b d d d d d b . . . 
        . . . . b b d d 1 f d d d f . . 
        . . . . b d d 1 f f d d 4 c . . 
        . . . . b d d d f b d d 4 4 . . 
        . . b b d d d d d d 4 4 4 4 4 b 
        . d d d b b d d 1 4 4 4 4 4 b . 
        . b d d 1 1 b d 1 1 1 1 1 b . . 
        . d c d 1 1 1 1 d 1 1 1 1 1 b . 
        . b d c d 1 d b d d d 1 1 1 b . 
        . c d d c c b d d d d 1 d d b . 
        . . c b d d d d d d d d b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.auto3)
}
sprites.onOverlap(SpriteKind.auto, SpriteKind.Detector, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    autoEggProductionSpeed / 6,
    false
    )
    pause(autoEggProductionSpeed)
    info.changeScoreBy(autoEggProductionQuantity)
    sprite.startEffect(effects.spray, 500)
})
function higherCEPS () {
    textSprite.setText("CEPS UPGRADES")
    textSprite.setPosition(80, 40)
    while (!(story.checkLastAnswer("back"))) {
        story.showPlayerChoices("[" + (numAutoChicken1 * numAutoChicken1 + numAutoChicken1 * 25) + "~E] chicken: gives 1x eggs of a normal chicken, which is itself. [a little helper chicken who helps you get more eggs. A bit slow, though.]", "[" + (numAutoChicken21 * numAutoChicken21 + numAutoChicken21 * 25) * 10 + "~E] chicken farm: gives 10x eggs of a normal chicken [a farm filled with chickens. I mean, it IS expensive though. Taxes and inflation and all.]", "MORE", "back")
        if (story.checkLastAnswer("[" + (numAutoChicken1 * numAutoChicken1 + numAutoChicken1 * 25) + "~E] chicken: gives 1x eggs of a normal chicken, which is itself. [a little helper chicken who helps you get more eggs. A bit slow, though.]")) {
            textSprite2.setText("Do you want to buy this?")
            textSprite2.setPosition(80, 55)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                if (info.score() >= numAutoChicken1 * numAutoChicken1 + numAutoChicken1 * 25) {
                    info.changeScoreBy(-1 * (numAutoChicken1 * numAutoChicken1 + numAutoChicken1 * 25))
                    numAutoChicken1 += 1
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                    autoCEPS1Chicken = sprites.create(img`
                        . . . . . . . . . . b 5 b . . . 
                        . . . . . . . . . b 5 b . . . . 
                        . . . . . . b b b b b b . . . . 
                        . . . . . b b 5 5 5 5 5 b . . . 
                        . . . . b b 5 d 1 f 5 5 d f . . 
                        . . . . b 5 5 1 f f 5 d 4 c . . 
                        . . . . b 5 5 d f b d d 4 4 . . 
                        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
                        b d d d b b d 5 5 4 4 4 4 4 b . 
                        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
                        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
                        c b d c d 5 5 b 5 5 5 5 5 5 b . 
                        . c d d c c b d 5 5 5 5 5 d b . 
                        . . c b d d d d d 5 5 5 b b . . 
                        . . . c c c c c c c c b b . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.auto)
                    autoCEPS1Chicken.setPosition(randint(0, 160), randint(0, 120))
                    totalCEPSOfAutos123 += autoEggProductionQuantity
                } else {
                    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                    game.splash("not enough money!!", "go get more ~E!")
                }
            }
            textSprite2.setText("")
        } else if (story.checkLastAnswer("[" + (numAutoChicken21 * numAutoChicken21 + numAutoChicken21 * 25) * 10 + "~E] chicken farm: gives 10x eggs of a normal chicken [a farm filled with chickens. I mean, it IS expensive though. Taxes and inflation and all.]")) {
            textSprite2.setText("Do you want to buy this?")
            textSprite2.setPosition(80, 55)
            story.showPlayerChoices("Yes", "No")
            if (story.checkLastAnswer("Yes")) {
                if (info.score() >= (numAutoChicken21 * numAutoChicken21 + numAutoChicken21 * 25) * 10) {
                    info.changeScoreBy(-1 * ((numAutoChicken21 * numAutoChicken21 + numAutoChicken21 * 25) * 10))
                    numAutoChicken21 += 1
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                    autoCEPS2Farm = sprites.create(img`
                        ..d......................
                        ..d......................
                        ..d12ddd.................
                        ..2111...................
                        ..1112...................
                        ddd21d....d.444.4........
                        ..222d...55455455544.....
                        ..222d..d55544545444.....
                        ..22225.4e5e555545e44....
                        ..22e54.e5544e544444e....
                        ..24.d555555444444e44....
                        ..e.455545e5e5445e44e4...
                        .4.455e5544444e5e544e4...
                        44555555e54455e5e54e.....
                        5545e4e444ee5454e4e44....
                        5e44455545555444444e4....
                        455555554445e4ee4e4......
                        .4455454544e444eee.......
                        ..455545444eee44444......
                        .....54ee4e44444.........
                        ...4.4ee5eeeeee..........
                        ......44...44............
                        .........................
                        .........................
                        .........................
                        `, SpriteKind.auto2)
                    autoCEPS2Farm.setPosition(randint(0, 160), randint(0, 120))
                    totalCEPSOfAutos123 += autoEggProductionQuantity * 10
                } else {
                    music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                    game.splash("not enough money!!", "go get more ~E!")
                }
            }
            textSprite2.setText("")
        } else if (story.checkLastAnswer("MORE")) {
            while (!(story.checkLastAnswer("back"))) {
                story.showPlayerChoices("[" + (numAutoChicken31 * numAutoChicken31 + numAutoChicken31 * 25) * 100 + "~E] ChickenGPT: gives 50x eggs of a normal chicken. Glitches occasionally and produces 10x or 0.1x the number of eggs. [The all-new ChickenGPT, producing eggs at an unprecedented rate. Of course, it still has bugs. But dont tell it that.]", "[" + (numAutoChicken41 * numAutoChicken41 + numAutoChicken41 * 25) * 5 + "~E] Lag Eliminator 3000: Combines all chickens, farms and ChickenGPTs into one. [It eliminates all of the lag from your computer. Well, at least until you get more chickens.]", "MORE", "back")
                if (story.checkLastAnswer("[" + (numAutoChicken31 * numAutoChicken31 + numAutoChicken31 * 25) * 100 + "~E] ChickenGPT: gives 50x eggs of a normal chicken. Glitches occasionally and produces 10x or 0.1x the number of eggs. [The all-new ChickenGPT, producing eggs at an unprecedented rate. Of course, it still has bugs. But dont tell it that.]")) {
                    textSprite2.setText("Do you want to buy this?")
                    textSprite2.setPosition(80, 55)
                    story.showPlayerChoices("Yes", "No")
                    if (story.checkLastAnswer("Yes")) {
                        if (info.score() >= (numAutoChicken31 * numAutoChicken31 + numAutoChicken31 * 25) * 100) {
                            info.changeScoreBy(-1 * ((numAutoChicken31 * numAutoChicken31 + numAutoChicken31 * 25) * 100))
                            numAutoChicken31 += 1
                            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                            autoCEPS3ChickenGPT = sprites.create(img`
                                . . . . . . . . . . b 1 b . . . 
                                . . . . . . . . . b d b . . . . 
                                . . . . . . b b b b b b . . . . 
                                . . . . . b b 1 d d d d b . . . 
                                . . . . b b 1 d 9 8 d d d f . . 
                                . . . . b d d 9 8 8 d d 4 c . . 
                                . . . . b d d d 8 6 d d 4 4 . . 
                                . . b b d d d d d d 4 4 4 4 4 b 
                                . d d d b b d d 1 4 4 4 4 4 b . 
                                . b d d 1 1 b d 1 1 1 1 1 b . . 
                                . d c d 1 1 1 1 d 1 1 1 1 1 b . 
                                . b d c d 1 d b d d d 1 1 1 b . 
                                . c d d c c b d d d d 1 d d b . 
                                . . c b d d d d d d d d b b . . 
                                . . . c c c c c c c c b b . . . 
                                . . . . . . . . . . . . . . . . 
                                `, SpriteKind.auto3)
                            autoCEPS3ChickenGPT.setPosition(randint(0, 160), randint(0, 120))
                            totalCEPSOfAutos123 += autoEggProductionQuantity * 100
                        } else {
                            music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                            game.splash("not enough money!!", "go get more ~E!")
                        }
                    }
                    textSprite2.setText("")
                } else if (story.checkLastAnswer("[" + (numAutoChicken41 * numAutoChicken41 + numAutoChicken41 * 25) * 5 + "~E] Lag Eliminator 3000: Combines all chickens, farms and ChickenGPTs into one. [It eliminates all of the lag from your computer. Well, at least until you get more chickens.]")) {
                    textSprite2.setText("Do you want to buy this?")
                    textSprite2.setPosition(80, 55)
                    story.showPlayerChoices("Yes", "No")
                    if (story.checkLastAnswer("Yes")) {
                        if (info.score() >= (numAutoChicken41 * numAutoChicken41 + numAutoChicken41 * 25) * 5) {
                            info.changeScoreBy(-1 * ((numAutoChicken41 * numAutoChicken41 + numAutoChicken41 * 25) * 5))
                            numAutoChicken41 += 1
                            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                            autoCEPS3ChickenGPT = sprites.create(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . b b b b . . . . . . 
                                . . . . b b 1 1 1 1 b b . . . . 
                                . . . . b 1 1 1 3 3 1 b . . . . 
                                . . . b 1 1 1 1 3 3 3 1 b . . . 
                                . . . b 1 1 3 1 1 3 3 1 b . . . 
                                . . b d 1 1 1 1 1 1 1 1 d b . . 
                                . . b d 3 3 1 1 1 1 1 1 d b . . 
                                . . b b 3 3 1 1 1 1 3 3 d b . . 
                                . . c b b d 1 1 1 3 3 b d c . . 
                                . . c d d d d d d b b b d c . . 
                                . . c b d d b b d b b d b c . . 
                                . . . c d d b b d d d d c . . . 
                                . . . . c b d d d d b c . . . . 
                                . . . . . c c c c c c . . . . . 
                                `, SpriteKind.auto4)
                            autoCEPS3ChickenGPT.setPosition(randint(0, 160), randint(0, 120))
                        } else {
                            music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                            game.splash("not enough money!!", "go get more ~E!")
                        }
                    }
                    textSprite2.setText("")
                } else if (story.checkLastAnswer("MORE")) {
                    while (!(story.checkLastAnswer("back"))) {
                        story.showPlayerChoices("-", "-", "-", "back")
                        textSprite2.setText("")
                    }
                }
                textSprite2.setText("")
            }
        } else {
        	
        }
    }
}
controller.combos.attachSpecialCode(function () {
    info.changeScoreBy(999999999)
})
sprites.onOverlap(SpriteKind.auto2, SpriteKind.Detector, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        .........................
        .....dd..................
        ....d....................
        .d..21...................
        .d.1112d.................
        ..d2111.d................
        ....12..d..d.444.4.......
        ...22d....55455455544....
        ...dd2...d55544454d44....
        ...22225.4e54454444e44...
        ...22e54.e54445554444e...
        ...24.d55d5545545e4544...
        ...e.4555454445d44544e4..
        ..4.4554454544544454ee4..
        .4455554545544544e5ee....
        .5545e544eedee5e4eee44...
        .5e4444455445544dee4e4...
        .455555e44455544eee4.....
        ..4455eeee554544eee......
        ...4eee44eee5444e444.....
        ......5e444544ee4........
        ....4.ee555eeeee.........
        .......44...44...........
        .........................
        .........................
        `,img`
        .........................
        ......dd.................
        .d...d...................
        .d..12...................
        ..d2111..................
        ...1112d.................
        ....21..d..d.444.4.......
        ...2d22.d.5545545554e....
        ..dd222..d55544545454....
        ...22225.4e5e555545ee4...
        ...22e54.e5544e5444445...
        ...24.d555555444444e44...
        ...e.455545e5e5445e44e4..
        ..4.455e5544444e5e544e4..
        .44555555e54455e5e54e....
        .5545e4e444ee5454e4e44...
        .5e44455545555455444e4...
        .455555554445e45e4e4.....
        ..4455454544e445eee......
        ...455545444ee544444.....
        ......54555555444........
        ....4.4ee5eeeeee.........
        .......44...44...........
        .........................
        .........................
        `,img`
        .........................
        .d.....dd................
        .d....d..................
        ..d2112..................
        ...1111..................
        ...1111..................
        ...2112d...d.444.4.......
        ...d222.d.554554555e4....
        .dd2222.dd55544454d44....
        ...22225.4e54454444ee4...
        ...22e54.e544445e4444e...
        ...24.d55d554544ee4544...
        ...e.4555454444ee4544e4..
        ..4.4554454544ee4454ee4..
        .445555454554ee44e5ee....
        .5545e544eedee4e44ee44...
        .5e4444455ee5444eee4e4...
        .455555e4444444eeee4.....
        ..4455eee4554eeee5e......
        ...4555eeeeeee455444.....
        ......444ee445544........
        ....4.4ee5eeeeee.........
        .......44...44...........
        .........................
        .........................
        `,img`
        .d.......................
        .d......dd...............
        ..d....d.................
        ...2112..................
        ...1111..................
        ...1111..................
        ...2112....d.444.4.......
        ..d2222d..554444555e4....
        dd.2222.dd55555554de4....
        ...22225d4e5444445eee4...
        ...22e54.e544444444e4e...
        ...24.d55455444445e544...
        ...e.4554554444eee444e4..
        ..4.4554454444ee5e44ee4..
        .4455554544444545e4ee....
        .55454444444ee4e544e44...
        .5e44445444ee44e4ee4e4...
        .455555444ee4ee4eee4.....
        ..44554544e4e44ee5e......
        ...4555e444445455444.....
        ......44455545544........
        ....4.4ee5eeeeee.........
        .......44...44...........
        .........................
        .........................
        `,img`
        ...d.....................
        ..d......................
        ..d....dd................
        ...2112..d...............
        ...1111..................
        ...1111..................
        d..2112....d.444.4.......
        .dd2222d..554444555e4....
        ...2222d.d55555554de4....
        ...222d5.4e54444444ee4...
        ...22e54.e544444444e4e...
        ...24.d554554444e44544...
        ...e.45545544e444e4e4e4..
        ..4.455445e4444e4444ee4..
        .4455554444e444e444ee....
        .55454e4444455e4444e44...
        .5e44445e444e4e44ee4e4...
        .45555554444e44eeee4.....
        ..4454444e44445e45e......
        ...4555e4454e5454444.....
        ......444ee544544........
        ....4.4ee5eeeeee.........
        .......44...44...........
        .........................
        .........................
        `,img`
        .........................
        ....dd...................
        ...d.....................
        ...2112d.................
        .d.1111.d................
        .d.1111.d................
        ..d2112....d.444.4.......
        ...222d...55455455544....
        ...2dd2..d55544555d44....
        ...22225.4e54454544e44...
        ...22e54.e5445454e444ee..
        ...24.d554455455e445e4e..
        ...e.455445555e5ee54eee..
        ..4.455445554e54e55e4e4..
        .445555455e4e54454ee4e...
        .554555554445e554eee44...
        .5e444455555e54ede44e4...
        .45554444445544e44ee.....
        ..4455e4ee444444eee......
        ...4555544444eeeee44.....
        ......54eeeeeee44........
        ....4.4ee5eeeeee.........
        .......44...44...........
        .........................
        .........................
        `],
    autoEggProductionSpeed / 6,
    false
    )
    pause(autoEggProductionSpeed)
    info.changeScoreBy(autoEggProductionQuantity * 10)
    sprite.startEffect(effects.spray, 500)
})
let numAutoChicken41 = 0
let autoCEPS2Farm: Sprite = null
let totalCEPSOfAutos123 = 0
let autoCEPS1Chicken: Sprite = null
let autoCEPS3ChickenGPT: Sprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let textSprite3: TextSprite = null
let Glitch = 0
let chicken: Sprite = null
let CEM = 0
let numAutoChicken31 = 0
let numAutoChicken21 = 0
let numAutoChicken1 = 0
let autoEggProductionQuantity = 0
let shopIsOpen = 0
let autoEggProductionSpeedCost = 0
let autoEggProductionSpeed = 0
let gameBeingPlayed = 0
let mySprite = sprites.create(img`
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
    `, SpriteKind.Detector)
gameBeingPlayed = 0
game.splash("Chicken Clicker", "For people who <3 chickens")
autoEggProductionSpeed = 3000
autoEggProductionSpeedCost = 1
shopIsOpen = 0
autoEggProductionQuantity = 1
numAutoChicken1 = 1
numAutoChicken21 = 1
numAutoChicken31 = 1
CEM = 1
chicken = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.mainClicker)
let shopIcon = sprites.create(img`
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . . . 6 8 7 7 8 8 6 . . . . 
    . . . . . 6 8 7 8 7 8 6 . . . . 
    . . . . . 6 8 7 7 8 8 6 . . . . 
    . . . . . 6 8 7 8 7 8 6 . . . . 
    . . . . . 6 8 7 7 8 8 6 . . . . 
    . . . . . . 6 6 6 6 6 . . . . . 
    . . . 4 4 1 1 4 4 1 1 4 4 1 1 4 
    . . 4 4 1 1 4 4 1 1 4 4 1 1 4 4 
    . 4 4 1 1 4 4 1 1 4 4 1 1 4 4 e 
    4 4 1 1 4 4 1 1 4 4 1 1 4 4 . e 
    . . . e . . . . . . . . . . . e 
    . . . e . . . . . . . . . . . e 
    . . . e . 4 4 . . 5 . c c . . e 
    . . . e d d d d d d d d d d d e 
    . . . e d d d d d d d d d d d e 
    `, SpriteKind.Player)
shopIcon.setPosition(10, 105)
chicken.setScale(5, ScaleAnchor.Middle)
gameBeingPlayed = 1
