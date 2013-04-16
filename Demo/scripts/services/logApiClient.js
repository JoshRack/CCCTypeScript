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
                        eventDate: new Date(2013, 4, 27, 8, 0, 0),
                        level: "WARN",
                        message: "Some suspicious activity"
                    }, 
                    {
                        eventDate: new Date(2013, 4, 27, 8, 1, 0),
                        level: "ERROR",
                        message: "Unhandled exception occurred"
                    }
                ];
                callback(data);
            };
            LogApiClient.prototype.find = function (callback) {
            };
            return LogApiClient;
        })();
        Services.LogApiClient = LogApiClient;        
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
