export function getRandomArrayElement(items) {
    return items[Math.floor(Math.random() * items.length)]
};

export function getRandomNumber(min,max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
};