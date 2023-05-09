import CreateNewEventButtonView from "../view/create-event-button-view/create-event-button-view";
import EditPointView from "../view/edit-point-view/edit-point-view";
import EventsItemView from "../view/events-item-view/events-item-view";
import EventsListView from "../view/events-list-view/events-list-view";
import SortListView from "../view/sort-list-view/sort-list-view";

export default class PagePresenter {
    pageComponent = new EventsListView;
    eventListComponent = new EventsListView;
    
    constructor({pageContainer}) {
        this.pageContainer = pageContainer;
    }

    init() {
        render(this.pageComponent, this.pageContainer);
        render(new SortListView(), this.pageComponent.getElement());
        render(this.eventListComponent, this.pageComponent.getElement());
        render(new EditPointView(), this.pageComponent.getElement());

        for(let i = 0; i < 3; i++) {
            render(new EventsItemView(), this.eventListComponent.getElement());
        }

        render(new CreateNewEventButtonView, this.pageComponent.getElement());
    }
}