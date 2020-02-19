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
        l = n.n(c),
        u = (n(204), n(205), n(19)),
        i = n(22);
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
        m = Object(u.b)(r.SetAuthenticated),
        p = Object(u.b)(r.Logout),
        g = Object(u.b)(r.ClearUser);
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
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                Object(i.a)(e, t, n[t]);
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
      var b,
        E = { url: null, user: null, isAuthenticated: void 0 },
        j = Object(u.c)(
          E,
          ((s = {}),
          Object(i.a)(s, r.SetUser, function(e, t) {
            return O({}, e, { user: t.payload.user, url: t.payload.url });
          }),
          Object(i.a)(s, r.ClearUser, function(e) {
            return O({}, e, { user: null, isAuthenticated: !1 });
          }),
          Object(i.a)(s, r.SetAuthenticated, function(e, t) {
            return O({}, e, { isAuthenticated: t.payload });
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
        v = Object(u.b)(b.Login),
        k = Object(u.b)(b.LoginSuccess),
        S = Object(u.b)(b.SetError);
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
                Object(i.a)(e, t, n[t]);
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
        _ = Object(u.c)(
          { isLoggingIn: !1, error: null },
          ((y = {}),
          Object(i.a)(y, b.Login, function(e) {
            return P({}, e, { isLoggingIn: !0 });
          }),
          Object(i.a)(y, b.LoginSuccess, function(e) {
            return P({}, e, { isLoggingIn: !1 });
          }),
          Object(i.a)(y, b.SetError, function(e, t) {
            return P({}, e, { error: t.payload, isLoggingIn: !1 });
          }),
          y)
        );
      !(function(e) {
        (e.LoadWorklogs = "WORKLOGS_LOAD"),
          (e.LoadedWorklogs = "WORKLOGS_LOADED"),
          (e.ErrorLoadingWorklogs = "WORKLOGS_ERROR");
      })(L || (L = {}));
      var D,
        A = Object(u.b)(L.LoadWorklogs),
        N = Object(u.b)(L.LoadedWorklogs),
        I = Object(u.b)(L.ErrorLoadingWorklogs);
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
                Object(i.a)(e, t, n[t]);
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
      var T = Object(u.c)(
          { isFetchingWorklogs: !1, worklogs: null, error: null },
          ((D = {}),
          Object(i.a)(D, L.LoadWorklogs, function(e) {
            return C({}, e, { isFetchingWorklogs: !0 });
          }),
          Object(i.a)(D, L.LoadedWorklogs, function(e, t) {
            return C({}, e, { worklogs: t.payload, isFetchingWorklogs: !1 });
          }),
          Object(i.a)(D, L.ErrorLoadingWorklogs, function(e, t) {
            return C({}, e, { error: t.payload, isFetchingWorklogs: !1 });
          }),
          D)
        ),
        R = Object(h.combineReducers)({ appState: j, login: _, worklogs: T }),
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
        le = n(150),
        ue = n.n(le);
      function ie(e, t) {
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
            ? ie(n, !0).forEach(function(t) {
                Object(i.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ie(n).forEach(function(t) {
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
                    return se({}, e, Object(i.a)({}, n, o));
                  }, n);
                })(
                  e,
                  n.worklogs.reduce(function(e, r) {
                    var a = (function(e, t) {
                        return ue.a.tz(ue()(e), t);
                      })(r.started, t).format("YYYY-MM-DD"),
                      o = e[a] || [],
                      c = [].concat(Object(ce.a)(o), [
                        {
                          issueKey: n.issueKey,
                          timeSpent: r.timeSpentSeconds,
                          started: r.started
                        }
                      ]);
                    return se({}, e, Object(i.a)({}, a, c));
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
        pe = function(e, t) {
          return "https://".concat(e, "/browse/").concat(t);
        },
        ge = function(e, t) {
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
                    me(c)
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
                            { target: "_blank", href: pe(t, e.issueKey) },
                            e.issueKey
                          ),
                          o.a.createElement("span", null, me(e.timeSpent))
                        );
                      })
                    )
                  )
              )
            );
          };
        },
        de =
          (n(368),
          function(e) {
            var t = e.url,
              n = e.onViewChanged,
              r = e.isFetchingWorklogs,
              c = e.userTimezone,
              l = e.worklogs,
              u = Object(a.useState)(ee()()),
              i = Object(ne.a)(u, 2),
              s = i[0],
              f = i[1],
              m = function(e) {
                return {
                  from: e.startOf("month").toDate(),
                  to: e.endOf("month").toDate()
                };
              },
              p = function(e) {
                if ((f(e), !e.startOf("month").isSame(s.startOf("month")))) {
                  var t = m(e);
                  n(t.from, t.to);
                }
              };
            Object(a.useEffect)(function() {
              var e = m(s);
              n(e.from, e.to);
            }, []);
            var g = fe(l, c),
              d = ge(g, t);
            return o.a.createElement(
              re.a,
              { spinning: r },
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
                      })(l)
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
                        var t = s.clone().subtract(1, "month");
                        p(t);
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
                        var t = s.clone().add(1, "month");
                        p(t);
                      }
                    },
                    "Forward",
                    o.a.createElement(ae.a, { type: "right" })
                  )
                )
              ),
              o.a.createElement(oe.a, {
                value: s,
                onChange: p,
                dateFullCellRender: d
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
            o.a.createElement(de, {
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
        be = n(194),
        Ee = (n(379), n(390)),
        je = n(114),
        he =
          (n(380),
          function(e) {
            var t = e.user,
              n = e.onLogout;
            return o.a.createElement(
              Ee.a,
              {
                theme: "dark",
                mode: "horizontal",
                className: "user-info__menu",
                selectable: !1
              },
              o.a.createElement(
                je.a,
                {
                  title: o.a.createElement(
                    "span",
                    null,
                    o.a.createElement(ae.a, { type: "user" }),
                    t.displayName
                  )
                },
                o.a.createElement(
                  Ee.a.Item,
                  { disabled: !0 },
                  o.a.createElement("img", {
                    alt: "avatar",
                    src: t.avatarUrls["32x32"],
                    className: "user-info__avatar"
                  }),
                  t.emailAddress
                ),
                o.a.createElement(
                  Ee.a.Item,
                  { disabled: !0 },
                  "Timezone: ",
                  t.timeZone
                ),
                o.a.createElement(
                  Ee.a.Item,
                  { onClick: n },
                  o.a.createElement(ae.a, { type: "logout" }),
                  "Logout"
                )
              )
            );
          }),
        ye = J.a.Header,
        ve = J.a.Content,
        ke = J.a.Footer,
        Se = function(e) {
          var t = e.children,
            n = Object(Y.c)(),
            r = Object(Y.d)(function(e) {
              return e.appState.user;
            });
          return o.a.createElement(
            J.a,
            { className: "main-layout" },
            o.a.createElement(
              ye,
              null,
              o.a.createElement(he, {
                user: r,
                onLogout: function() {
                  return n(function(e) {
                    e(p()),
                      F.a.post("api/users/logout").then(function() {
                        return e(g());
                      });
                  });
                }
              })
            ),
            o.a.createElement(ve, { className: "main-layout__content" }, t),
            o.a.createElement(ke, null, "Footer")
          );
        },
        we = function(e) {
          var t = e.children,
            n = Object(be.a)(e, ["children"]),
            r = Object(Y.d)(function(e) {
              return e.appState.isAuthenticated;
            });
          return o.a.createElement(
            G.b,
            Object.assign({}, n, {
              render: function(e) {
                var n = e.location;
                return r
                  ? o.a.createElement(Se, null, t)
                  : o.a.createElement(G.a, {
                      to: { pathname: "/login", state: { from: n } }
                    });
              }
            })
          );
        },
        Pe = function() {
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
                we,
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
        Le = {
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
        _e = Object(Y.b)(function(e) {
          return { isAuthenticated: e.appState.isAuthenticated };
        }, Le)(function(e) {
          var t = e.checkAuthenticationConnect,
            n = e.isAuthenticated;
          return (
            o.a.useEffect(function() {
              t();
            }, []),
            null != n ? o.a.createElement(Pe, null) : null
          );
        }),
        De = Object(u.a)({ reducer: R }),
        Ae = function() {
          return o.a.createElement(
            Y.a,
            { store: De },
            o.a.createElement(_e, null)
          );
        };
      l.a.render(o.a.createElement(Ae, null), document.getElementById("root"));
    }
  },
  [[199, 1, 2]]
]);
//# sourceMappingURL=main.fa840b45.chunk.js.map
