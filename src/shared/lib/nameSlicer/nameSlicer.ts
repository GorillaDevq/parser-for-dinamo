export const nameSlicer = (fullName: string) => {
    if (fullName.endsWith(' ')) {
        const withOutSpace = fullName.slice(0, fullName.length - 1)
        return withOutSpace.slice(0, withOutSpace.lastIndexOf(' '))
    }
    return fullName.slice(0, fullName.lastIndexOf(' '))
}
