
export function Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    iconMoon,
    iconSun,
    trade,
    forestInput,
    fireInput,
    buttonFirePlace,
    buttonForest,
    buttonCoffeShop,
    buttonRain,
    rainInput,
    coffeInput
}) {

    function pause() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }


    function buttonStopResetControls() {
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonStop.classList.add('hide')
    }


    function darkMode() {
        iconSun.classList.add('hide')
        iconMoon.classList.remove('hide')
        trade.classList.remove('white-mode')
        trade.classList.add('dark-mode')
    }

    function whiteMode() {
        iconSun.classList.remove('hide')
        iconMoon.classList.add('hide')
        trade.classList.add('white-mode')
        trade.classList.remove('dark-mode')
    }

    function resetCardsColors() {
        buttonForest.classList.remove('card-color')
        buttonForest.classList.remove('svg-color')
        forestInput.classList.remove('input-click')
        forestInput.classList.remove('input-change')

        buttonFirePlace.classList.remove('card-color')
        buttonFirePlace.classList.remove('svg-color')
        fireInput.classList.remove('input-click')
        fireInput.classList.remove('input-change')

        buttonRain.classList.remove('card-color')
        buttonRain.classList.remove('svg-color')
        rainInput.classList.remove('input-click')
        rainInput.classList.remove('input-change')

        buttonCoffeShop.classList.remove('card-color')
        buttonCoffeShop.classList.remove('svg-color')
        coffeInput.classList.remove('input-click')
        coffeInput.classList.remove('input-change')
    }

    function activeCardColorRain() {
        buttonRain.classList.add('card-color')
        buttonRain.classList.add('svg-color')
        rainInput.classList.add('input-click')
        rainInput.classList.add('input-change')
    }

    function activeCardColorForest() {
        buttonForest.classList.add('card-color')
        buttonForest.classList.add('svg-color')
        forestInput.classList.add('input-click')
        forestInput.classList.add('input-change')
    }
    function activeCardColorFirePlace() {
        buttonFirePlace.classList.add('card-color')
        buttonFirePlace.classList.add('svg-color')
        fireInput.classList.add('input-click')
        fireInput.classList.add('input-change')
    }

    function activeCardColorCoffeShop() {
        buttonCoffeShop.classList.add('card-color')
        buttonCoffeShop.classList.add('svg-color')
        coffeInput.classList.add('input-click')
        coffeInput.classList.add('input-change')

    }


    return {
        whiteMode,
        darkMode,
        buttonStopResetControls,
        play,
        pause,
        activeCardColorCoffeShop,
        activeCardColorFirePlace,
        resetCardsColors,
        activeCardColorForest,
        activeCardColorFirePlace,
        activeCardColorRain
    }

}
