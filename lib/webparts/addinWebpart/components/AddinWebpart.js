var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { DetailsList, } from '@fluentui/react/lib/DetailsList';
import { Icon } from '@fluentui/react/lib/Icon';
import { getTheme, mergeStyleSets } from '@fluentui/react/lib/Styling';
import styles from './AddinWebpart.module.scss';
import { searchservice } from "../../Services/searchservice";
var ROW_HEIGHT = 42; // from DEFAULT_ROW_HEIGHTS in DetailsRow.styles.ts
var GROUP_HEADER_AND_FOOTER_SPACING = 8;
var GROUP_HEADER_AND_FOOTER_BORDER_WIDTH = 1;
var GROUP_HEADER_HEIGHT = 100;
var GROUP_FOOTER_HEIGHT = GROUP_HEADER_AND_FOOTER_SPACING * 4 + GROUP_HEADER_AND_FOOTER_BORDER_WIDTH * 2;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var theme = getTheme();
var classNames = mergeStyleSets({
    headerAndFooter: {
        borderTop: GROUP_HEADER_AND_FOOTER_BORDER_WIDTH + "px solid " + theme.palette.neutralQuaternary,
        borderBottom: GROUP_HEADER_AND_FOOTER_BORDER_WIDTH + "px solid " + theme.palette.neutralQuaternary,
        padding: GROUP_HEADER_AND_FOOTER_SPACING,
        margin: GROUP_HEADER_AND_FOOTER_SPACING + "px 0",
        background: theme.palette.neutralLighterAlt,
        // Overlay the sizer bars
        position: 'relative',
        zIndex: 100,
    },
    headerTitle: {
        display: 'inline-flex'
    },
    headerLinkSet: {
        margin: '4px -8px',
    },
    icon: {
        padding: '2%',
        margin: '1%',
        height: '10px',
        width: '10px',
        border: '1px black solid',
        cursor: 'pointer'
    },
    active: {
        padding: '2%',
        margin: '1%',
        height: '10px',
        width: '10px',
        border: '1px black solid',
        cursor: 'pointer',
        background: 'blue'
    },
    sort: {
        cursor: 'pointer',
        marginLeft: '95%'
    },
    headerLink: {
        margin: '0 8px',
    },
});
var b;
var flag = 1;
var ITEMS_PER_GROUP = 24;
var GROUP_COUNT = 24;
var AddinWebpart = /** @class */ (function (_super) {
    __extends(AddinWebpart, _super);
    function AddinWebpart(props) {
        var _this = _super.call(this, props) || this;
        _this.wlist = [];
        _this.fill = function (e) {
            console.log(e.target.className);
            if (e.target.classList == 'active-114') {
                console.log("hello from classname");
                _this.setState({ items: _this.wlist, filtered: false, letter: '' });
                e.target.className = classNames.icon;
                b = null;
            }
            else {
                _this.filtering(e.target.innerHTML);
                e.target.className = classNames.active;
                if (b != null) {
                    b.className = classNames.icon;
                }
                b = e.target;
            }
        };
        _this._getGroupTotalRowHeight = function (group) {
            return group.isCollapsed ? 0 : ROW_HEIGHT * group.count;
        };
        _this._getGroupHeight = function (group, _groupIndex) {
            return GROUP_HEADER_HEIGHT + GROUP_FOOTER_HEIGHT + _this._getGroupTotalRowHeight(group);
        };
        _this.state = { items: [], filtered: false, letter: '' };
        _this.searchservice = new searchservice();
        return _this;
    }
    AddinWebpart.prototype.sort = function () {
        console.log("helll sort");
        if (flag == 1) {
            var temp = this.wlist; //copying the state variables and current values in temp boject variable 
            temp = temp.reverse(); //revers
            this.setState({ items: temp }); //just changing the required varibale
            flag = 0;
        }
        else {
            this.setState({ items: this.wlist });
            flag = 1;
        }
    };
    AddinWebpart.prototype.filtering = function (letter) {
        console.log("hello from filtering");
        var upletter = letter.toUpperCase();
        var x = this.wlist.filter(function (i) {
            console.log(i.PreferredName[0], letter);
            return i.PreferredName[0] == letter || i.PreferredName[0] == upletter;
        });
        console.log(x), "xxxx";
        this.setState({ letter: letter, filtered: true, items: x });
    };
    AddinWebpart.prototype.componentDidMount = function () {
        var _this = this;
        this.searchservice.getSearchResults(this.props.context, '*').then(function (result) {
            _this.wlist = result;
            console.log(result, "result");
            result.sort(function (a, b) {
                if (a.PreferredName[0] > b.PreferredName[0])
                    return 1;
                if (a.PreferredName[0] < b.PreferredName[0])
                    return -1;
                return 0;
            });
            console.log(result, "result");
            _this.setState({ items: result });
        });
    };
    AddinWebpart.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.addinWebpart },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: classNames.headerAndFooter },
                    React.createElement("div", { className: classNames.headerTitle }, alphabet.map(function (alpha) { return (React.createElement("p", { className: classNames.icon, onClick: _this.fill }, alpha)); })),
                    React.createElement("div", { className: classNames.headerLinkSet },
                        React.createElement(Icon, { iconName: "Sort", className: classNames.sort, onClick: this.sort }))),
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement(DetailsList, { items: this.state.items, getGroupHeight: this._getGroupHeight }))))));
    };
    return AddinWebpart;
}(React.Component));
export default AddinWebpart;
//# sourceMappingURL=AddinWebpart.js.map