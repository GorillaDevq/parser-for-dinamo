interface iTextSliser {
   text: string,
   number: number,
}

export const textSliser = (params: iTextSliser) => {

    const { text, number } = params;
    let sliceText = text.slice(0, number)
    const pointIndex = sliceText.lastIndexOf('.')

    if (pointIndex === -1) {
        const commaIndex = sliceText.lastIndexOf(',')

        if (commaIndex === -1) {
            if (number > text.length) return text

            else return `${sliceText}...`
        }

        else return `${text.slice(0, commaIndex)}...`
    }

    else return `${text.slice(0, pointIndex)}`
}