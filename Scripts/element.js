"use strict";

const React = require("react");
class element extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("p", null, "hello from the tsx file "));
    }
}
exports.default = element;
//# sourceMappingURL=element.js.map