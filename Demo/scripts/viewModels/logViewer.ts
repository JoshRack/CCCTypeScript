/// <reference path="../knockout.d.ts" />
/// <reference path="logSummary.ts" />
/// <reference path="logDetail.ts" />

module App.ViewModels {
    export class LogViewer {
        logs: KnockoutObservableArray;
        selected: KnockoutObservableObject;

        loadSearchResults: (data: ILogSummary[]) => void;
        loadDetail: (data: ILogDetail) => void;

        constructor() {
            this.logs = ko.observableArray();
            this.loadSearchResults = (data: ILogSummary[]) => {
                this.logs(data);
            };
            this.loadDetail = (data: ILogDetail) => {
                this.selected(data);
            };
        }
    }
}