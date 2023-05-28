import { DATE_FORMAT, TIME_FORMAT } from '../const';
import { createElement } from '../render';
import { getPointDuration, humanizeEventDate } from '../utils';

function eventsItemTemplate(event) {
  const {basePrice,dateFrom,dateTo,offers,destination,type,isFavorite} = event;

  const date = humanizeEventDate(dateFrom, DATE_FORMAT);
  const timeFrom = humanizeEventDate(dateFrom, TIME_FORMAT);
  const timeTo = humanizeEventDate(dateTo, TIME_FORMAT);
  const pointDuration = getPointDuration(dateFrom,dateTo);
  const checkFavorite = isFavorite ? 'event__favorite-btn--active' : '';
  return(
    `<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime="${dateFrom}">${date}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${destination.images.src}" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${destination.city}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime="${dateFrom}">${timeFrom}</time>
      &mdash;
      <time class="event__end-time" datetime="${dateTo}">${timeTo}</time>
    </p>
    <p class="event__duration">3${pointDuration}</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  <li class="event__offer">
    <span class="event__offer-title">${offers.offer.offerTitle}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${offers.offer.offerPrice}</span>
  </li>
</ul>
  <button class="event__favorite-btn ${checkFavorite}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>
</li>`
  );
}

export default class EventsItemView {
  constructor({event}) {
    this.event = event;
  }

  getTemplate() {
    return eventsItemTemplate(this.event);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

/*
function eventsItemTemplate(event,allOffers,allDestinations) {
  const {basePrice,dateFrom,dateTo,offers,destination,type,isFavorite} = event;
  const date = humanizeEventDate(dateFrom,DATE_FORMAT);
  const timeFrom = humanizeEventDate(dateFrom,TIME_FORMAT);
  const timeTo = humanizeEventDate(dateTo, TIME_FORMAT);
  const timeDuration = getPointDuration(dateFrom,dateTo);

  const getRandomDestination = (eventDestination) => {
    const choosenDestination = allDestinations.find((item) => eventDestination.includes(item.id));
    return choosenDestination.city;
  };

  const getRandomOffer = (eventType, eventOffers) => {
    const eventTypeOffers = allOffers.find((item) => item.type === eventType).offers;
    const choosenOffers = eventTypeOffers.filter((item) => eventOffers.includes(item.id));
    return choosenOffers;
  };

  const createOfferTemplate = () => getRandomOffer(type,offers).map((item) => {
    `<li class="event__offer">
      <span class="event__offer-title">${item.offerTitle}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${item.offerPrice}</span>
    </li>`;
  }).join('');

  const checkFavorite = isFavorite ? 'event__favorite-btn--active' : '';

  return(
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFrom}">${date}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${getRandomDestination(destination)}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFrom}">${timeFrom}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateTo}">${timeTo}</time>
        </p>
        <p class="event__duration">${timeDuration}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOfferTemplate()}
      </ul>
      <button class="event__favorite-btn ${checkFavorite}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );
}

export default class EventsItemView {
  constructor({event,offers,destinations}) {
    this.event = event;
    this.offers = offers;
    this.destinations = destinations;
  }

  getTemplate() {
    return eventsItemTemplate(this.event,this.offers,this.destinations);
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
*/
