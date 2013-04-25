var App;
(function (App) {
    /// <reference path="../interfaces.ts" />
    (function (ViewModels) {
        var LogSummary = (function () {
            function LogSummary(jsonData) {
                this.id = jsonData.id;
                this.eventDate = jsonData.eventDate;
                this.level = jsonData.level;
                this.message = jsonData.message;
            }
            Object.defineProperty(LogSummary.prototype, "rowClass", {
                get: function () {
                    switch(this.level) {
                        case "ERROR":
                            return "error";
                        case "WARN":
                            return "warning";
                        default:
                            return "info";
                    }
                },
                enumerable: true,
                configurable: true
            });
            return LogSummary;
        })();
        ViewModels.LogSummary = LogSummary;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
//@ sourceMappingURL=logSummary.js.map
