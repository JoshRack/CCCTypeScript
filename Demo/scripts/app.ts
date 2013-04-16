/// <reference path="knockout.d.ts" />
/// <reference path="services/logApiClient.ts" />
/// <reference path="viewModels/logViewer.ts" />
/// <reference path="interfaces.ts" />

module App {
    export class Main {
        private client: ILogApiClient;
        viewModel: App.ViewModels.LogViewer;

        constructor(client: ILogApiClient) {
            this.client = client;
            this.viewModel = new App.ViewModels.LogViewer();
            ko.applyBindings(this.viewModel);

            this.client.search(this.viewModel.loadSearchResults);
        };
    }
}

var client = new App.Services.LogApiClient("http://localhost/api/logs")
var app = new App.Main(client);
