(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    211: function(e, t, n) {
      e.exports = n(404);
    },
    216: function(e, t, n) {},
    217: function(e, t, n) {},
    238: function(e, t, n) {},
    371: function(e, t, n) {},
    376: function(e, t, n) {},
    377: function(e, t, n) {},
    402: function(e, t, n) {},
    403: function(e, t, n) {},
    404: function(e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a = n(0),
        o = n.n(a),
        c = n(8),
        l = n.n(c),
        i = (n(216), n(217), n(19)),
        u = n(22);
      !(function(e) {
        (e.SetUser = "APP_SET_USER"),
          (e.ClearUser = "APP_CLEAR_USER"),
          (e.SetAuthenticated = "APP_SET_AUTHENTICATED"),
          (e.Logout = "APP_LOGOUT");
      })(r || (r = {}));
      var s,
        m = function(e) {
          return { type: r.SetUser, payload: e };
        },
        f = Object(i.b)(r.SetAuthenticated),
        p = Object(i.b)(r.Logout),
        g = Object(i.b)(r.ClearUser);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function b(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var O,
        E = { url: null, user: null, isAuthenticated: void 0 },
        h = Object(i.c)(
          E,
          ((s = {}),
          Object(u.a)(s, r.SetUser, function(e, t) {
            return b({}, e, { user: t.payload.user, url: t.payload.url });
          }),
          Object(u.a)(s, r.ClearUser, function(e) {
            return b({}, e, { user: null, isAuthenticated: !1 });
          }),
          Object(u.a)(s, r.SetAuthenticated, function(e, t) {
            return b({}, e, { isAuthenticated: t.payload });
          }),
          s)
        ),
        j = n(33);
      !(function(e) {
        (e.Login = "LOGIN_LOGIN"),
          (e.LoginSuccess = "LOGIN_SUCCESS"),
          (e.SetError = "LOGIN_SET_ERROR");
      })(O || (O = {}));
      var y,
        v = Object(i.b)(O.Login),
        k = Object(i.b)(O.LoginSuccess),
        S = Object(i.b)(O.SetError);
      function w(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : w(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var P,
        L = Object(i.c)(
          { isLoggingIn: !1, error: null },
          ((y = {}),
          Object(u.a)(y, O.Login, function(e) {
            return _({}, e, { isLoggingIn: !0 });
          }),
          Object(u.a)(y, O.LoginSuccess, function(e) {
            return _({}, e, { isLoggingIn: !1 });
          }),
          Object(u.a)(y, O.SetError, function(e, t) {
            return _({}, e, { error: t.payload, isLoggingIn: !1 });
          }),
          y)
        );
      !(function(e) {
        (e.LoadWorklogs = "WORKLOGS_LOAD"),
          (e.LoadedWorklogs = "WORKLOGS_LOADED"),
          (e.ErrorLoadingWorklogs = "WORKLOGS_ERROR");
      })(P || (P = {}));
      var D,
        N = Object(i.b)(P.LoadWorklogs),
        A = Object(i.b)(P.LoadedWorklogs),
        I = Object(i.b)(P.ErrorLoadingWorklogs);
      function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : W(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var R = Object(i.c)(
          { isFetchingWorklogs: !1, worklogs: null, error: null },
          ((D = {}),
          Object(u.a)(D, P.LoadWorklogs, function(e) {
            return C({}, e, { isFetchingWorklogs: !0 });
          }),
          Object(u.a)(D, P.LoadedWorklogs, function(e, t) {
            return C({}, e, { worklogs: t.payload, isFetchingWorklogs: !1 });
          }),
          Object(u.a)(D, P.ErrorLoadingWorklogs, function(e, t) {
            return C({}, e, { error: t.payload, isFetchingWorklogs: !1 });
          }),
          D)
        ),
        T = Object(j.combineReducers)({ appState: h, login: L, worklogs: R }),
        Y = n(21),
        U = n(59),
        F = n.n(U),
        x = n(103),
        G = n(52),
        M = (n(238), n(411)),
        K = n(409),
        z = n(413),
        q = n(155),
        B = M.a.Text,
        H = K.a.create({ name: "login" })(function(e) {
          var t = e.onSubmit,
            n = e.isLoggingIn,
            r = e.loginError,
            a = e.form,
            c = a.getFieldDecorator;
          return o.a.createElement(
            K.a,
            {
              onSubmit: function(e) {
                e.preventDefault(),
                  a.validateFields(function(e, n) {
                    e || t(n);
                  });
              }
            },
            o.a.createElement(
              K.a.Item,
              null,
              c("email", {
                rules: [{ required: !0, message: "Please input your email" }]
              })(o.a.createElement(z.a, { placeholder: "Email" }))
            ),
            o.a.createElement(
              K.a.Item,
              null,
              c("url", {
                rules: [{ required: !0, message: "Please input URL" }]
              })(o.a.createElement(z.a, { placeholder: "URL" }))
            ),
            o.a.createElement(
              K.a.Item,
              null,
              c("apiToken", {
                rules: [{ required: !0, message: "Please input token" }]
              })(o.a.createElement(z.a, { placeholder: "Token" }))
            ),
            o.a.createElement(
              q.a,
              {
                loading: n,
                type: "primary",
                htmlType: "submit",
                className: "login-form__button"
              },
              "Log in"
            ),
            r &&
              o.a.createElement(
                "div",
                { className: "login-form__error" },
                o.a.createElement(B, { type: "danger" }, "Incorrect login data")
              )
          );
        }),
        J = n(406),
        V = n(68),
        Z = n(39),
        Q = n(408),
        X =
          (n(371),
          function() {
            var e = Object(Y.c)(),
              t = Object(Y.d)(function(e) {
                return e.appState.isAuthenticated;
              }),
              n = Object(Y.d)(function(e) {
                return e.login.isLoggingIn;
              }),
              r = Object(Y.d)(function(e) {
                return e.login.error;
              });
            return t
              ? o.a.createElement(G.a, { to: { pathname: "dashboard" } })
              : o.a.createElement(
                  J.a,
                  { style: { height: "100%" } },
                  o.a.createElement(
                    J.a.Content,
                    { style: { padding: "50px 50px" } },
                    o.a.createElement(
                      V.a,
                      { className: "login__card-wrapper" },
                      o.a.createElement(
                        Z.a,
                        {
                          md: { span: 12, offset: 6 },
                          xl: { span: 8, offset: 8 }
                        },
                        o.a.createElement(
                          Q.a,
                          { className: "login__card" },
                          o.a.createElement("h2", null, "Sign in"),
                          o.a.createElement(H, {
                            onSubmit: function(t) {
                              return ((n = t),
                              function(e) {
                                e(v()),
                                  F.a
                                    .post("/api/users/authenticate", n)
                                    .then(function(t) {
                                      return (
                                        e(k()), F.a.get("/api/users/current")
                                      );
                                    })
                                    .then(function(t) {
                                      e(m(t.data)), e(f(!0));
                                    })
                                    .catch(function(t) {
                                      e(S(t.response && t.response.status));
                                    });
                              })(e);
                              var n;
                            },
                            isLoggingIn: n,
                            loginError: r
                          })
                        )
                      )
                    )
                  )
                );
          }),
        $ = n(14),
        ee = n.n($),
        te = function(e) {
          return function(t) {
            t(N());
            var n = (function(e) {
                var t = e.from,
                  n = e.to;
                return {
                  from: ee()(t).format("YYYY-MM-DD"),
                  to: ee()(n).format("YYYY-MM-DD")
                };
              })(e),
              r = n.from,
              a = n.to;
            F.a
              .get("/api/worklogs?from=".concat(r, "&to=").concat(a))
              .then(function(e) {
                t(A(e.data));
              })
              .catch(function(e) {
                t(I(e));
              });
          };
        },
        ne = n(208),
        re = n(407),
        ae = n(412),
        oe = n(11),
        ce = n(13),
        le = n(410),
        ie = n(120),
        ue = n(153),
        se = n.n(ue);
      function me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function fe(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var pe = function(e, t) {
          return e
            ? e.reduce(function(e, n) {
                return (function(e, t) {
                  var n = Object.assign({}, e);
                  return Object.keys(t).reduce(function(e, n) {
                    var r = t[n],
                      a = e[n] || [],
                      o = [].concat(Object(ie.a)(a), Object(ie.a)(r));
                    return fe({}, e, Object(u.a)({}, n, o));
                  }, n);
                })(
                  e,
                  n.worklogs.reduce(function(e, r) {
                    var a = (function(e, t) {
                        return se.a.tz(se()(e), t);
                      })(r.started, t).format("YYYY-MM-DD"),
                      o = e[a] || [],
                      c = [].concat(Object(ie.a)(o), [
                        {
                          issueKey: n.issueKey,
                          timeSpent: r.timeSpentSeconds,
                          started: r.started
                        }
                      ]);
                    return fe({}, e, Object(u.a)({}, a, c));
                  }, {})
                );
              }, {})
            : {};
        },
        ge =
          (n(376),
          function(e) {
            var t = Math.floor(e / 3600),
              n = (e / 60) % 60,
              r = n < 10 ? "0".concat(n) : "".concat(n);
            return "".concat(t, ":").concat(r);
          }),
        de = function(e, t) {
          return "https://".concat(e, "/browse/").concat(t);
        },
        be = function(e, t) {
          return function(n) {
            var r = n.format("YYYY-MM-DD"),
              a = e[r],
              c =
                a &&
                a.reduce(function(e, t) {
                  return e + t.timeSpent;
                }, 0);
            return o.a.createElement(
              "div",
              { className: "ant-fullcalendar-date" },
              o.a.createElement(
                "div",
                { className: "ant-fullcalendar-value callendar-cell__header" },
                a &&
                  o.a.createElement(
                    "span",
                    { className: "callendar-cell__total-time" },
                    "Total: ",
                    ge(c)
                  ),
                o.a.createElement(
                  "span",
                  { className: "callendar-cell__day" },
                  n.date()
                )
              ),
              o.a.createElement(
                "div",
                { className: "ant-fullcalendar-content" },
                a &&
                  o.a.createElement(
                    "div",
                    null,
                    o.a.createElement(
                      "ul",
                      { className: "worklogs" },
                      a.map(function(e) {
                        return o.a.createElement(
                          "li",
                          { className: "worklog-list-item", key: e.issueKey },
                          o.a.createElement(
                            "a",
                            { target: "_blank", href: de(t, e.issueKey) },
                            e.issueKey
                          ),
                          o.a.createElement("span", null, ge(e.timeSpent))
                        );
                      })
                    )
                  )
              )
            );
          };
        },
        Oe = n(202),
        Ee = n.n(Oe);
      n(377);
      ee.a.locale("en-gb");
      var he = function(e) {
          return e
            ? e.reduce(function(e, t) {
                return (
                  e +
                  t.worklogs.reduce(function(e, t) {
                    return e + t.timeSpentSeconds;
                  }, 0)
                );
              }, 0)
            : 0;
        },
        je = function(e) {
          var t = e.url,
            n = e.onViewChanged,
            r = e.isFetchingWorklogs,
            c = e.userTimezone,
            l = e.worklogs,
            i = Object(a.useState)(ee()()),
            u = Object(ne.a)(i, 2),
            s = u[0],
            m = u[1],
            f = function(e) {
              return {
                from: e.startOf("month").toDate(),
                to: e.endOf("month").toDate()
              };
            },
            p = function(e) {
              if ((m(e), !e.startOf("month").isSame(s.startOf("month")))) {
                var t = f(e);
                n(t.from, t.to);
              }
            };
          Object(a.useEffect)(function() {
            var e = f(s);
            n(e.from, e.to);
          }, []);
          var g = pe(l, c),
            d = be(g, t);
          return o.a.createElement(
            re.a,
            { spinning: r },
            o.a.createElement(
              "div",
              { className: "worklog-calendar__header" },
              o.a.createElement(
                "div",
                { className: "worklog-calendar__total-summary" },
                o.a.createElement(ae.a, {
                  title: "Total logged:",
                  value: ge(he(l))
                })
              ),
              o.a.createElement(
                q.a.Group,
                null,
                o.a.createElement(
                  q.a,
                  {
                    type: "primary",
                    onClick: function(e) {
                      var t = s.clone().subtract(1, "month");
                      p(t);
                    }
                  },
                  o.a.createElement(oe.a, { type: "left" }),
                  "Backward"
                ),
                o.a.createElement(
                  q.a,
                  {
                    type: "primary",
                    onClick: function(e) {
                      var t = s.clone().add(1, "month");
                      p(t);
                    }
                  },
                  "Forward",
                  o.a.createElement(oe.a, { type: "right" })
                )
              )
            ),
            o.a.createElement(
              ce.b,
              { locale: Ee.a },
              o.a.createElement(le.a, {
                value: s,
                onChange: p,
                dateFullCellRender: d
              })
            )
          );
        },
        ye = function() {
          var e = Object(Y.c)(),
            t = Object(Y.d)(function(e) {
              return e.worklogs.isFetchingWorklogs;
            }),
            n = Object(Y.d)(function(e) {
              return e.worklogs.worklogs;
            }),
            r =
              Object(Y.d)(function(e) {
                return e.appState.url;
              }) || "",
            a = Object(Y.d)(function(e) {
              var t = e.appState.user;
              return t && t.timeZone;
            });
          return o.a.createElement(
            "div",
            { style: { background: "white", flex: 1 } },
            o.a.createElement(je, {
              url: r,
              isFetchingWorklogs: t,
              onViewChanged: function(t, n) {
                te({ from: t, to: n })(e);
              },
              worklogs: n,
              userTimezone: a
            })
          );
        },
        ve = n(206),
        ke = (n(402), n(414)),
        Se = n(114),
        we =
          (n(403),
          function(e) {
            var t = e.user,
              n = e.onLogout,
              r = e.children;
            return o.a.createElement(
              ke.a,
              {
                theme: "dark",
                mode: "horizontal",
                className: "user-info__menu",
                selectable: !1
              },
              o.a.createElement(
                Se.a,
                {
                  title: o.a.createElement(
                    "span",
                    null,
                    o.a.createElement(oe.a, { type: "user" }),
                    t.displayName
                  )
                },
                o.a.createElement(
                  ke.a.Item,
                  { disabled: !0 },
                  o.a.createElement("img", {
                    alt: "avatar",
                    src: t.avatarUrls["32x32"],
                    className: "user-info__avatar"
                  }),
                  t.emailAddress
                ),
                o.a.createElement(
                  ke.a.Item,
                  { disabled: !0 },
                  "Timezone: ",
                  t.timeZone
                ),
                o.a.createElement(
                  ke.a.Item,
                  { onClick: n },
                  o.a.createElement(oe.a, { type: "logout" }),
                  "Logout"
                )
              ),
              r &&
                o.a.createElement(
                  ke.a.Item,
                  { className: "user-info__extras" },
                  r
                )
            );
          }),
        _e = J.a.Header,
        Pe = J.a.Content,
        Le =
          (J.a.Footer,
          function(e) {
            var t = e.children,
              n = Object(Y.c)(),
              r = Object(Y.d)(function(e) {
                return e.appState.user;
              });
            return o.a.createElement(
              J.a,
              { className: "main-layout" },
              o.a.createElement(
                _e,
                { className: "main-layout__header" },
                o.a.createElement(
                  we,
                  {
                    user: r,
                    onLogout: function() {
                      return n(function(e) {
                        e(p()),
                          F.a.post("api/users/logout").then(function() {
                            return e(g());
                          });
                      });
                    }
                  },
                  o.a.createElement(
                    "a",
                    {
                      href: "https://github.com/iczajkow/jira-web-timesheet",
                      target: "_blank"
                    },
                    o.a.createElement(oe.a, {
                      type: "github",
                      style: { fontSize: "24px" }
                    })
                  )
                )
              ),
              o.a.createElement(Pe, { className: "main-layout__content" }, t)
            );
          }),
        De = function(e) {
          var t = e.children,
            n = Object(ve.a)(e, ["children"]),
            r = Object(Y.d)(function(e) {
              return e.appState.isAuthenticated;
            });
          return o.a.createElement(
            G.b,
            Object.assign({}, n, {
              render: function(e) {
                var n = e.location;
                return r
                  ? o.a.createElement(Le, null, t)
                  : o.a.createElement(G.a, {
                      to: { pathname: "/login", state: { from: n } }
                    });
              }
            })
          );
        },
        Ne = function() {
          return o.a.createElement(
            x.a,
            null,
            o.a.createElement(
              G.d,
              null,
              o.a.createElement(
                G.b,
                { path: "/login" },
                o.a.createElement(X, null)
              ),
              o.a.createElement(
                De,
                { path: "/dashboard" },
                o.a.createElement(ye, null)
              ),
              o.a.createElement(
                G.b,
                { path: "*" },
                o.a.createElement(G.a, { to: { pathname: "dashboard" } })
              )
            )
          );
        },
        Ae = {
          checkAuthenticationConnect: function() {
            return function(e) {
              F.a
                .get("/api/users/current")
                .then(function(t) {
                  e(m(t.data)), e(f(!0));
                })
                .catch(function() {
                  e(f(!1));
                });
            };
          }
        },
        Ie = Object(Y.b)(function(e) {
          return { isAuthenticated: e.appState.isAuthenticated };
        }, Ae)(function(e) {
          var t = e.checkAuthenticationConnect,
            n = e.isAuthenticated;
          return (
            o.a.useEffect(function() {
              t();
            }, []),
            null != n ? o.a.createElement(Ne, null) : null
          );
        }),
        We = Object(i.a)({ reducer: T }),
        Ce = function() {
          return o.a.createElement(
            Y.a,
            { store: We },
            o.a.createElement(Ie, null)
          );
        };
      l.a.render(o.a.createElement(Ce, null), document.getElementById("root"));
    }
  },
  [[211, 1, 2]]
]);
//# sourceMappingURL=main.56559e39.chunk.js.map
