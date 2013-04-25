var App;
(function (App) {
    (function (Services) {
        var LogApiClient = (function () {
            function LogApiClient(baseUri) {
                this.baseUri = baseUri;
            }
            LogApiClient.prototype.search = function (callback) {
                $.ajax({
                    type: 'GET',
                    url: this.baseUri,
                    success: function (data) {
                        callback(data);
                    }
                });
            };
            LogApiClient.prototype.find = function (id, callback) {
                $.ajax({
                    type: 'GET',
                    url: this.baseUri + "/" + id,
                    success: function (data) {
                        callback(data);
                    }
                });
            };
            return LogApiClient;
        })();
        Services.LogApiClient = LogApiClient;        
    })(App.Services || (App.Services = {}));
    var Services = App.Services;
})(App || (App = {}));
//@ sourceMappingURL=logApiClient.js.map
