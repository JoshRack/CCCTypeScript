/// <reference path="../libs/jquery.d.ts" />
/// <reference path="../interfaces.ts" />

interface ILogApiClient {
    search: (callback: (data: ILogSummary[]) => void ) => void;
    find: (id: number, callback: (data: ILogDetail) => void ) => void;
}

module App.Services {
    export class LogApiClient implements ILogApiClient {
        private baseUri: string;

        constructor(baseUri: string) {
            this.baseUri = baseUri;
        }

        search(callback: (data: ILogSummary[]) => void ) {
            $.ajax({
                type: 'GET',
                url: this.baseUri,
                success: function (data) {
                    callback(<ILogSummary[]>data);
                }
            });
        };

        find(id: number, callback: (data: ILogDetail) => void ) {
            $.ajax({
                type: 'GET',
                url: this.baseUri + "/" + id,
                success: function (data) {
                    callback(<ILogDetail>data);
                }
            });
        };
    }
}