import { useState } from "react";

export function useCardResize() {
    const [countAddFilms, setCountAddFilms] = useState(0)
    const [startCountFilms, setStartCountFilms] = useState(0)

    function setParamsCountFilms(mode) {
        console.log('aa');
        const deviceWidth = document.documentElement.clientWidth
        const isUpdate = mode === 'all'

        const middleDevice = deviceWidth <= 1000 && deviceWidth > 700
        const smallDevice = deviceWidth <= 700 && deviceWidth >= 320

        if (middleDevice) {
            setCountAddFilms(2)
            isUpdate && setStartCountFilms(8)
        } else if (smallDevice) {
            setCountAddFilms(2)
            isUpdate && setStartCountFilms(5)
        } else {
            setCountAddFilms(3)
            isUpdate && setStartCountFilms(12)
        }
    }

    return { countAddFilms, startCountFilms, setParamsCountFilms };
}

