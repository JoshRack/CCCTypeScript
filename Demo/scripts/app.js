/// <reference path="knockout.d.ts" />
/// <reference path="services/logApiClient.ts" />
/// <reference path="viewModels/logViewer.ts" />
/// <reference path="interfaces.ts" />
var App;
(function (App) {
    var Main = (function () {
        function Main(client) {
            this.client = client;
            this.viewModel = new App.ViewModels.LogViewer();
            ko.applyBindings(this.viewModel);
            this.client.search(this.viewModel.loadSearchResults);
        }
        return Main;
    })();
    App.Main = Main;    
})(App || (App = {}));
var client = new App.Services.LogApiClient("http://localhost/api/logs");
var app = new App.Main(client);
//@ sourceMappingURL=app.js.map
