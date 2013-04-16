/// <reference path="../interfaces.ts" />

module App.ViewModels {
    export class LogSummary implements ILogSummary {
        eventDate: Date;
        level: string;
        message: string;
    }
}