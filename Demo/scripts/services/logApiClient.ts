/// <reference path="../jquery.d.ts" />
/// <reference path="../interfaces.ts" />

interface ILogApiClient {
    search: (callback: (data: ILogSummary[]) => void ) => void;
    find: (callback: (data: any) => void ) => void;
}

module App.Services {
    export class LogApiClient implements ILogApiClient {
        private baseUri: string;

        constructor(baseUri: string) {
            this.baseUri = baseUri;
        }

        search(callback: (data: ILogSummary[]) => void ) {
            //$.ajax({
            //    type: 'GET',
            //    url: this.baseUri,
            //    success: function (data) {
            //        callback(<ILogSummary[]>data);
            //    }
            //});
            var data: ILogSummary[] = [{ eventDate: new Date(2013, 04, 27, 8, 0, 0), level: "WARN", message: "Some suspicious activity" }, { eventDate: new Date(2013, 04, 27, 8, 1, 0), level: "ERROR", message: "Unhandled exception occurred" }]
            callback(data);
        };

        find(callback: (data: any) => void ) {
        };
    }
}