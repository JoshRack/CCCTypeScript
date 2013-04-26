/// <reference path="../interfaces.ts" />
/// <reference path="logSummary.ts" />

module App.ViewModels {
    export class LogDetail implements ILogDetail extends LogSummary {
        appDomain: string;
        thread: string;

        levelClass(): string {
            switch (this.level) {
                case "ERROR":
                    return "label-important";
                case "WARN":
                    return "label-warning";
                default:
                    return "label-info";
            }
        };

        constructor(jsonData: ILogDetail) {
            super(jsonData);
            this.appDomain = jsonData.appDomain;
            this.thread = jsonData.thread;
        }
    }
}