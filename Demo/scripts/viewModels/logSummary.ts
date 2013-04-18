/// <reference path="../interfaces.ts" />

module App.ViewModels {
    export class LogSummary implements ILogSummary {
        id: number;
        eventDate: Date;
        level: string;
        message: string;
    }
}