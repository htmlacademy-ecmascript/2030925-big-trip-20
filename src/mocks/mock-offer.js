import { DESCTIPTIONS, EVENTS_TYPE, PRICES } from "../consts/const";
import { getRandomArrayElement, getRandomNumber } from "../consts/utils.js/utils";

export const mockOffer = [
    {
        offerType: getRandomArrayElement(EVENTS_TYPE),
        offerTitle: getRandomArrayElement(DESCTIPTIONS),
        offerPrice: PRICES
    }
];
