(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    199: function(e, t, n) {
      e.exports = n(381);
    },
    204: function(e, t, n) {},
    205: function(e, t, n) {},
    226: function(e, t, n) {},
    361: function(e, t, n) {},
    367: function(e, t, n) {},
    368: function(e, t, n) {},
    379: function(e, t, n) {},
    380: function(e, t, n) {},
    381: function(e, t, n) {
      "use strict";
      n.r(t);
      var r,
        a = n(0),
        o = n.n(a),
        c = n(8),
        i = n.n(c),
        l = (n(204), n(205), n(19)),
        u = n(22);
      !(function(e) {
        (e.SetUser = "APP_SET_USER"),
          (e.ClearUser = "APP_CLEAR_USER"),
          (e.SetAuthenticated = "APP_SET_AUTHENTICATED"),
          (e.Logout = "APP_LOGOUT");
      })(r || (r = {}));
      var s,
        f = function(e) {
          return { type: r.SetUser, payload: e };
        },
        m = Object(l.b)(r.SetAuthenticated),
        g = Object(l.b)(r.Logout),
        p = Object(l.b)(r.ClearUser);
      function O(e, t) {
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
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? O(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : O(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var b,
        E = { user: null, isAuthenticated: void 0 },
        j = Object(l.c)(
          E,
          ((s = {}),
          Object(u.a)(s, r.SetUser, function(e, t) {
            return d({}, e, { user: t.payload });
          }),
          Object(u.a)(s, r.ClearUser, function(e) {
            return d({}, e, { user: null, isAuthenticated: !1 });
          }),
          Object(u.a)(s, r.SetAuthenticated, function(e, t) {
            return d({}, e, { isAuthenticated: t.payload });
          }),
          s)
        ),
        h = n(33);
      !(function(e) {
        (e.Login = "LOGIN_LOGIN"),
          (e.LoginSuccess = "LOGIN_SUCCESS"),
          (e.SetError = "LOGIN_SET_ERROR");
      })(b || (b = {}));
      var y,
        v = Object(l.b)(b.Login),
        k = Object(l.b)(b.LoginSuccess),
        S = Object(l.b)(b.SetError);
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
      function P(e) {
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
      var L,
        D = Object(l.c)(
          { isLoggingIn: !1, error: null },
          ((y = {}),
          Object(u.a)(y, b.Login, function(e) {
            return P({}, e, { isLoggingIn: !0 });
          }),
          Object(u.a)(y, b.LoginSuccess, function(e) {
            return P({}, e, { isLoggingIn: !1 });
          }),
          Object(u.a)(y, b.SetError, function(e, t) {
            return P({}, e, { error: t.payload, isLoggingIn: !1 });
          }),
          y)
        );
      !(function(e) {
        (e.LoadWorklogs = "WORKLOGS_LOAD"),
          (e.LoadedWorklogs = "WORKLOGS_LOADED"),
          (e.ErrorLoadingWorklogs = "WORKLOGS_ERROR");
      })(L || (L = {}));
      var _,
        A = Object(l.b)(L.LoadWorklogs),
        N = Object(l.b)(L.LoadedWorklogs),
        I = Object(l.b)(L.ErrorLoadingWorklogs);
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
      var T = Object(l.c)(
          { isFetchingWorklogs: !1, worklogs: null, error: null },
          ((_ = {}),
          Object(u.a)(_, L.LoadWorklogs, function(e) {
            return C({}, e, { isFetchingWorklogs: !0 });
          }),
          Object(u.a)(_, L.LoadedWorklogs, function(e, t) {
            return C({}, e, { worklogs: t.payload, isFetchingWorklogs: !1 });
          }),
          Object(u.a)(_, L.ErrorLoadingWorklogs, function(e, t) {
            return C({}, e, { error: t.payload, isFetchingWorklogs: !1 });
          }),
          _)
        ),
        R = Object(h.combineReducers)({ appState: j, login: D, worklogs: T }),
        Y = n(21),
        U = n(58),
        F = n.n(U),
        x = n(103),
        G = n(51),
        M = (n(226), n(387)),
        K = n(386),
        z = n(389),
        q = n(152),
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
        J = n(383),
        V = n(68),
        Z = n(37),
        Q = n(385),
        X =
          (n(361),
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
                                      e(f(t.data)), e(m(!0));
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
        $ = n(17),
        ee = n.n($),
        te = function(e) {
          return function(t) {
            t(A());
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
                t(N(e.data));
              })
              .catch(function(e) {
                t(I(e));
              });
          };
        },
        ne = n(196),
        re = n(384),
        ae = n(11),
        oe = n(388),
        ce = n(120),
        ie = n(150),
        le = n.n(ie);
      function ue(e, t) {
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
      function se(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ue(n, !0).forEach(function(t) {
                Object(u.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ue(n).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var fe = function(e, t) {
          return e
            ? e.reduce(function(e, n) {
                return (function(e, t) {
                  var n = Object.assign({}, e);
                  return Object.keys(t).reduce(function(e, n) {
                    var r = t[n],
                      a = e[n] || [],
                      o = [].concat(Object(ce.a)(a), Object(ce.a)(r));
                    return se({}, e, Object(u.a)({}, n, o));
                  }, n);
                })(
                  e,
                  n.worklogs.reduce(function(e, r) {
                    var a = (function(e, t) {
                        return le.a.tz(le()(e), t);
                      })(r.started, t).format("YYYY-MM-DD"),
                      o = e[a] || [],
                      c = [].concat(Object(ce.a)(o), [
                        {
                          issueKey: n.issueKey,
                          timeSpent: r.timeSpentSeconds,
                          started: r.started
                        }
                      ]);
                    return se({}, e, Object(u.a)({}, a, c));
                  }, {})
                );
              }, {})
            : {};
        },
        me =
          (n(367),
          function(e) {
            var t = Math.floor(e / 3600),
              n = (e / 60) % 60,
              r = n < 10 ? "0".concat(n) : "".concat(n);
            return "".concat(t, ":").concat(r);
          }),
        ge = function(e) {
          return function(t) {
            var n = t.format("YYYY-MM-DD"),
              r = e[n];
            return o.a.createElement(
              "div",
              { className: "ant-fullcalendar-date" },
              o.a.createElement(
                "div",
                { className: "ant-fullcalendar-value" },
                t.date()
              ),
              o.a.createElement(
                "div",
                { className: "ant-fullcalendar-content" },
                r &&
                  o.a.createElement(
                    "ul",
                    { className: "worklogs" },
                    r.map(function(e) {
                      return o.a.createElement(
                        "li",
                        { className: "worklog-list-item", key: e.issueKey },
                        o.a.createElement("a", { href: "#" }, e.issueKey),
                        o.a.createElement("span", null, me(e.timeSpent))
                      );
                    })
                  )
              )
            );
          };
        },
        pe =
          (n(368),
          function(e) {
            var t = e.onViewChanged,
              n = e.isFetchingWorklogs,
              r = e.userTimezone,
              c = e.worklogs,
              i = Object(a.useState)(ee()()),
              l = Object(ne.a)(i, 2),
              u = l[0],
              s = l[1],
              f = function(e) {
                return {
                  from: e.startOf("month").toDate(),
                  to: e.endOf("month").toDate()
                };
              },
              m = function(e) {
                if ((s(e), !e.startOf("month").isSame(u.startOf("month")))) {
                  var n = f(e);
                  t(n.from, n.to);
                }
              };
            Object(a.useEffect)(function() {
              var e = f(u);
              t(e.from, e.to);
            }, []);
            var g = fe(c, r),
              p = ge(g);
            return o.a.createElement(
              re.a,
              { spinning: n },
              o.a.createElement(
                "div",
                { className: "worklog-calendar__header" },
                o.a.createElement(
                  "div",
                  { className: "worklog-calendar__total-summary" },
                  o.a.createElement(M.a.Text, null, "Total logged:"),
                  o.a.createElement(
                    M.a.Text,
                    { strong: !0 },
                    me(
                      (function(e) {
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
                      })(c)
                    )
                  )
                ),
                o.a.createElement(
                  q.a.Group,
                  null,
                  o.a.createElement(
                    q.a,
                    {
                      type: "primary",
                      onClick: function(e) {
                        var t = u.clone().subtract(1, "month");
                        m(t);
                      }
                    },
                    o.a.createElement(ae.a, { type: "left" }),
                    "Backward"
                  ),
                  o.a.createElement(
                    q.a,
                    {
                      type: "primary",
                      onClick: function(e) {
                        var t = u.clone().add(1, "month");
                        m(t);
                      }
                    },
                    "Forward",
                    o.a.createElement(ae.a, { type: "right" })
                  )
                )
              ),
              o.a.createElement(oe.a, {
                value: u,
                onChange: m,
                dateFullCellRender: p
              })
            );
          }),
        Oe = function() {
          var e = Object(Y.c)(),
            t = Object(Y.d)(function(e) {
              return e.worklogs.isFetchingWorklogs;
            }),
            n = Object(Y.d)(function(e) {
              return e.worklogs.worklogs;
            }),
            r = Object(Y.d)(function(e) {
              var t = e.appState.user;
              return t && t.timeZone;
            });
          return o.a.createElement(
            "div",
            { style: { background: "white", flex: 1 } },
            o.a.createElement(pe, {
              isFetchingWorklogs: t,
              onViewChanged: function(t, n) {
                te({ from: t, to: n })(e);
              },
              worklogs: n,
              userTimezone: r
            })
          );
        },
        de = n(194),
        be = (n(379), n(390)),
        Ee = n(114),
        je =
          (n(380),
          function(e) {
            var t = e.user,
              n = e.onLogout;
            return o.a.createElement(
              be.a,
              {
                theme: "dark",
                mode: "horizontal",
                className: "user-info__menu",
                selectable: !1
              },
              o.a.createElement(
                Ee.a,
                {
                  title: o.a.createElement(
                    "span",
                    null,
                    o.a.createElement(ae.a, { type: "user" }),
                    t.displayName
                  )
                },
                o.a.createElement(
                  be.a.Item,
                  { disabled: !0 },
                  o.a.createElement("img", {
                    alt: "avatar",
                    src: t.avatarUrls["32x32"],
                    className: "user-info__avatar"
                  }),
                  t.emailAddress
                ),
                o.a.createElement(
                  be.a.Item,
                  { disabled: !0 },
                  "Timezone: ",
                  t.timeZone
                ),
                o.a.createElement(
                  be.a.Item,
                  { onClick: n },
                  o.a.createElement(ae.a, { type: "logout" }),
                  "Logout"
                )
              )
            );
          }),
        he = J.a.Header,
        ye = J.a.Content,
        ve = J.a.Footer,
        ke = function(e) {
          var t = e.children,
            n = Object(Y.c)(),
            r = Object(Y.d)(function(e) {
              return e.appState.user;
            });
          return o.a.createElement(
            J.a,
            { className: "main-layout" },
            o.a.createElement(
              he,
              null,
              o.a.createElement(je, {
                user: r,
                onLogout: function() {
                  return n(function(e) {
                    e(g()),
                      F.a.post("api/users/logout").then(function() {
                        return e(p());
                      });
                  });
                }
              })
            ),
            o.a.createElement(ye, { className: "main-layout__content" }, t),
            o.a.createElement(ve, null, "Footer")
          );
        },
        Se = function(e) {
          var t = e.children,
            n = Object(de.a)(e, ["children"]),
            r = Object(Y.d)(function(e) {
              return e.appState.isAuthenticated;
            });
          return o.a.createElement(
            G.b,
            Object.assign({}, n, {
              render: function(e) {
                var n = e.location;
                return r
                  ? o.a.createElement(ke, null, t)
                  : o.a.createElement(G.a, {
                      to: { pathname: "/login", state: { from: n } }
                    });
              }
            })
          );
        },
        we = function() {
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
                Se,
                { path: "/dashboard" },
                o.a.createElement(Oe, null)
              ),
              o.a.createElement(
                G.b,
                { path: "*" },
                o.a.createElement(G.a, { to: { pathname: "dashboard" } })
              )
            )
          );
        },
        Pe = {
          checkAuthenticationConnect: function() {
            return function(e) {
              F.a
                .get("/api/users/current")
                .then(function(t) {
                  e(f(t.data)), e(m(!0));
                })
                .catch(function() {
                  e(m(!1));
                });
            };
          }
        },
        Le = Object(Y.b)(function(e) {
          return { isAuthenticated: e.appState.isAuthenticated };
        }, Pe)(function(e) {
          var t = e.checkAuthenticationConnect,
            n = e.isAuthenticated;
          return (
            o.a.useEffect(function() {
              t();
            }, []),
            null != n ? o.a.createElement(we, null) : null
          );
        }),
        De = Object(l.a)({ reducer: R }),
        _e = function() {
          return o.a.createElement(
            Y.a,
            { store: De },
            o.a.createElement(Le, null)
          );
        };
      i.a.render(o.a.createElement(_e, null), document.getElementById("root"));
    }
  },
  [[199, 1, 2]]
]);
//# sourceMappingURL=main.72918686.chunk.js.map
