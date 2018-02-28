'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _zanField = require('./../../components/zan-field.js');

var _zanField2 = _interopRequireDefault(_zanField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gradeList = ['七年级', '八年级'];

var MyInfo = function (_wepy$page) {
  _inherits(MyInfo, _wepy$page);

  function MyInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MyInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MyInfo.__proto__ || Object.getPrototypeOf(MyInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人资料'
    }, _this.$repeat = {}, _this.$props = { "nameField": { "xmlns:v-bind": "", "v-bind:options.sync": "base_name", "componentId": "nameField" }, "sexField": { "v-bind:options.once": "base_sex", "componentId": "sexField" }, "schoolField": { "v-bind:options.sync": "base_school", "componentId": "schoolField" } }, _this.$events = {}, _this.components = {
      nameField: _zanField2.default,
      sexField: _zanField2.default,
      schoolField: _zanField2.default
    }, _this.data = {
      gradeIndex: Number(_wepy2.default.getStorageSync('User').grade) - 7,
      gradeList: gradeList,
      base_school: {
        title: '学校',
        value: _wepy2.default.getStorageSync('User').school,
        placeholder: '请输入您的学校名称'
      },
      base_name: {
        title: '姓名',
        value: _wepy2.default.getStorageSync('User').name,
        placeholder: '请输入您的姓名'
      },
      base_sex: {
        title: '性别',
        value: Number(_wepy2.default.getStorageSync('User').sex) === 1 ? '男' : '女',
        disabled: true
      }
    }, _this.events = {
      zanFieldChange: function zanFieldChange(e) {
        var componentId = e.componentId,
            detail = e.detail;

        if (componentId === 'nameField') {
          this.base_name.value = detail.value;
        } else if (componentId === 'schoolField') {
          this.base_school.value = detail.value;
        }
        this.$apply();
      }
    }, _this.methods = {
      bindGradeChange: function bindGradeChange(e) {
        this.gradeIndex = e.detail.value;
      },
      _save: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var user;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  user = {
                    grade: Number(this.gradeIndex) + 7,
                    name: this.base_name.value,
                    school: this.base_school.value
                  };
                  _context.next = 3;
                  return this._setUserInfo(user);

                case 3:
                  _wepy2.default.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000,
                    success: function success() {
                      _wepy2.default.navigateBack();
                    }
                  });

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _save() {
          return _ref2.apply(this, arguments);
        }

        return _save;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MyInfo, [{
    key: '_setUserInfo',


    /** 设置用户信息 */
    value: function _setUserInfo(user) {
      _wepy2.default.showLoading({ title: '请稍候' });
      return new Promise(function (resolve, reject) {
        _wepy2.default.request({
          url: 'https://mid.guinaben.com/member/infoEdit',
          method: 'POST',
          data: {
            grade: user.grade,
            name: user.name,
            school: user.school
          },
          success: function success(res) {
            _wepy2.default.hideLoading();
            _wepy2.default.setStorageSync('User', res);
            resolve(res);
          },
          fail: function fail(err) {
            _wepy2.default.hideLoading();
            reject(err);
          }
        });
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.base_name.value = _wepy2.default.getStorageSync('User').name;
      this.base_school.value = _wepy2.default.getStorageSync('User').school;
      this.gradeIndex = Number(_wepy2.default.getStorageSync('User').grade) - 7;
      this.$apply();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        console.log(res.target);
      }
      return {
        title: '各位家长，用这个记错题，速度快，用处大',
        path: '/pages/my/index'
      };
    }
  }]);

  return MyInfo;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MyInfo , 'pages/my/info'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uanMiXSwibmFtZXMiOlsiZ3JhZGVMaXN0IiwiTXlJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIm5hbWVGaWVsZCIsInNleEZpZWxkIiwic2Nob29sRmllbGQiLCJkYXRhIiwiZ3JhZGVJbmRleCIsIk51bWJlciIsImdldFN0b3JhZ2VTeW5jIiwiZ3JhZGUiLCJiYXNlX3NjaG9vbCIsInRpdGxlIiwidmFsdWUiLCJzY2hvb2wiLCJwbGFjZWhvbGRlciIsImJhc2VfbmFtZSIsIm5hbWUiLCJiYXNlX3NleCIsInNleCIsImRpc2FibGVkIiwiZXZlbnRzIiwiemFuRmllbGRDaGFuZ2UiLCJlIiwiY29tcG9uZW50SWQiLCJkZXRhaWwiLCIkYXBwbHkiLCJtZXRob2RzIiwiYmluZEdyYWRlQ2hhbmdlIiwiX3NhdmUiLCJ1c2VyIiwiX3NldFVzZXJJbmZvIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic3VjY2VzcyIsIm5hdmlnYXRlQmFjayIsInNob3dMb2FkaW5nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicmVzIiwiaGlkZUxvYWRpbmciLCJzZXRTdG9yYWdlU3luYyIsImZhaWwiLCJlcnIiLCJmcm9tIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInBhdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFlBQVksQ0FBQyxLQUFELEVBQVEsS0FBUixDQUFsQjs7SUFFcUJDLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix1QkFBc0IsV0FBekMsRUFBcUQs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QUtDLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJGLEdBQTVCO0FBQ0FMLG9CQUFRSyxHQUFSO0FBQ0QsV0FaVTtBQWFYRyxjQWJXLGdCQWFMQyxHQWJLLEVBYUE7QUFDVCwyQkFBS0gsV0FBTDtBQUNBTCxtQkFBT1EsR0FBUDtBQUNEO0FBaEJVLFNBQWI7QUFrQkQsT0FuQk0sQ0FBUDtBQW9CRDs7OzZCQUVTO0FBQ1IsV0FBS2hDLFNBQUwsQ0FBZUgsS0FBZixHQUF1QixlQUFLSixjQUFMLENBQW9CLE1BQXBCLEVBQTRCUSxJQUFuRDtBQUNBLFdBQUtOLFdBQUwsQ0FBaUJFLEtBQWpCLEdBQXlCLGVBQUtKLGNBQUwsQ0FBb0IsTUFBcEIsRUFBNEJLLE1BQXJEO0FBQ0EsV0FBS1AsVUFBTCxHQUFrQkMsT0FBTyxlQUFLQyxjQUFMLENBQW9CLE1BQXBCLEVBQTRCQyxLQUFuQyxJQUE0QyxDQUE5RDtBQUNBLFdBQUtnQixNQUFMO0FBQ0Q7OztzQ0FFa0JrQixHLEVBQUs7QUFDdEIsVUFBSUEsSUFBSUssSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCQyxnQkFBUUMsR0FBUixDQUFZUCxJQUFJUSxNQUFoQjtBQUNEO0FBQ0QsYUFBTztBQUNMeEMsZUFBTyxxQkFERjtBQUVMeUMsY0FBTTtBQUZELE9BQVA7QUFJRDs7OztFQTVHaUMsZUFBS0MsSTs7a0JBQXBCMUQsTSIsImZpbGUiOiJpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCB6YW5GaWVsZCBmcm9tICdAL2NvbXBvbmVudHMvemFuLWZpZWxkJ1xuXG4gIGNvbnN0IGdyYWRlTGlzdCA9IFsn5LiD5bm057qnJywgJ+WFq+W5tOe6pyddXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Liq5Lq66LWE5paZJ1xuICAgIH1cblxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJuYW1lRmllbGRcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOm9wdGlvbnMuc3luY1wiOlwiYmFzZV9uYW1lXCIsXCJjb21wb25lbnRJZFwiOlwibmFtZUZpZWxkXCJ9LFwic2V4RmllbGRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5vbmNlXCI6XCJiYXNlX3NleFwiLFwiY29tcG9uZW50SWRcIjpcInNleEZpZWxkXCJ9LFwic2Nob29sRmllbGRcIjp7XCJ2LWJpbmQ6b3B0aW9ucy5zeW5jXCI6XCJiYXNlX3NjaG9vbFwiLFwiY29tcG9uZW50SWRcIjpcInNjaG9vbEZpZWxkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIG5hbWVGaWVsZDogemFuRmllbGQsXG4gICAgICBzZXhGaWVsZDogemFuRmllbGQsXG4gICAgICBzY2hvb2xGaWVsZDogemFuRmllbGRcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgZ3JhZGVJbmRleDogTnVtYmVyKHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ1VzZXInKS5ncmFkZSkgLSA3LFxuICAgICAgZ3JhZGVMaXN0OiBncmFkZUxpc3QsXG4gICAgICBiYXNlX3NjaG9vbDoge1xuICAgICAgICB0aXRsZTogJ+WtpuagoScsXG4gICAgICAgIHZhbHVlOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuc2Nob29sLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ+ivt+i+k+WFpeaCqOeahOWtpuagoeWQjeensCdcbiAgICAgIH0sXG4gICAgICBiYXNlX25hbWU6IHtcbiAgICAgICAgdGl0bGU6ICflp5PlkI0nLFxuICAgICAgICB2YWx1ZTogd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWUsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAn6K+36L6T5YWl5oKo55qE5aeT5ZCNJ1xuICAgICAgfSxcbiAgICAgIGJhc2Vfc2V4OiB7XG4gICAgICAgIHRpdGxlOiAn5oCn5YirJyxcbiAgICAgICAgdmFsdWU6IChOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLnNleCkgPT09IDEgPyAn55S3JyA6ICflpbMnKSxcbiAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG4gICAgICB6YW5GaWVsZENoYW5nZShlKSB7XG4gICAgICAgIGxldCB7IGNvbXBvbmVudElkLCBkZXRhaWwgfSA9IGVcbiAgICAgICAgaWYgKGNvbXBvbmVudElkID09PSAnbmFtZUZpZWxkJykge1xuICAgICAgICAgIHRoaXMuYmFzZV9uYW1lLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50SWQgPT09ICdzY2hvb2xGaWVsZCcpIHtcbiAgICAgICAgICB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlID0gZGV0YWlsLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBiaW5kR3JhZGVDaGFuZ2UgKGUpIHtcbiAgICAgICAgdGhpcy5ncmFkZUluZGV4ID0gZS5kZXRhaWwudmFsdWVcbiAgICAgIH0sXG4gICAgICBhc3luYyBfc2F2ZSAoKSB7XG4gICAgICAgIGxldCB1c2VyID0ge1xuICAgICAgICAgIGdyYWRlOiBOdW1iZXIodGhpcy5ncmFkZUluZGV4KSArIDcsXG4gICAgICAgICAgbmFtZTogdGhpcy5iYXNlX25hbWUudmFsdWUsXG4gICAgICAgICAgc2Nob29sOiB0aGlzLmJhc2Vfc2Nob29sLnZhbHVlXG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5fc2V0VXNlckluZm8odXNlcilcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5oiQ5YqfJyxcbiAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgc3VjY2VzcyAoKSB7XG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDorr7nva7nlKjmiLfkv6Hmga8gKi9cbiAgICBfc2V0VXNlckluZm8gKHVzZXIpIHtcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe3RpdGxlOiAn6K+356iN5YCZJ30pXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICAgIHVybDogJ2h0dHBzOi8vbWlkLmd1aW5hYmVuLmNvbS9tZW1iZXIvaW5mb0VkaXQnLFxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGdyYWRlOiB1c2VyLmdyYWRlLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgc2Nob29sOiB1c2VyLnNjaG9vbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ1VzZXInLCByZXMpXG4gICAgICAgICAgICByZXNvbHZlKHJlcylcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWwgKGVycikge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgb25TaG93ICgpIHtcbiAgICAgIHRoaXMuYmFzZV9uYW1lLnZhbHVlID0gd2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLm5hbWVcbiAgICAgIHRoaXMuYmFzZV9zY2hvb2wudmFsdWUgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdVc2VyJykuc2Nob29sXG4gICAgICB0aGlzLmdyYWRlSW5kZXggPSBOdW1iZXIod2VweS5nZXRTdG9yYWdlU3luYygnVXNlcicpLmdyYWRlKSAtIDdcbiAgICAgIHRoaXMuJGFwcGx5KClcbiAgICB9XG5cbiAgICBvblNoYXJlQXBwTWVzc2FnZSAocmVzKSB7XG4gICAgICBpZiAocmVzLmZyb20gPT09ICdidXR0b24nKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXJnZXQpXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZTogJ+WQhOS9jeWutumVv++8jOeUqOi/meS4quiusOmUmemimO+8jOmAn+W6puW/q++8jOeUqOWkhOWkpycsXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbXkvaW5kZXgnXG4gICAgICB9XG4gICAgfVxuICB9XG4iXX0=