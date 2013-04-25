/// <reference path="../libs/knockout.d.ts" />
/// <reference path="logSummary.ts" />
/// <reference path="logDetail.ts" />

module App.ViewModels {
    export class LogViewer {
        logs: KnockoutObservableArray;
        selected: KnockoutObservableObject;

        loadSearchResults: (data: ILogSummary[]) => void;
        select: (selectedItem: ILogSummary) => void;
        setSelected: (data: ILogDetail) => void;

        constructor() {
            this.logs = ko.observableArray();
            this.selected = ko.observable();

            this.loadSearchResults = (data: ILogSummary[]) => {
                var summaries: LogSummary[] = [];
                for (var i = 0; i < data.length; i++) {
                    summaries.push(new App.ViewModels.LogSummary(data[i]));
                }
                this.logs(summaries);
            };
            this.select = (selectedItem: ILogSummary) => {
                location.hash = selectedItem.id.toString();
            };
            this.setSelected = (data: ILogDetail) => {
                this.selected(new App.ViewModels.LogDetail(data));
            };
        }
    }
}