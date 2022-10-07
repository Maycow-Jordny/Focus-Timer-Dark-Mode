import { Sounds } from "./sounds.js";

export function Timer({
    minutesDisplay,
    secondesDisplay,
    reset
}) {

    let minutes
    let breakTimer


    function pauseTimer() {
        clearTimeout(breakTimer)
    }



    function countDown() {
        breakTimer = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent)
            let secondes = Number(secondesDisplay.textContent)
            let isFinished = minutes <= 0 && secondes <= 0



            if (isFinished) {
                reset()
                Sounds().timeEnd()
                resetTimer()
                return
            }
            if (secondes <= 0) {
                --minutes
                secondes = 60
            }
            --secondes
            secondesDisplay.textContent = String(secondes).padStart(2, "0")
            minutesDisplay.textContent = String(minutes).padStart(2, "0")
            countDown()
        }, 1000);
    }

    function resetTimer() {

        if (minutes == null) {
            minutes = 25
        }
        minutesDisplay.textcontent = Number(minutesDisplay.textContent = String(minutes).padStart(2, "0"))
        secondesDisplay.textContent = String(secondesDisplay.textContent = 0).padStart(2, "0")

    }


    function setMinutesPromptAndValidate() {
        minutes = prompt("Digite o tempo do timer")
        if (isNaN(minutes)) {
            alert("Digite apenas números!")
            setMinutesPromptAndValidate()
        }
        if (minutes > 61) {
            alert("Tempo máximo de 60 minutos!")
            setMinutesPromptAndValidate()
        }
        resetTimer()
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
    }



    function addTime() {
        let limit = minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart('2', 0)
        if (limit >= 60) {
            minutesDisplay.textContent = 60
            alert("Tempo máximo de 60 minutos atingido ")

        }
    }

    function reduceTime() {
        let limit = minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart('2', 0)
        if (limit <= 0) {
            minutesDisplay.textContent = "00"
        }
    }

    return {
        reduceTime,
        addTime,
        setMinutesPromptAndValidate,
        countDown,
        pauseTimer,
        resetTimer

    }


}

