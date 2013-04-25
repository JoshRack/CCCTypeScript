/// <reference path="../interfaces.ts" />

module App.ViewModels {
    export class LogSummary implements ILogSummary {
        id: number;
        eventDate: Date;
        level: string;
        message: string;

        constructor(jsonData: ILogSummary) {
            this.id = jsonData.id;
            this.eventDate = jsonData.eventDate;
            this.level = jsonData.level;
            this.message = jsonData.message;
        }

        get rowClass(): string {
            switch (this.level) {
                case "ERROR":
                    return "error";
                case "WARN":
                    return "warning";
                default:
                    return "info";
            }
        };
    }
}