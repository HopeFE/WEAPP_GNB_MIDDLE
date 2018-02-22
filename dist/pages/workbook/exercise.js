'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanNoticebar = require('./../../components/zan-noticebar.js');

var _zanNoticebar2 = _interopRequireDefault(_zanNoticebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkbookExercise = function (_wepy$page) {
  _inherits(WorkbookExercise, _wepy$page);

  function WorkbookExercise() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, WorkbookExercise);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WorkbookExercise.__proto__ || Object.getPrototypeOf(WorkbookExercise)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "zanNoticebar1": { "xmlns:v-bind": "", "v-bind:text.once": "longText", "componentId": "static1" } }, _this.$events = {}, _this.components = {
      zanNoticebar1: _zanNoticebar2.default
    }, _this.data = {
      name: '',
      longText: '点错题题号完成记错，提交作业查看我的错题',
      charpterId: '',
      exercise: []
    }, _this.methods = {
      /** 上传错题 */
      _upload: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var answerId, answer, allCorrect, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, nodes, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, questions;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  answerId = []; // 题目ID数组

                  answer = []; // 题目答案数组

                  allCorrect = true; // 全部为真的判断

                  _iteratorNormalCompletion = true;
                  _didIteratorError = false;
                  _iteratorError = undefined;
                  _context.prev = 6;
                  _iterator = this.exercise.nodes[Symbol.iterator]();

                case 8:
                  if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                    _context.next = 32;
                    break;
                  }

                  nodes = _step.value;
                  _iteratorNormalCompletion2 = true;
                  _didIteratorError2 = false;
                  _iteratorError2 = undefined;
                  _context.prev = 13;

                  for (_iterator2 = nodes.questions[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    questions = _step2.value;

                    answerId.push(questions.id);
                    answer.push(questions.answer);
                    if (!questions.answer) allCorrect = false;
                  }
                  _context.next = 21;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context['catch'](13);
                  _didIteratorError2 = true;
                  _iteratorError2 = _context.t0;

                case 21:
                  _context.prev = 21;
                  _context.prev = 22;

                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                  }

                case 24:
                  _context.prev = 24;

                  if (!_didIteratorError2) {
                    _context.next = 27;
                    break;
                  }

                  throw _iteratorError2;

                case 27:
                  return _context.finish(24);

                case 28:
                  return _context.finish(21);

                case 29:
                  _iteratorNormalCompletion = true;
                  _context.next = 8;
                  break;

                case 32:
                  _context.next = 38;
                  break;

                case 34:
                  _context.prev = 34;
                  _context.t1 = _context['catch'](6);
                  _didIteratorError = true;
                  _iteratorError = _context.t1;

                case 38:
                  _context.prev = 38;
                  _context.prev = 39;

                  if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                  }

                case 41:
                  _context.prev = 41;

                  if (!_didIteratorError) {
                    _context.next = 44;
                    break;
                  }

                  throw _iteratorError;

                case 44:
                  return _context.finish(41);

                case 45:
                  return _context.finish(38);

                case 46:
                  _context.next = 48;
                  return this._setExerciseResult(answerId, answer, this.charpterId);

                case 48:
                  if (allCorrect) {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/correct?id=' + this.charpterId + '&name=' + this.name });
                  } else {
                    _wepy2.default.redirectTo({ url: '/pages/workbook/error?id=' + this.charpterId + '&name=' + this.name });
                  }

                case 49:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 34, 38, 46], [13, 17, 21, 29], [22,, 24, 28], [39,, 41, 45]]);
        }));

        function _upload() {
          return _ref2.apply(this, arguments);
        }

        return _upload;
      }(),

      /** 记错的切换 */
      _change: function _change(pindex, index) {
        var answer = this.exercise.nodes[pindex]['questions'][index]['answer'];
        this.exercise.nodes[pindex]['questions'][index]['answer'] = !answer;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(WorkbookExercise, [{
    key: '_getExercise',


    /** 获取章节习题 */
    value: function _getExercise(id) {
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/chapter/exercise',
          data: {
            chapterId: id
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    }

    /** 设置练习结果 */

  }, {
    key: '_setExerciseResult',
    value: function _setExerciseResult(ids, answers, chapterId) {
      _wepy2.default.showLoading({ title: '提交中' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/workbook/chapter/setExercise',
          method: 'POST',
          data: {
            chapterId: chapterId,
            answer: answers,
            answerId: ids
          },
          success: function success(res) {
            resolve(res);
          },
          fail: function fail(err) {
            reject(err);
          },
          complete: function complete() {
            _wepy2.default.hideLoading();
          }
        });
      });
    }
  }, {
    key: 'onLoad',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                wx.setNavigationBarTitle({ title: options.name });
                this.charpterId = options.id;
                this.name = options.name;
                _context2.next = 5;
                return this._getExercise(options.id);

              case 5:
                this.exercise = _context2.sent;

                this.$apply();

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref3.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onReady',
    value: function onReady() {
      this.$invoke('zanNoticebar1', 'initZanNoticeBarScroll');
    }
  }]);

  return WorkbookExercise;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(WorkbookExercise , 'pages/workbook/exercise'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbIldvcmtib29rRXhlcmNpc2UiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ6YW5Ob3RpY2ViYXIxIiwiZGF0YSIsIm5hbWUiLCJsb25nVGV4dCIsImNoYXJwdGVySWQiLCJleGVyY2lzZSIsIm1ldGhvZHMiLCJfdXBsb2FkIiwiYW5zd2VySWQiLCJhbnN3ZXIiLCJhbGxDb3JyZWN0Iiwibm9kZXMiLCJxdWVzdGlvbnMiLCJwdXNoIiwiaWQiLCJfc2V0RXhlcmNpc2VSZXN1bHQiLCJyZWRpcmVjdFRvIiwidXJsIiwiX2NoYW5nZSIsInBpbmRleCIsImluZGV4IiwiJGFwcGx5IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwiY2hhcHRlcklkIiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJlcnIiLCJpZHMiLCJhbnN3ZXJzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1ldGhvZCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJvcHRpb25zIiwid3giLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJfZ2V0RXhlcmNpc2UiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7OzswTUFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGlCQUFnQixFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG9CQUFtQixVQUF0QyxFQUFpRCxlQUFjLFNBQS9ELEVBQWpCLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDO0FBRFUsSyxRQUlaQyxJLEdBQU87QUFDTEMsWUFBTSxFQUREO0FBRUxDLGdCQUFVLHNCQUZMO0FBR0xDLGtCQUFZLEVBSFA7QUFJTEMsZ0JBQVU7QUFKTCxLLFFBT1BDLE8sR0FBVTtBQUNSO0FBQ01DLGFBRkU7QUFBQTtBQUFBOztBQUFB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LHVCQUFXQSxTQURQO0FBRUpqQixvQkFBUXVCLE9BRko7QUFHSnhCLHNCQUFVdUI7QUFITixXQUhLO0FBUVhKLGlCQVJXLG1CQVFGQyxHQVJFLEVBUUc7QUFDWkwsb0JBQVFLLEdBQVI7QUFDRCxXQVZVO0FBV1hDLGNBWFcsZ0JBV0xDLEdBWEssRUFXQTtBQUNUTixtQkFBT00sR0FBUDtBQUNELFdBYlU7QUFjWE0sa0JBZFcsc0JBY0M7QUFDViwyQkFBS0MsV0FBTDtBQUNEO0FBaEJVLFNBQWI7QUFrQkQsT0FuQk0sQ0FBUDtBQW9CRDs7Ozs0RkFFWUMsTzs7Ozs7QUFDWEMsbUJBQUdDLHFCQUFILENBQXlCLEVBQUVOLE9BQU9JLFFBQVFwQyxJQUFqQixFQUF6QjtBQUNBLHFCQUFLRSxVQUFMLEdBQWtCa0MsUUFBUXhCLEVBQTFCO0FBQ0EscUJBQUtaLElBQUwsR0FBWW9DLFFBQVFwQyxJQUFwQjs7dUJBQ3NCLEtBQUt1QyxZQUFMLENBQWtCSCxRQUFReEIsRUFBMUIsQzs7O0FBQXRCLHFCQUFLVCxROztBQUNMLHFCQUFLZ0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUdRO0FBQ1IsV0FBS3FCLE9BQUwsQ0FBYSxlQUFiLEVBQThCLHdCQUE5QjtBQUNEOzs7O0VBaEcyQyxlQUFLQyxJOztrQkFBOUJoRCxnQiIsImZpbGUiOiJleGVyY2lzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB6YW5Ob3RpY2ViYXIgZnJvbSAnQC9jb21wb25lbnRzL3phbi1ub3RpY2ViYXInXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvcmtib29rRXhlcmNpc2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiemFuTm90aWNlYmFyMVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dGV4dC5vbmNlXCI6XCJsb25nVGV4dFwiLFwiY29tcG9uZW50SWRcIjpcInN0YXRpYzFcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHphbk5vdGljZWJhcjE6IHphbk5vdGljZWJhclxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBsb25nVGV4dDogJ+eCuemUmemimOmimOWPt+WujOaIkOiusOmUme+8jOaPkOS6pOS9nOS4muafpeeci+aIkeeahOmUmemimCcsXG4gICAgY2hhcnB0ZXJJZDogJycsXG4gICAgZXhlcmNpc2U6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIC8qKiDkuIrkvKDplJnpopggKi9cbiAgICBhc3luYyBfdXBsb2FkICgpIHtcbiAgICAgIGxldCBhbnN3ZXJJZCA9IFtdICAgICAvLyDpopjnm65JROaVsOe7hFxuICAgICAgbGV0IGFuc3dlciA9IFtdICAgICAgIC8vIOmimOebruetlOahiOaVsOe7hFxuICAgICAgbGV0IGFsbENvcnJlY3QgPSB0cnVlIC8vIOWFqOmDqOS4uuecn+eahOWIpOaWrVxuICAgICAgZm9yIChsZXQgbm9kZXMgb2YgdGhpcy5leGVyY2lzZS5ub2Rlcykge1xuICAgICAgICBmb3IgKGxldCBxdWVzdGlvbnMgb2Ygbm9kZXMucXVlc3Rpb25zKSB7XG4gICAgICAgICAgYW5zd2VySWQucHVzaChxdWVzdGlvbnMuaWQpXG4gICAgICAgICAgYW5zd2VyLnB1c2gocXVlc3Rpb25zLmFuc3dlcilcbiAgICAgICAgICBpZiAoIXF1ZXN0aW9ucy5hbnN3ZXIpIGFsbENvcnJlY3QgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCB0aGlzLl9zZXRFeGVyY2lzZVJlc3VsdChhbnN3ZXJJZCwgYW5zd2VyLCB0aGlzLmNoYXJwdGVySWQpXG4gICAgICBpZiAoYWxsQ29ycmVjdCkge1xuICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe3VybDogYC9wYWdlcy93b3JrYm9vay9jb3JyZWN0P2lkPSR7dGhpcy5jaGFycHRlcklkfSZuYW1lPSR7dGhpcy5uYW1lfWB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5yZWRpcmVjdFRvKHt1cmw6IGAvcGFnZXMvd29ya2Jvb2svZXJyb3I/aWQ9JHt0aGlzLmNoYXJwdGVySWR9Jm5hbWU9JHt0aGlzLm5hbWV9YH0pXG4gICAgICB9XG4gICAgfSxcbiAgICAvKiog6K6w6ZSZ55qE5YiH5o2iICovXG4gICAgX2NoYW5nZSAocGluZGV4LCBpbmRleCkge1xuICAgICAgbGV0IGFuc3dlciA9IHRoaXMuZXhlcmNpc2Uubm9kZXNbcGluZGV4XVsncXVlc3Rpb25zJ11baW5kZXhdWydhbnN3ZXInXVxuICAgICAgdGhpcy5leGVyY2lzZS5ub2Rlc1twaW5kZXhdWydxdWVzdGlvbnMnXVtpbmRleF1bJ2Fuc3dlciddID0gIWFuc3dlclxuICAgICAgdGhpcy4kYXBwbHkoKVxuICAgIH1cbiAgfVxuXG4gIC8qKiDojrflj5bnq6DoioLkuaDpopggKi9cbiAgX2dldEV4ZXJjaXNlIChpZCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9leGVyY2lzZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjaGFwdGVySWQ6IGlkXG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3MgKHJlcykge1xuICAgICAgICAgIHJlc29sdmUocmVzKVxuICAgICAgICB9LFxuICAgICAgICBmYWlsIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKiog6K6+572u57uD5Lmg57uT5p6cICovXG4gIF9zZXRFeGVyY2lzZVJlc3VsdCAoaWRzLCBhbnN3ZXJzLCBjaGFwdGVySWQpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHt0aXRsZTogJ+aPkOS6pOS4rSd9KVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwczovL21pZC5ndWluYWJlbi5jb20vd29ya2Jvb2svY2hhcHRlci9zZXRFeGVyY2lzZScsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgY2hhcHRlcklkOiBjaGFwdGVySWQsXG4gICAgICAgICAgYW5zd2VyOiBhbnN3ZXJzLFxuICAgICAgICAgIGFuc3dlcklkOiBpZHNcbiAgICAgICAgfSxcbiAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlICgpIHtcbiAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogb3B0aW9ucy5uYW1lIH0pXG4gICAgdGhpcy5jaGFycHRlcklkID0gb3B0aW9ucy5pZFxuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZVxuICAgIHRoaXMuZXhlcmNpc2UgPSBhd2FpdCB0aGlzLl9nZXRFeGVyY2lzZShvcHRpb25zLmlkKVxuICAgIHRoaXMuJGFwcGx5KClcbiAgfVxuXG4gIG9uUmVhZHkoKSB7XG4gICAgdGhpcy4kaW52b2tlKCd6YW5Ob3RpY2ViYXIxJywgJ2luaXRaYW5Ob3RpY2VCYXJTY3JvbGwnKVxuICB9XG59XG4iXX0=