var App;
(function (App) {
    (function (ViewModels) {
        var LogViewer = (function () {
            function LogViewer() {
                var _this = this;
                this.logs = ko.observableArray();
                this.loadSearchResults = function (data) {
                    _this.logs(data);
                };
                this.loadDetail = function (data) {
                    _this.selected(data);
                };
            }
            return LogViewer;
        })();
        ViewModels.LogViewer = LogViewer;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
