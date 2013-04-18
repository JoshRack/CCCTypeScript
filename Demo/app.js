var App;
(function (App) {
    /// <reference path="../interfaces.ts" />
    (function (ViewModels) {
        var LogDetail = (function () {
            function LogDetail() { }
            return LogDetail;
        })();
        ViewModels.LogDetail = LogDetail;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
var App;
(function (App) {
    /// <reference path="../interfaces.ts" />
    (function (ViewModels) {
        var LogSummary = (function () {
            function LogSummary() { }
            return LogSummary;
        })();
        ViewModels.LogSummary = LogSummary;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
var App;
(function (App) {
    /// <reference path="../libs/knockout.d.ts" />
    /// <reference path="logSummary.ts" />
    /// <reference path="logDetail.ts" />
    (function (ViewModels) {
        var LogViewer = (function () {
            function LogViewer() {
                var _this = this;
                this.logs = ko.observableArray();
                this.selected = ko.observable();
                this.loadSearchResults = function (data) {
                    _this.logs(data);
                };
                this.select = function (selectedItem) {
                    location.hash = selectedItem.id.toString();
                };
            }
            return LogViewer;
        })();
        ViewModels.LogViewer = LogViewer;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
var App;
(function (App) {
    (function (Services) {
        var LogApiClient = (function () {
            function LogApiClient(baseUri) {
                this.baseUri = baseUri;
            }
            LogApiClient.prototype.search = function (callback) {
                //$.ajax({
                //    type: 'GET',
                //    url: this.baseUri,
                //    success: function (data) {
                //        callback(<ILogSummary[]>data);
                //    }
                //});
                var data = [
                    {
                        id: 1,
                        eventDate: new Date(2013, 4, 27, 8, 0, 0),
                        level: "WARN",
                        message: "Some suspicious activity"
                    }, 
                    {
                        id: 2,
                        eventDate: new Date(2013, 4, 27, 8, 1, 0),
                        level: "ERROR",
                        message: "Unhandled exception occurred"
                    }
                ];
                callback(data);
            };
            LogApiClient.prototype.find = function (id, callback) {
                var data = {
                    id: 1,
                    eventDate: new Date(2013, 4, 27, 8, 0, 0),
                    level: "WARN",
                    message: "Some suspicious activity",
                    appDomain: "LM3SVC",
                    thread: "87"
                };
                callback(data);
            };
            return LogApiClient;
        })();
        Services.LogApiClient = LogApiClient;        
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
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
//@ sourceMappingURL=app.js.map
