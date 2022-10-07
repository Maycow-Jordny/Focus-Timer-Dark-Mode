
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonAddTime,
    buttonCoffeShop,
    buttonFirePlace,
    buttonForest,
    buttonRain,
    buttonReduceTime,
    forestInput,
    fireInput,
    coffeInput,
    rainInput,
    buttonStop,
    iconMoon,
    iconSun,
} from "./elements.js"

export function Events({ timer, controls, sounds }) {
    iconSun.addEventListener('click', function () {
        controls.darkMode()
        sounds.pressButton()
    })

    iconMoon.addEventListener('click', function () {
        controls.whiteMode()
        sounds.pressButton()
    })

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sounds.pressButton()
    })

    buttonPause.addEventListener('click', function () {
        controls.pause()
        timer.pauseTimer()
        sounds.pressButton()
    })

    buttonStop.addEventListener('click', function () {
        controls.buttonStopResetControls()
        timer.pauseTimer()
        timer.resetTimer()
        sounds.pressButton()
    })

    buttonAddTime.addEventListener('click', function () {
        timer.addTime()
        sounds.pressButton()
    })

    buttonReduceTime.addEventListener('click', function () {
        timer.reduceTime()
        sounds.pressButton()
    })

    buttonSet.addEventListener('click', function () {
        timer.setMinutesPromptAndValidate()
        sounds.pressButton()
    })

    buttonForest.addEventListener('click', function () {
        sounds.forestSoundPlay()
        controls.resetCardsColors()
        controls.activeCardColorForest()

    })

    buttonFirePlace.addEventListener('click', function () {
        sounds.firePlaceSoundPlay()
        controls.resetCardsColors()
        controls.activeCardColorFirePlace()
    })

    buttonCoffeShop.addEventListener('click', function () {
        sounds.coffeshopSoundPlay()
        controls.resetCardsColors()
        controls.activeCardColorCoffeShop()
    })

    buttonRain.addEventListener('click', function () {
        sounds.rainSoundPlay()
        controls.resetCardsColors()
        controls.activeCardColorRain()
    })

    forestInput.addEventListener('input', function () {
        sounds.volumeInputForest(forestInput)
    })

    rainInput.addEventListener('input', function () {
        sounds.volumeInputRain(rainInput)
    })

    coffeInput.addEventListener('input', function () {
        sounds.volumeInputCoffe(coffeInput)
    })

    fireInput.addEventListener('input', function () {
        sounds.volumeInputFire(fireInput)
    })

}



