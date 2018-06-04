webpackHotUpdate(6,{

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(70);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(552);

var _Layout = __webpack_require__(1432);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(869);

var _campaign = __webpack_require__(1244);

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = __webpack_require__(1436);

var _RequestRow2 = _interopRequireDefault(_RequestRow);

var _http = __webpack_require__(1439);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/benweinberg/Desktop/Work/Ethereum/Udemy/GriderCourse/kickstart2/pages/campaigns/requests/index.js?entry';
//will show a list of requests to the user


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: 'renderRow',

        //iterate each request
        //return row for each rewquest
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                //"Arrow func called with each reuqest"
                return _react2.default.createElement(_RequestRow2.default, {
                    key: index,
                    id: index,
                    request: request //the request we wanna render
                    , address: _this2.props.address,
                    approversCount: _this2.props.approversCount,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Request Index'), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, float: 'right', style: { margin: 10 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'Add Request'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, 'Description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, 'Approval Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Found ', this.props.requestCount, ' requests '));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, approversCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.approversCount().call();

                            case 7:
                                approversCount = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(requestCount).fill().map(function (elemnt, index) {
                                    //retrives an individual request at a certain index     //element&index allow the array to count up to a given index
                                    return campaign.methods.requests(index).call();

                                    //  Array(parseInt(requestCount))
                                }));

                            case 10:
                                requests = _context.sent;

                                console.log(requests);

                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, approversCount: approversCount });

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsInJlcXVlc3QiLCJSZXF1ZXN0SW5kZXgiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwiaW5kZXgiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsIm1hcmdpbiIsInJlbmRlclJvdyIsInJlcXVlc3RDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJhbGwiLCJBcnJheSIsImZpbGwiLCJlbGVtbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUTs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVEsQUFBVzs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBUzs7Ozs7QUFQVDs7O0ksQUFTTTs7Ozs7Ozs7OzthQXFCRjs7QUFDRjs7b0NBQ2M7eUJBQ1I7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFBRTtBQUNqRDt1Q0FDSSxBQUFDO3lCQUFELEFBQ1csQUFDUDt3QkFGSixBQUVVLEFBQ047NkJBSEosQUFHZSxRQUhmLEFBR3VCO0FBRm5CLHNCQUdBLFNBQVcsT0FBQSxBQUFLLE1BSnBCLEFBSTBCLEFBQ3RCO29DQUFrQixPQUFBLEFBQUssTUFMM0IsQUFLaUM7O2tDQUxqQztvQ0FESixBQUNJLEFBUVA7QUFSTztpQkFBQTtBQUZSLEFBQU8sQUFXVixhQVhVOzs7O2lDQWFGO2dCQUFBLEFBQ0UsU0FERixBQUNtQyx1QkFEbkMsQUFDRTtnQkFERixBQUNVLE1BRFYsQUFDbUMsdUJBRG5DLEFBQ1U7Z0JBRFYsQUFDZSxhQURmLEFBQ21DLHVCQURuQyxBQUNlO2dCQURmLEFBQzJCLE9BRDNCLEFBQ21DLHVCQURuQyxBQUMyQixBQUNoQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBRUEsa0NBQUEsQUFBQyw4QkFBSyx1QkFBdUIsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLFVBQXhDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsT0FBaEIsQUFBc0IsU0FBUSxPQUFTLEVBQUMsUUFBeEMsQUFBdUMsQUFBUzs4QkFBaEQ7Z0NBQUE7QUFBQTtlQUxaLEFBR0ksQUFDSSxBQUNJLEFBR1Asa0NBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxtQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFHUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFwQlQsQUFRSyxBQVlJLEFBQ0ssQUFBSyxBQUdmLCtCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFZLGVBQUEsQUFBSyxNQUFqQixBQUF1QixjQXpCL0IsQUFDSSxBQXdCSSxBQUdYOzs7OztpSEFqRTRCLEE7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUFsQixBLEFBQ0Y7QSwyQ0FBVyx3QkFBQSxBLEFBQVM7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBQUFvQyxBOztpQ0FBekQ7QTs7dUNBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGlCQUFqQixBQUFrQyxBOztpQ0FBekQ7QTs7eURBRWlCLEFBQVEsVUFDM0IsQUFBTSxjQUFOLEFBQW9CLE9BQXBCLEFBQTJCLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxPQUFVLEFBQUU7QUFDaEQ7MkNBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUV4Qzs7QUFDSDtBQUxrQixBQUNuQixBLGlDQUFBLENBRG1COztpQ0FBakI7QSxvREFPTjs7d0NBQUEsQUFBUSxJQUFSLEFBQVk7O2lFQUVMLEVBQUUsU0FBRixTQUFXLFVBQVgsVUFBcUIsY0FBckIsY0FBbUMsZ0IsQUFBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFqQlksQSxBQXNFM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2JlbndlaW5iZXJnL0Rlc2t0b3AvV29yay9FdGhlcmV1bS9VZGVteS9HcmlkZXJDb3Vyc2Uva2lja3N0YXJ0MiJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/benweinberg/Desktop/Work/Ethereum/Udemy/GriderCourse/kickstart2/pages/campaigns/requests/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/benweinberg/Desktop/Work/Ethereum/Udemy/GriderCourse/kickstart2/pages/campaigns/requests/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/requests")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wNDU0ZTQ0NTY3MDlmZmVjNGI5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzPzA2ZDRkYzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy93aWxsIHNob3cgYSBsaXN0IG9mIHJlcXVlc3RzIHRvIHRoZSB1c2VyXG5pbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQge0xpbmt9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xuaW1wb3J0IFJlcXVlc3RSb3cgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9SZXF1ZXN0Um93JztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdodHRwJztcblxuY2xhc3MgUmVxdWVzdEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBhZGRyZXNzIH0gPSBwcm9wcy5xdWVyeTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcbiAgICAgICAgY29uc3QgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0c0NvdW50KCkuY2FsbCgpOyBcbiAgICAgICAgY29uc3QgYXBwcm92ZXJzQ291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVyc0NvdW50KCkuY2FsbCgpO1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBBcnJheShyZXF1ZXN0Q291bnQpLmZpbGwoKS5tYXAoKGVsZW1udCwgaW5kZXgpID0+IHsgLy9yZXRyaXZlcyBhbiBpbmRpdmlkdWFsIHJlcXVlc3QgYXQgYSBjZXJ0YWluIGluZGV4ICAgICAvL2VsZW1lbnQmaW5kZXggYWxsb3cgdGhlIGFycmF5IHRvIGNvdW50IHVwIHRvIGEgZ2l2ZW4gaW5kZXhcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gIEFycmF5KHBhcnNlSW50KHJlcXVlc3RDb3VudCkpXG4gICAgICAgICAgICB9KSAgICBcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVxdWVzdHMpOyBcblxuICAgICAgICByZXR1cm4geyBhZGRyZXNzLCByZXF1ZXN0cywgcmVxdWVzdENvdW50LCBhcHByb3ZlcnNDb3VudCB9OyBcbiAgICBcbiAgICB9IFxuICAgIFxuICAgIC8vaXRlcmF0ZSBlYWNoIHJlcXVlc3RcbiAgLy9yZXR1cm4gcm93IGZvciBlYWNoIHJld3F1ZXN0XG4gICAgcmVuZGVyUm93KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5yZXF1ZXN0cy5tYXAoKHJlcXVlc3QsIGluZGV4KSA9PiB7IC8vXCJBcnJvdyBmdW5jIGNhbGxlZCB3aXRoIGVhY2ggcmV1cWVzdFwiXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxSZXF1ZXN0Um93XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgaWQgPSB7aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3QgPSB7cmVxdWVzdH0vL3RoZSByZXF1ZXN0IHdlIHdhbm5hIHJlbmRlclxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzID0ge3RoaXMucHJvcHMuYWRkcmVzc31cbiAgICAgICAgICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgPSB7dGhpcy5wcm9wcy5hcHByb3ZlcnNDb3VudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7SGVhZGVyLCBSb3csIEhlYWRlckNlbGwsIEJvZHl9ID0gVGFibGU7IFxuICAgICAgICByZXR1cm4gKCAgICAgICAgICAgIFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8aDM+UmVxdWVzdCBJbmRleDwvaDM+XG4gXG4gICAgICAgICAgICAgICAgPExpbmsgcm91dGUgPSB7YC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLmFkZHJlc3N9L3JlcXVlc3RzL25ld2B9PlxuICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBmbG9hdD1cInJpZ2h0XCIgc3R5bGUgPSB7e21hcmdpbjogMTB9fT5BZGQgUmVxdWVzdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgIDxCb2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclJvdygpfVxuICAgICAgICAgICAgICAgICAgICAgPC9Cb2R5PlxuICAgICAgICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdj5Gb3VuZCB7dGhpcy5wcm9wcy5yZXF1ZXN0Q291bnR9IHJlcXVlc3RzIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdEluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7QUFSQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUlBOztBQUxBO0FBUUE7QUFSQTtBQUFBO0FBU0E7Ozs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUE3REE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBSkE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9