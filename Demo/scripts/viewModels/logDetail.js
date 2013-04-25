var App;
(function (App) {
    /// <reference path="../interfaces.ts" />
    (function (ViewModels) {
        var LogDetail = (function () {
            function LogDetail(jsonData) {
                this.id = jsonData.id;
                this.eventDate = jsonData.eventDate;
                this.level = jsonData.level;
                this.message = jsonData.message;
                this.appDomain = jsonData.appDomain;
                this.thread = jsonData.thread;
            }
            LogDetail.prototype.levelClass = function () {
                switch(this.level) {
                    case "ERROR":
                        return "label-important";
                    case "WARN":
                        return "label-warning";
                    default:
                        return "label-info";
                }
            };
            return LogDetail;
        })();
        ViewModels.LogDetail = LogDetail;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
//@ sourceMappingURL=logDetail.js.map
