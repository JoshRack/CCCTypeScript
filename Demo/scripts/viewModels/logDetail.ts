/// <reference path="../interfaces.ts" />

module App.ViewModels {
    export class LogDetail implements ILogDetail {
        id: number;
        eventDate: Date;
        level: string;
        message: string;
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
            this.id = jsonData.id;
            this.eventDate = jsonData.eventDate;
            this.level = jsonData.level;
            this.message = jsonData.message;
            this.appDomain = jsonData.appDomain;
            this.thread = jsonData.thread;
        }
    }
}