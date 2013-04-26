var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var App;
(function (App) {
    (function (ViewModels) {
        var LogDetail = (function (_super) {
            __extends(LogDetail, _super);
            function LogDetail(jsonData) {
                        _super.call(this, jsonData);
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
        })(ViewModels.LogSummary);
        ViewModels.LogDetail = LogDetail;        
    })(App.ViewModels || (App.ViewModels = {}));
    var ViewModels = App.ViewModels;
})(App || (App = {}));
