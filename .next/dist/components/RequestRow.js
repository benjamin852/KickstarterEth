'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/benweinberg/Desktop/Work/Ethereum/Udemy/GriderCourse/kickstart2/components/RequestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context.sent;
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var campaign, accounts;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 3;
                            return _web2.default.eth.getAccounts();

                        case 3:
                            accounts = _context2.sent;
                            _context2.next = 6;
                            return campaign.methods.finaizeRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 6:
                            ;

                        case 7:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell; //grab row and cell from table object

            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount; //these values will come from this.props.    

            var readyToFinalize = request.approvalCount > approversCount / 2;
            return (
                //true displabled will gray out our row 
                //true positive will highgight our row
                _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 30
                    }
                }, _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 32
                    }
                }, id), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                    }
                }, request.description), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }, request.recipient), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }, request.approvalCount), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }, request.approvalCount, '/', approversCount), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                }, request.complete ? null : //if complete is true return null (hide the button)
                _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 40
                    }
                }, 'Approve')), _react2.default.createElement(Cell, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', basic: true, onClick: this.onFinalize, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, 'Finalize')))
            );
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIm9uQXBwcm92ZSIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsImlkIiwic2VuZCIsImZyb20iLCJvbkZpbmFsaXplIiwiZmluYWl6ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsImFwcHJvdmVyc0NvdW50IiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImNvbXBsZXRlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFDRixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFDRjtBQURFLHVDQUNTLHdCQUFTLE1BQUEsQUFBSyxNQUR2QixBQUNTLEFBQW9COzRDQUQ3QjttQ0FFZSxjQUFBLEFBQUssSUFGcEIsQUFFZSxBQUFTOzs2QkFBMUI7QUFGRSxnREFBQTs0Q0FBQTs0Q0FHRixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBSkYsQUFHRixBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFIRTs2QkFBQTs0Q0FBQTs7QUFBQTt3QkFBQTtBLG1CLEFBUVosc0ZBQWEsb0JBQUE7MEJBQUE7NEVBQUE7MEJBQUE7dURBQUE7NkJBQ0g7QUFERyx1Q0FDUSx3QkFBUyxNQUFBLEFBQUssTUFEdEIsQUFDUSxBQUFvQjs2Q0FENUI7bUNBRWMsY0FBQSxBQUFLLElBRm5CLEFBRWMsQUFBUzs7NkJBQTFCO0FBRkcsaURBQUE7NkNBQUE7NENBR0gsQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDO3NDQUMzQyxTQUpELEFBR0gsQUFBb0QsQUFDaEQsQUFBUztBQUR1QyxBQUN0RCw2QkFERTs7NkJBRUg7QUFMTTs7NkJBQUE7NkJBQUE7NkNBQUE7O0FBQUE7eUJBQUE7QTs7Ozs7aUNBUUo7Z0JBQUEsQUFDRSxNQURGLEFBQ2UsdUJBRGYsQUFDRTtnQkFERixBQUNPLE9BRFAsQUFDZSx1QkFEZixBQUNPLE1BRFAsQUFDc0I7O3lCQUNXLEtBRmpDLEFBRXNDO2dCQUZ0QyxBQUVFLFlBRkYsQUFFRTtnQkFGRixBQUVNLGlCQUZOLEFBRU07Z0JBRk4sQUFFZSx3QkFGZixBQUVlLGdCQUE4QixBQUNsRDs7Z0JBQU0sa0JBQWtCLFFBQUEsQUFBUSxnQkFBZ0IsaUJBQWhELEFBQWlFLEFBQ2pFO0FBQ0k7QUFDQTtBQUNBO2dDQUFDLGNBQUQsT0FBSyxVQUFZLFFBQWpCLEFBQXlCLFVBQVUsVUFBWSxtQkFBbUIsQ0FBQyxRQUFuRSxBQUEyRTtrQ0FBM0U7b0NBQUEsQUFFSTtBQUZKO21DQUVLLGNBQUQ7O2tDQUFBO29DQUFBLEFBQU87QUFBUDtBQUFBLG1CQUZKLEFBRUksQUFDQSxxQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFISixBQUdJLEFBQWUsQUFDZiw4QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSxpQ0FBTyxBQUFLLE1BQUwsQUFBVyxRQUFRLFFBQW5CLEFBQTJCLE9BSnRDLEFBSUksQUFBTyxBQUFrQyxBQUN6QywyQkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFMSixBQUtJLEFBQWUsQUFDZiw0QkFBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFOSixBQU1JLEFBQWUsQUFDZixnQ0FBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUFPO0FBQVA7QUFBQSwyQkFBQSxBQUFlLGVBQWdCLEtBUG5DLEFBT0ksQUFDQSxpQ0FBQyxjQUFEOztrQ0FBQTtvQ0FBQSxBQUNLO0FBREw7QUFBQSwyQkFDSyxBQUFRLFdBQVIsQUFBbUIsT0FBUyxBQUM3QjtnQ0FBQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVcsS0FBdkMsQUFBNEM7a0NBQTVDO29DQUFBO0FBQUE7bUJBVlIsQUFRSSxBQUVJLEFBS0osNkJBQUMsY0FBRDs7a0NBQUE7b0NBQUEsQUFDSztBQURMO0FBQUEsMkJBQ0ssQUFBUSxXQUFSLEFBQW1CLHVCQUNwQixBQUFDLHlDQUFPLE9BQVIsQUFBZ0IsUUFBTyxPQUF2QixNQUE2QixTQUFTLEtBQXRDLEFBQTJDO2tDQUEzQztvQ0FBQTtBQUFBO2lCQUFBLEVBcEJaLEFBR0ksQUFlSSxBQUVJLEFBT2Y7Ozs7OztBQWhEb0IsQSxBQW1EekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYmVud2VpbmJlcmcvRGVza3RvcC9Xb3JrL0V0aGVyZXVtL1VkZW15L0dyaWRlckNvdXJzZS9raWNrc3RhcnQyIn0=