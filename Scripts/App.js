"use strict";
/// <reference path="typings/SharePoint/SharePoint.d.ts"/>
/// <reference path="typings/jQuery/jquery.d.ts"/>
const React = require("react");
const element_1 = require("./element");
class Monkey {
    monkey() {
        var queryTerms = "*";
        var s = _spPageContextInfo.siteAbsoluteUrl + "/_api/search/query?querytext='" + queryTerms + "'&selectproperties='AccountName'&sourceid='B09A7990-05EA-4AF9-81EF-EDFAB16C4E31'&rowlimit=1000";
        var arr = ["he"];
        console.log(s);
        $.ajax({
            url: s,
            method: "GET",
            headers: {
                "accept": "application/json;odata=verbose",
            },
            success: function (data) {
                var results = data.d.query.PrimaryQueryResult.RelevantResults.Table.Rows.results;
                console.log(data, results);
                var html = "<table>";
                for (var i = 0; i < results.length; i++) {
                    //  $('#message').append(results[i].Cells.results[2].Value)
                    //  $('#message').append('<br>')
                    arr[i] = results[i].Cells.results[2].Value;
                }
            },
            error: function (err) {
                alert(JSON.stringify(err));
            }
        });
        const ele = React.createElement(element_1.default, {
            User: arr
        });
        $('#message').append(ele);
    }
}
exports.default = Monkey;
var x = new Monkey;
x.monkey();
//# sourceMappingURL=app.js.map