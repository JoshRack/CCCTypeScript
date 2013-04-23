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
//@ sourceMappingURL=logViewer.js.map
