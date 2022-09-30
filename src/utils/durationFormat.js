export function durationFormat(number) {
    const hours = Math.floor(number / 60)
    const minute = number % 60
    return hours ? `${hours}ч ${minute}м` : `${minute}м`

  }
