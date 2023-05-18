import { EVENTS_COUNT } from "../consts/const";
import { getRandomEvents } from "../mocks/mock-events";

export default class EventsModel {
    events = Array.from({length: EVENTS_COUNT}, getRandomEvents);

    getEvents() {
        return this.events;
    }
}