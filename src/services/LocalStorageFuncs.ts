

export const setItem = (key: any, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: any) => {
    return JSON.parse(localStorage.getItem(key)!)
}