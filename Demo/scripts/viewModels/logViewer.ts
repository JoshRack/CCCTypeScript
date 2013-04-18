/// <reference path="../libs/knockout.d.ts" />
/// <reference path="logSummary.ts" />
/// <reference path="logDetail.ts" />

module App.ViewModels {
    export class LogViewer {
        logs: KnockoutObservableArray;
        selected: KnockoutObservableObject;

        loadSearchResults: (data: ILogSummary[]) => void;
        select: (selectedItem: ILogSummary) => void;

        constructor() {
            this.logs = ko.observableArray();
            this.selected = ko.observable();

            this.loadSearchResults = (data: ILogSummary[]) => {
                this.logs(data);
            };
            this.select = (selectedItem: ILogSummary) => {
                location.hash = selectedItem.id.toString();
            };
        }
    }
}