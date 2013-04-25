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
                    var summaries = [];
                    for(var i = 0; i < data.length; i++) {
                        summaries.push(new App.ViewModels.LogSummary(data[i]));
                    }
                    _this.logs(summaries);
                };
                this.select = function (selectedItem) {
                    location.hash = selectedItem.id.toString();
                };
                this.setSelected = function (data) {
                    _this.selected(new App.ViewModels.LogDetail(data));
                };
            }
            return LogViewer;
        })();
        ViewModels.LogViewer = LogViewer;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
//@ sourceMappingURL=logViewer.js.map
