import { CITIES, DESCTIPTIONS, PHOTOS } from "../consts/const";
import { getRandomArrayElement } from "../consts/utils.js/utils";

export const mockDestination = [
    {
        description: getRandomArrayElement(DESCTIPTIONS),
        city: getRandomArrayElement(CITIES),
        images: PHOTOS
    }
];

export const getRandomDestination = () => {
    return getRandomArrayElement(mockDestination);
}
