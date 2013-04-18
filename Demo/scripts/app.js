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
                    self.client.find(this.params.id, self.viewModel.selected);
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
var client = new App.Services.LogApiClient("http://localhost/api/logs");
var app = new App.Main(client);
