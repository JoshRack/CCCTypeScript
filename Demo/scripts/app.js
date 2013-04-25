/// <reference path="libs/jquery.d.ts" />
/// <reference path="libs/knockout.d.ts" />
/// <reference path="libs/sammyjs.d.ts" />
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
            var self = this;
            Sammy(function () {
                this.get("#:id", function () {
                    self.client.find(this.params.id, self.viewModel.setSelected);
                });
                this.get("", function () {
                    self.viewModel.selected(null);
                    self.client.search(self.viewModel.loadSearchResults);
                });
            }).run();
        }
        return Main;
    })();
    App.Main = Main;    
})(App || (App = {}));
$(function () {
    var client = new App.Services.LogApiClient("http://localhost:41000/api/logs");
    var app = new App.Main(client);
});
//@ sourceMappingURL=app.js.map
