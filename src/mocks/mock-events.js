import flatpickr from "flatpickr";
import { EVENTS_TYPE, PRICES } from "../consts/const";
import { getRandomArrayElement } from "../consts/utils.js/utils";
import { mockDestination } from "./mock-destination";
import { mockOffer } from "./mock-offer";

const mockEvents = [
    {
        eventType: getRandomArrayElement(EVENTS_TYPE),
        eventDestination: mockDestination,
        eventStart: flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today",
            maxDate: new Date("2023/06/26")
        }),
        eventEnd: flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
            minDate: "today",
            maxDate: new Date("2023/06/26")
        }),
        price: PRICES,
        offers: mockOffer
    }
];

export function getRandomEvents() {
    return getRandomArrayElement(mockEvents);
};
