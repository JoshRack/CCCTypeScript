/// <reference path="../interfaces.ts" />

module App.ViewModels {
    export class LogDetail implements ILogDetail {
        id: number;
        eventDate: Date;
        level: string;
        message: string;
        appDomain: string;
        thread: string;
    }
}