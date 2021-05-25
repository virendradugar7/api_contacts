import { SPHttpClient } from '@microsoft/sp-http';
var searchservice = /** @class */ (function () {
    function searchservice() {
    }
    searchservice.prototype.getSearchResults = function (context, query) {
        var _this = this;
        var url = context.pageContext.web.absoluteUrl + "/_api/search/query?querytext='" + query + "'";
        // let url: string =  context.pageContext.web.absoluteUrl + "/_api/search/query/?query_parameter=";  
        // let tempurl: string ="https://domain07.sharepoint.com/_api/search/query?querytext='Active Users'&selectproperties='User'";  
        var tempurl = context.pageContext.web.absoluteUrl + "/_api/search/query?querytext='" + query + "'&selectproperties='PreferredName'&sourceid='B09A7990-05EA-4AF9-81EF-EDFAB16C4E31'&rowlimit=1000";
        return new Promise(function (resolve, reject) {
            _this._getSearchData(context, tempurl).then(function (res) {
                var searchResp = [];
                console.log(res);
                if (typeof res["odata.error"] !== "undefined") {
                    if (typeof res["odata.error"]["message"] !== "undefined") {
                        Promise.reject(res["odata.error"]["message"].value);
                        return;
                    }
                }
                if (!_this._isNull(res)) {
                    //  const fields: string = "AccountName";  
                    var fields = "PreferredName";
                    if (typeof res.PrimaryQueryResult.RelevantResults.Table !== 'undefined') {
                        if (typeof res.PrimaryQueryResult.RelevantResults.Table.Rows !== 'undefined') {
                            searchResp = _this._setSearchResults(res.PrimaryQueryResult.RelevantResults.Table.Rows, fields);
                        }
                    }
                }
                console.log(searchResp);
                resolve(searchResp);
            });
        });
    };
    searchservice.prototype._getSearchData = function (context, url) {
        return context.spHttpClient.get(url, SPHttpClient.configurations.v1, {
            headers: {
                'odata-version': '3.0'
            }
        }).then(function (res) {
            return res.json();
        }).catch(function (error) {
            console.log("hello error");
            return Promise.reject(JSON.stringify(error));
        });
    };
    searchservice.prototype._setSearchResults = function (crntResults, fields) {
        var temp = [];
        if (crntResults.length > 0) {
            var flds_1 = fields.toLowerCase().split(',');
            crntResults.forEach(function (result) {
                // Create a temp value  
                var val = {};
                result.Cells.forEach(function (cell) {
                    if (flds_1.indexOf(cell.Key.toLowerCase()) !== -1) {
                        // Add key and value to temp value  
                        val[cell.Key] = cell.Value;
                    }
                });
                temp.push(val);
            });
        }
        console.log(temp + "hellotemp");
        return temp;
    };
    searchservice.prototype._isNull = function (value) {
        return value === null || typeof value === "undefined";
    };
    return searchservice;
}());
export { searchservice };
//# sourceMappingURL=searchservice.js.map