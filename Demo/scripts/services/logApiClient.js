var App;
(function (App) {
    (function (Services) {
        var LogApiClient = (function () {
            function LogApiClient(baseUri) {
                this.baseUri = baseUri;
            }
            LogApiClient.prototype.search = function (callback) {
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
