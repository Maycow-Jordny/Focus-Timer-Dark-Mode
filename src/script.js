import { Events } from "./events.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import { Controls } from "./controls.js"
import {
    minutesDisplay,
    secondesDisplay,
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonFirePlace,
    buttonForest,
    forestInput,
    coffeInput,
    buttonStop,
    buttonRain,
    iconMoon,
    fireInput,
    iconSun,
    trade,
    rainInput,
    buttonCoffeShop
} from "./elements.js"

const sounds = Sounds()

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop,
    iconMoon,
    iconSun,
    trade,
    buttonForest,
    buttonFirePlace,
    forestInput,
    fireInput,
    coffeInput,
    buttonRain,
    rainInput,
    coffeInput,
    buttonCoffeShop
})


const timer = Timer({
    minutesDisplay,
    secondesDisplay,
    reset: controls.buttonStopResetControls
})

Events({ timer, controls, sounds })