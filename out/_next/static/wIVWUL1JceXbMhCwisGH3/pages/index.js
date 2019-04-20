(window.webpackJsonp = window.webpackJsonp || []).push([
  ["d0a3"],
  {
    "+8kv": function(n, r, t) {
      "use strict";
      var e = function(n) {
          return (function(n) {
            var r;
            for (;;) r = void (n = n);
            return r;
          })(n);
        },
        u = new (t("UhtL")).Show(e);
      n.exports = { absurd: e, showVoid: u };
    },
    "2MG2": function(n, r, t) {
      "use strict";
      (r.topInt = 2147483647),
        (r.bottomInt = -2147483648),
        (r.topChar = String.fromCharCode(65535)),
        (r.bottomChar = String.fromCharCode(0)),
        (r.topNumber = Number.POSITIVE_INFINITY),
        (r.bottomNumber = Number.NEGATIVE_INFINITY);
    },
    "2UUF": function(n, r, t) {
      "use strict";
      r.arrayApply = function(n) {
        return function(r) {
          for (var t = n.length, e = r.length, u = new Array(t * e), o = 0, i = 0; i < t; i++)
            for (var c = n[i], f = 0; f < e; f++) u[o++] = c(r[f]);
          return u;
        };
      };
    },
    "3adS": function(n, r, t) {
      "use strict";
      (r.refEq = function(n) {
        return function(r) {
          return n === r;
        };
      }),
        (r.eqArrayImpl = function(n) {
          return function(r) {
            return function(t) {
              if (r === t) return !0;
              if (r.length !== t.length) return !1;
              for (var e = 0; e < r.length; e++) if (!n(r[e])(t[e])) return !1;
              return !0;
            };
          };
        });
    },
    "4Bm9": function(n, r, t) {
      "use strict";
      var e = t("CgSG"),
        u = function(n, r) {
          (this.Semigroupoid0 = n), (this.identity = r);
        },
        o = new u(
          function() {
            return e.semigroupoidFn;
          },
          function(n) {
            return n;
          }
        );
      n.exports = {
        Category: u,
        identity: function(n) {
          return n.identity;
        },
        categoryFn: o,
      };
    },
    "56MN": function(n, r, t) {
      "use strict";
      r.ordArrayImpl = function(n) {
        return function(r) {
          return function(t) {
            for (var e = 0, u = r.length, o = t.length; e < u && e < o; ) {
              var i = r[e],
                c = t[e],
                f = n(i)(c);
              if (0 !== f) return f;
              e++;
            }
            return u === o ? 0 : u > o ? -1 : 1;
          };
        };
      };
    },
    "59CP": function(n, r, t) {
      "use strict";
      (r.boolConj = function(n) {
        return function(r) {
          return n && r;
        };
      }),
        (r.boolDisj = function(n) {
          return function(r) {
            return n || r;
          };
        }),
        (r.boolNot = function(n) {
          return !n;
        });
    },
    "5QI5": function(n, r, t) {
      "use strict";
      var e = t("j3Ls"),
        u = function(n) {
          this.RingRecord0 = n;
        },
        o = function(n) {
          this.Ring0 = n;
        },
        i = new o(function() {
          return e.ringUnit;
        }),
        c = new u(function() {
          return e.ringRecordNil;
        }),
        f = new o(function() {
          return e.ringNumber;
        }),
        a = new o(function() {
          return e.ringInt;
        });
      n.exports = {
        CommutativeRing: o,
        CommutativeRingRecord: u,
        commutativeRingInt: a,
        commutativeRingNumber: f,
        commutativeRingUnit: i,
        commutativeRingFn: function(n) {
          return new o(function() {
            return e.ringFn(n.Ring0());
          });
        },
        commutativeRingRecord: function(n) {
          return function(r) {
            return new o(function() {
              return e.ringRecord(n)(r.RingRecord0());
            });
          };
        },
        commutativeRingRecordNil: c,
        commutativeRingRecordCons: function(n) {
          return function(r) {
            return function(t) {
              return function(o) {
                return new u(function() {
                  return e.ringRecordCons(n)(r)(t.RingRecord0())(o.Ring0());
                });
              };
            };
          };
        },
      };
      t("BCFH"), t("6YwU"), t("AKjc");
    },
    "6YwU": function(n, r, t) {
      "use strict";
      var e = t("kWHk"),
        u = (function() {
          function n() {}
          return (n.value = new n()), n;
        })();
      n.exports = {
        IsSymbol: function(n) {
          this.reflectSymbol = n;
        },
        reflectSymbol: function(n) {
          return n.reflectSymbol;
        },
        reifySymbol: function(n) {
          return function(r) {
            return e.unsafeCoerce(function(n) {
              return r(n);
            })({
              reflectSymbol: function(r) {
                return n;
              },
            })(u.value);
          };
        },
        SProxy: u,
      };
    },
    "771w": function(n, r, t) {
      "use strict";
      var e = function(n, r) {
        (this.DivisionRing1 = n), (this.EuclideanRing0 = r);
      };
      n.exports = {
        Field: e,
        field: function(n) {
          return function(r) {
            return new e(
              function() {
                return r;
              },
              function() {
                return n;
              }
            );
          };
        },
      };
      t("pCBV"), t("5QI5"), t("Hnrf"), t("j3Ls"), t("BCFH");
    },
    "7fyt": function(n, r, t) {
      "use strict";
      (r.concatString = function(n) {
        return function(r) {
          return n + r;
        };
      }),
        (r.concatArray = function(n) {
          return function(r) {
            return 0 === n.length ? r : 0 === r.length ? n : n.concat(r);
          };
        });
    },
    "9/Dw": function(n, r, t) {
      "use strict";
      var e = t("59CP"),
        u = t("6YwU"),
        o = t("AKjc"),
        i = t("Wxt0"),
        c = t("oLEg"),
        f = t("NI2e"),
        a = function(n, r, t, e, u, o) {
          (this.conjRecord = n),
            (this.disjRecord = r),
            (this.ffRecord = t),
            (this.impliesRecord = e),
            (this.notRecord = u),
            (this.ttRecord = o);
        },
        s = function(n, r, t, e, u, o) {
          (this.conj = n), (this.disj = r), (this.ff = t), (this.implies = e), (this.not = u), (this.tt = o);
        },
        l = function(n) {
          return n.ttRecord;
        },
        d = function(n) {
          return n.tt;
        },
        m = function(n) {
          return n.notRecord;
        },
        p = function(n) {
          return n.not;
        },
        g = function(n) {
          return n.impliesRecord;
        },
        v = function(n) {
          return n.implies;
        },
        w = new s(
          function(n) {
            return function(n) {
              return o.unit;
            };
          },
          function(n) {
            return function(n) {
              return o.unit;
            };
          },
          o.unit,
          function(n) {
            return function(n) {
              return o.unit;
            };
          },
          function(n) {
            return o.unit;
          },
          o.unit
        ),
        R = new a(
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          },
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          },
          function(n) {
            return function(n) {
              return {};
            };
          },
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          },
          function(n) {
            return function(n) {
              return {};
            };
          },
          function(n) {
            return function(n) {
              return {};
            };
          }
        ),
        h = function(n) {
          return n.ffRecord;
        },
        y = function(n) {
          return n.ff;
        },
        b = function(n) {
          return n.disjRecord;
        },
        S = function(n) {
          return n.disj;
        },
        x = new s(
          e.boolConj,
          e.boolDisj,
          !1,
          function(n) {
            return function(r) {
              return S(x)(p(x)(n))(r);
            };
          },
          e.boolNot,
          !0
        ),
        A = function(n) {
          return n.conjRecord;
        },
        F = function(n) {
          return n.conj;
        };
      n.exports = {
        HeytingAlgebra: s,
        tt: d,
        ff: y,
        implies: v,
        conj: F,
        disj: S,
        not: p,
        HeytingAlgebraRecord: a,
        ffRecord: h,
        ttRecord: l,
        impliesRecord: g,
        conjRecord: A,
        disjRecord: b,
        notRecord: m,
        heytingAlgebraBoolean: x,
        heytingAlgebraUnit: w,
        heytingAlgebraFunction: function(n) {
          return new s(
            function(r) {
              return function(t) {
                return function(e) {
                  return F(n)(r(e))(t(e));
                };
              };
            },
            function(r) {
              return function(t) {
                return function(e) {
                  return S(n)(r(e))(t(e));
                };
              };
            },
            function(r) {
              return y(n);
            },
            function(r) {
              return function(t) {
                return function(e) {
                  return v(n)(r(e))(t(e));
                };
              };
            },
            function(r) {
              return function(t) {
                return p(n)(r(t));
              };
            },
            function(r) {
              return d(n);
            }
          );
        },
        heytingAlgebraRecord: function(n) {
          return function(n) {
            return new s(
              A(n)(f.RLProxy.value),
              b(n)(f.RLProxy.value),
              h(n)(f.RLProxy.value)(c.RProxy.value),
              g(n)(f.RLProxy.value),
              m(n)(f.RLProxy.value),
              l(n)(f.RLProxy.value)(c.RProxy.value)
            );
          };
        },
        heytingAlgebraRecordNil: R,
        heytingAlgebraRecordCons: function(n) {
          return function(r) {
            return function(r) {
              return function(t) {
                return new a(
                  function(e) {
                    return function(e) {
                      return function(o) {
                        var c = A(r)(f.RLProxy.value)(e)(o),
                          a = u.reflectSymbol(n)(u.SProxy.value),
                          s = i.unsafeSet(a),
                          l = i.unsafeGet(a);
                        return s(F(t)(l(e))(l(o)))(c);
                      };
                    };
                  },
                  function(e) {
                    return function(e) {
                      return function(o) {
                        var c = b(r)(f.RLProxy.value)(e)(o),
                          a = u.reflectSymbol(n)(u.SProxy.value),
                          s = i.unsafeSet(a),
                          l = i.unsafeGet(a);
                        return s(S(t)(l(e))(l(o)))(c);
                      };
                    };
                  },
                  function(e) {
                    return function(e) {
                      var o = h(r)(f.RLProxy.value)(e),
                        c = u.reflectSymbol(n)(u.SProxy.value);
                      return i.unsafeSet(c)(y(t))(o);
                    };
                  },
                  function(e) {
                    return function(e) {
                      return function(o) {
                        var c = g(r)(f.RLProxy.value)(e)(o),
                          a = u.reflectSymbol(n)(u.SProxy.value),
                          s = i.unsafeSet(a),
                          l = i.unsafeGet(a);
                        return s(v(t)(l(e))(l(o)))(c);
                      };
                    };
                  },
                  function(e) {
                    return function(e) {
                      var o = m(r)(f.RLProxy.value)(e),
                        c = u.reflectSymbol(n)(u.SProxy.value),
                        a = i.unsafeSet(c),
                        s = i.unsafeGet(c);
                      return a(p(t)(s(e)))(o);
                    };
                  },
                  function(e) {
                    return function(e) {
                      var o = l(r)(f.RLProxy.value)(e),
                        c = u.reflectSymbol(n)(u.SProxy.value);
                      return i.unsafeSet(c)(d(t))(o);
                    };
                  }
                );
              };
            };
          };
        },
      };
    },
    AKjc: function(n, r, t) {
      "use strict";
      var e = t("MFYa"),
        u = new (t("UhtL")).Show(function(n) {
          return "unit";
        });
      n.exports = { showUnit: u, unit: e.unit };
    },
    BCFH: function(n, r, t) {
      "use strict";
      var e = t("UlDY"),
        u = t("6YwU"),
        o = t("AKjc"),
        i = t("Wxt0"),
        c = t("oLEg"),
        f = t("NI2e"),
        a = function(n, r, t, e) {
          (this.addRecord = n), (this.mulRecord = r), (this.oneRecord = t), (this.zeroRecord = e);
        },
        s = function(n, r, t, e) {
          (this.add = n), (this.mul = r), (this.one = t), (this.zero = e);
        },
        l = function(n) {
          return n.zeroRecord;
        },
        d = function(n) {
          return n.zero;
        },
        m = new s(
          function(n) {
            return function(n) {
              return o.unit;
            };
          },
          function(n) {
            return function(n) {
              return o.unit;
            };
          },
          o.unit,
          o.unit
        ),
        p = new a(
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          },
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          },
          function(n) {
            return function(n) {
              return {};
            };
          },
          function(n) {
            return function(n) {
              return {};
            };
          }
        ),
        g = new s(e.numAdd, e.numMul, 1, 0),
        v = new s(e.intAdd, e.intMul, 1, 0),
        w = function(n) {
          return n.oneRecord;
        },
        R = function(n) {
          return n.one;
        },
        h = function(n) {
          return n.mulRecord;
        },
        y = function(n) {
          return n.mul;
        },
        b = function(n) {
          return n.addRecord;
        },
        S = function(n) {
          return n.add;
        };
      n.exports = {
        Semiring: s,
        add: S,
        zero: d,
        mul: y,
        one: R,
        SemiringRecord: a,
        addRecord: b,
        mulRecord: h,
        oneRecord: w,
        zeroRecord: l,
        semiringInt: v,
        semiringNumber: g,
        semiringFn: function(n) {
          return new s(
            function(r) {
              return function(t) {
                return function(e) {
                  return S(n)(r(e))(t(e));
                };
              };
            },
            function(r) {
              return function(t) {
                return function(e) {
                  return y(n)(r(e))(t(e));
                };
              };
            },
            function(r) {
              return R(n);
            },
            function(r) {
              return d(n);
            }
          );
        },
        semiringUnit: m,
        semiringRecord: function(n) {
          return function(n) {
            return new s(
              b(n)(f.RLProxy.value),
              h(n)(f.RLProxy.value),
              w(n)(f.RLProxy.value)(c.RProxy.value),
              l(n)(f.RLProxy.value)(c.RProxy.value)
            );
          };
        },
        semiringRecordNil: p,
        semiringRecordCons: function(n) {
          return function(r) {
            return function(r) {
              return function(t) {
                return new a(
                  function(e) {
                    return function(e) {
                      return function(o) {
                        var c = b(r)(f.RLProxy.value)(e)(o),
                          a = u.reflectSymbol(n)(u.SProxy.value),
                          s = i.unsafeSet(a),
                          l = i.unsafeGet(a);
                        return s(S(t)(l(e))(l(o)))(c);
                      };
                    };
                  },
                  function(e) {
                    return function(e) {
                      return function(o) {
                        var c = h(r)(f.RLProxy.value)(e)(o),
                          a = u.reflectSymbol(n)(u.SProxy.value),
                          s = i.unsafeSet(a),
                          l = i.unsafeGet(a);
                        return s(y(t)(l(e))(l(o)))(c);
                      };
                    };
                  },
                  function(e) {
                    return function(e) {
                      var o = w(r)(f.RLProxy.value)(c.RProxy.value),
                        a = u.reflectSymbol(n)(u.SProxy.value);
                      return i.unsafeSet(a)(R(t))(o);
                    };
                  },
                  function(e) {
                    return function(e) {
                      var o = l(r)(f.RLProxy.value)(c.RProxy.value),
                        a = u.reflectSymbol(n)(u.SProxy.value);
                      return i.unsafeSet(a)(d(t))(o);
                    };
                  }
                );
              };
            };
          };
        },
      };
    },
    CDes: function(n, r, t) {
      "use strict";
      (r.intSub = function(n) {
        return function(r) {
          return (n - r) | 0;
        };
      }),
        (r.numSub = function(n) {
          return function(r) {
            return n - r;
          };
        });
    },
    CgSG: function(n, r, t) {
      "use strict";
      var e = function(n) {
          this.compose = n;
        },
        u = new e(function(n) {
          return function(r) {
            return function(t) {
              return n(r(t));
            };
          };
        }),
        o = function(n) {
          return n.compose;
        };
      n.exports = {
        compose: o,
        Semigroupoid: e,
        composeFlipped: function(n) {
          return function(r) {
            return function(t) {
              return o(n)(t)(r);
            };
          };
        },
        semigroupoidFn: u,
      };
    },
    Dstg: function(n, r, t) {
      "use strict";
      n.exports = {};
    },
    GvED: function(n, r, t) {
      "use strict";
      var e = t("9/Dw"),
        u = function(n) {
          this.HeytingAlgebraRecord0 = n;
        },
        o = function(n) {
          this.HeytingAlgebra0 = n;
        },
        i = new o(function() {
          return e.heytingAlgebraUnit;
        }),
        c = new u(function() {
          return e.heytingAlgebraRecordNil;
        }),
        f = new o(function() {
          return e.heytingAlgebraBoolean;
        });
      n.exports = {
        BooleanAlgebra: o,
        BooleanAlgebraRecord: u,
        booleanAlgebraBoolean: f,
        booleanAlgebraUnit: i,
        booleanAlgebraFn: function(n) {
          return new o(function() {
            return e.heytingAlgebraFunction(n.HeytingAlgebra0());
          });
        },
        booleanAlgebraRecord: function(n) {
          return function(r) {
            return new o(function() {
              return e.heytingAlgebraRecord(n)(r.HeytingAlgebraRecord0());
            });
          };
        },
        booleanAlgebraRecordNil: c,
        booleanAlgebraRecordCons: function(n) {
          return function(r) {
            return function(t) {
              return function(o) {
                return new u(function() {
                  return e.heytingAlgebraRecordCons(n)(r)(t.HeytingAlgebraRecord0())(o.HeytingAlgebra0());
                });
              };
            };
          };
        },
      };
      t("6YwU"), t("AKjc");
    },
    Hnrf: function(n, r, t) {
      "use strict";
      var e = t("KtuF"),
        u = t("5QI5"),
        o = t("zo+L"),
        i = t("BCFH"),
        c = function(n, r, t, e) {
          (this.CommutativeRing0 = n), (this.degree = r), (this.div = t), (this.mod = e);
        },
        f = function(n) {
          return n.mod;
        },
        a = function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                var u,
                  c = n,
                  a = r,
                  s = t,
                  l = !1;
                function d(n, r, t, u) {
                  if (
                    o.eq(n)(u)(
                      i.zero(
                        r
                          .CommutativeRing0()
                          .Ring0()
                          .Semiring0()
                      )
                    )
                  )
                    return (l = !0), t;
                  (c = n), (a = r), (s = u), (e = f(r)(t)(u));
                }
                for (; !l; ) u = d(c, a, s, e);
                return u;
              };
            };
          };
        },
        s = new c(
          function() {
            return u.commutativeRingNumber;
          },
          function(n) {
            return 1;
          },
          e.numDiv,
          function(n) {
            return function(n) {
              return 0;
            };
          }
        ),
        l = new c(
          function() {
            return u.commutativeRingInt;
          },
          e.intDegree,
          e.intDiv,
          e.intMod
        ),
        d = function(n) {
          return n.div;
        };
      n.exports = {
        EuclideanRing: c,
        degree: function(n) {
          return n.degree;
        },
        div: d,
        mod: f,
        gcd: a,
        lcm: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return o.eq(n)(t)(
                  i.zero(
                    r
                      .CommutativeRing0()
                      .Ring0()
                      .Semiring0()
                  )
                ) ||
                  o.eq(n)(e)(
                    i.zero(
                      r
                        .CommutativeRing0()
                        .Ring0()
                        .Semiring0()
                    )
                  )
                  ? i.zero(
                      r
                        .CommutativeRing0()
                        .Ring0()
                        .Semiring0()
                    )
                  : d(r)(
                      i.mul(
                        r
                          .CommutativeRing0()
                          .Ring0()
                          .Semiring0()
                      )(t)(e)
                    )(a(n)(r)(t)(e));
              };
            };
          };
        },
        euclideanRingInt: l,
        euclideanRingNumber: s,
      };
      t("GvED"), t("j3Ls");
    },
    IGzz: function(n, r, t) {
      "use strict";
      var e = t("UCB5"),
        u = t("Z7LG"),
        o = function(n, r) {
          (this.Applicative0 = n), (this.Bind1 = r);
        },
        i = new o(
          function() {
            return e.applicativeFn;
          },
          function() {
            return u.bindFn;
          }
        ),
        c = new o(
          function() {
            return e.applicativeArray;
          },
          function() {
            return u.bindArray;
          }
        );
      n.exports = {
        Monad: o,
        liftM1: function(n) {
          return function(r) {
            return function(t) {
              return u.bind(n.Bind1())(t)(function(t) {
                return e.pure(n.Applicative0())(r(t));
              });
            };
          };
        },
        ap: function(n) {
          return function(r) {
            return function(t) {
              return u.bind(n.Bind1())(r)(function(r) {
                return u.bind(n.Bind1())(t)(function(t) {
                  return e.pure(n.Applicative0())(r(t));
                });
              });
            };
          };
        },
        whenM: function(n) {
          return function(r) {
            return function(t) {
              return u.bind(n.Bind1())(r)(function(r) {
                return e.when(n.Applicative0())(r)(t);
              });
            };
          };
        },
        unlessM: function(n) {
          return function(r) {
            return function(t) {
              return u.bind(n.Bind1())(r)(function(r) {
                return e.unless(n.Applicative0())(r)(t);
              });
            };
          };
        },
        monadFn: i,
        monadArray: c,
      };
      t("v0Xu"), t("sAO9"), t("AKjc");
    },
    KGqT: function(n, r, t) {
      "use strict";
      var e = t("7fyt"),
        u = t("6YwU"),
        o = t("AKjc"),
        i = t("+8kv"),
        c = t("Wxt0"),
        f = t("NI2e"),
        a = function(n) {
          this.appendRecord = n;
        },
        s = function(n) {
          this.append = n;
        },
        l = new s(function(n) {
          return i.absurd;
        }),
        d = new s(function(n) {
          return function(n) {
            return o.unit;
          };
        }),
        m = new s(e.concatString),
        p = new a(function(n) {
          return function(n) {
            return function(n) {
              return {};
            };
          };
        }),
        g = new s(e.concatArray),
        v = function(n) {
          return n.appendRecord;
        },
        w = function(n) {
          return n.append;
        };
      n.exports = {
        Semigroup: s,
        append: w,
        SemigroupRecord: a,
        appendRecord: v,
        semigroupString: m,
        semigroupUnit: d,
        semigroupVoid: l,
        semigroupFn: function(n) {
          return new s(function(r) {
            return function(t) {
              return function(e) {
                return w(n)(r(e))(t(e));
              };
            };
          });
        },
        semigroupArray: g,
        semigroupRecord: function(n) {
          return function(n) {
            return new s(v(n)(f.RLProxy.value));
          };
        },
        semigroupRecordNil: p,
        semigroupRecordCons: function(n) {
          return function(r) {
            return function(r) {
              return function(t) {
                return new a(function(e) {
                  return function(e) {
                    return function(o) {
                      var i = v(r)(f.RLProxy.value)(e)(o),
                        a = u.reflectSymbol(n)(u.SProxy.value),
                        s = c.unsafeSet(a),
                        l = c.unsafeGet(a);
                      return s(w(t)(l(e))(l(o)))(i);
                    };
                  };
                });
              };
            };
          };
        },
      };
    },
    KtuF: function(n, r, t) {
      "use strict";
      (r.intDegree = function(n) {
        return Math.min(Math.abs(n), 2147483647);
      }),
        (r.intDiv = function(n) {
          return function(r) {
            return 0 === r ? 0 : r > 0 ? Math.floor(n / r) : -Math.floor(n / -r);
          };
        }),
        (r.intMod = function(n) {
          return function(r) {
            if (0 === r) return 0;
            var t = Math.abs(r);
            return ((n % t) + t) % t;
          };
        }),
        (r.numDiv = function(n) {
          return function(r) {
            return n / r;
          };
        });
    },
    MFYa: function(n, r, t) {
      "use strict";
      r.unit = {};
    },
    MYiI: function(n, r, t) {
      "use strict";
      (r.showIntImpl = function(n) {
        return n.toString();
      }),
        (r.showNumberImpl = function(n) {
          var r = n.toString();
          return isNaN(r + ".0") ? r : r + ".0";
        }),
        (r.showCharImpl = function(n) {
          var r = n.charCodeAt(0);
          if (r < 32 || 127 === r) {
            switch (n) {
              case "":
                return "'\\a'";
              case "\b":
                return "'\\b'";
              case "\f":
                return "'\\f'";
              case "\n":
                return "'\\n'";
              case "\r":
                return "'\\r'";
              case "\t":
                return "'\\t'";
              case "\v":
                return "'\\v'";
            }
            return "'\\" + r.toString(10) + "'";
          }
          return "'" === n || "\\" === n ? "'\\" + n + "'" : "'" + n + "'";
        }),
        (r.showStringImpl = function(n) {
          var r = n.length;
          return (
            '"' +
            n.replace(/[\0-\x1F\x7F"\\]/g, function(t, e) {
              switch (t) {
                case '"':
                case "\\":
                  return "\\" + t;
                case "":
                  return "\\a";
                case "\b":
                  return "\\b";
                case "\f":
                  return "\\f";
                case "\n":
                  return "\\n";
                case "\r":
                  return "\\r";
                case "\t":
                  return "\\t";
                case "\v":
                  return "\\v";
              }
              var u = e + 1,
                o = u < r && n[u] >= "0" && n[u] <= "9" ? "\\&" : "";
              return "\\" + t.charCodeAt(0).toString(10) + o;
            }) +
            '"'
          );
        }),
        (r.showArrayImpl = function(n) {
          return function(r) {
            for (var t = [], e = 0, u = r.length; e < u; e++) t[e] = n(r[e]);
            return "[" + t.join(",") + "]";
          };
        }),
        (r.cons = function(n) {
          return function(r) {
            return [n].concat(r);
          };
        }),
        (r.join = function(n) {
          return function(r) {
            return r.join(n);
          };
        });
    },
    NI2e: function(n, r, t) {
      "use strict";
      var e = (function() {
        function n() {}
        return (n.value = new n()), n;
      })();
      n.exports = { RLProxy: e };
    },
    NucT: function(n, r, t) {
      "use strict";
      var e = t("56MN"),
        u = t("zo+L"),
        o = t("UbpX"),
        i = t("cvb+"),
        c = t("j3Ls"),
        f = t("BCFH"),
        a = t("6YwU"),
        s = t("Wxt0"),
        l = t("NI2e"),
        d = function(n, r) {
          (this.EqRecord0 = n), (this.compareRecord = r);
        },
        m = function(n, r) {
          (this.Eq10 = n), (this.compare1 = r);
        },
        p = function(n, r) {
          (this.Eq0 = n), (this.compare = r);
        },
        g = new p(
          function() {
            return u.eqVoid;
          },
          function(n) {
            return function(n) {
              return i.EQ.value;
            };
          }
        ),
        v = new p(
          function() {
            return u.eqUnit;
          },
          function(n) {
            return function(n) {
              return i.EQ.value;
            };
          }
        ),
        w = new p(function() {
          return u.eqString;
        }, o.unsafeCompare),
        R = new d(
          function() {
            return u.eqRowNil;
          },
          function(n) {
            return function(n) {
              return function(n) {
                return i.EQ.value;
              };
            };
          }
        ),
        h = new p(
          function() {
            return i.eqOrdering;
          },
          function(n) {
            return function(r) {
              if (n instanceof i.LT && r instanceof i.LT) return i.EQ.value;
              if (n instanceof i.EQ && r instanceof i.EQ) return i.EQ.value;
              if (n instanceof i.GT && r instanceof i.GT) return i.EQ.value;
              if (n instanceof i.LT) return i.LT.value;
              if (n instanceof i.EQ && r instanceof i.LT) return i.GT.value;
              if (n instanceof i.EQ && r instanceof i.GT) return i.LT.value;
              if (n instanceof i.GT) return i.GT.value;
              throw new Error(
                "Failed pattern match at Data.Ord (line 73, column 1 - line 73, column 37): " +
                  [n.constructor.name, r.constructor.name]
              );
            };
          }
        ),
        y = new p(function() {
          return u.eqNumber;
        }, o.unsafeCompare),
        b = new p(function() {
          return u.eqInt;
        }, o.unsafeCompare),
        S = new p(function() {
          return u.eqChar;
        }, o.unsafeCompare),
        x = new p(function() {
          return u.eqBoolean;
        }, o.unsafeCompare),
        A = function(n) {
          return n.compareRecord;
        },
        F = function(n) {
          return n.compare;
        },
        C = function(n) {
          return function(r) {
            return function(t) {
              return F(n)(r)(t) instanceof i.GT;
            };
          };
        },
        L = function(n) {
          return function(r) {
            return function(t) {
              return !(F(n)(r)(t) instanceof i.LT);
            };
          };
        },
        q = function(n) {
          return function(r) {
            return function(t) {
              return F(n)(r)(t) instanceof i.LT;
            };
          };
        },
        N = function(n) {
          return function(r) {
            return function(t) {
              var e = F(n)(r)(t);
              if (e instanceof i.LT) return t;
              if (e instanceof i.EQ) return r;
              if (e instanceof i.GT) return r;
              throw new Error(
                "Failed pattern match at Data.Ord (line 128, column 3 - line 131, column 12): " + [e.constructor.name]
              );
            };
          };
        },
        P = function(n) {
          return function(r) {
            return function(t) {
              var e = F(n)(r)(t);
              if (e instanceof i.LT) return r;
              if (e instanceof i.EQ) return r;
              if (e instanceof i.GT) return t;
              throw new Error(
                "Failed pattern match at Data.Ord (line 119, column 3 - line 122, column 12): " + [e.constructor.name]
              );
            };
          };
        },
        E = function(n) {
          return new p(
            function() {
              return u.eqArray(n.Eq0());
            },
            ((r = function(r) {
              return function(t) {
                var e = F(n)(r)(t);
                if (e instanceof i.EQ) return 0;
                if (e instanceof i.LT) return 1;
                if (e instanceof i.GT) return -1;
                throw new Error(
                  "Failed pattern match at Data.Ord (line 66, column 7 - line 71, column 1): " + [e.constructor.name]
                );
              };
            }),
            function(n) {
              return function(t) {
                return F(b)(0)(e.ordArrayImpl(r)(n)(t));
              };
            })
          );
          var r;
        },
        I = new m(
          function() {
            return u.eq1Array;
          },
          function(n) {
            return F(E(n));
          }
        );
      n.exports = {
        Ord: p,
        compare: F,
        Ord1: m,
        compare1: function(n) {
          return n.compare1;
        },
        lessThan: q,
        lessThanOrEq: function(n) {
          return function(r) {
            return function(t) {
              return !(F(n)(r)(t) instanceof i.GT);
            };
          };
        },
        greaterThan: C,
        greaterThanOrEq: L,
        comparing: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return F(n)(r(t))(r(e));
              };
            };
          };
        },
        min: P,
        max: N,
        clamp: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return P(n)(t)(N(n)(r)(e));
              };
            };
          };
        },
        between: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return !q(n)(e)(r) && !C(n)(e)(t);
              };
            };
          };
        },
        abs: function(n) {
          return function(r) {
            return function(t) {
              return L(n)(t)(f.zero(r.Semiring0())) ? t : c.negate(r)(t);
            };
          };
        },
        signum: function(n) {
          return function(r) {
            return function(t) {
              return L(n)(t)(f.zero(r.Semiring0())) ? f.one(r.Semiring0()) : c.negate(r)(f.one(r.Semiring0()));
            };
          };
        },
        OrdRecord: d,
        compareRecord: A,
        ordBoolean: x,
        ordInt: b,
        ordNumber: y,
        ordString: w,
        ordChar: S,
        ordUnit: v,
        ordVoid: g,
        ordArray: E,
        ordOrdering: h,
        ord1Array: I,
        ordRecordNil: R,
        ordRecordCons: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return new d(
                  function() {
                    return u.eqRowCons(n.EqRecord0())(r)(t)(e.Eq0());
                  },
                  function(r) {
                    return function(r) {
                      return function(o) {
                        var c = a.reflectSymbol(t)(a.SProxy.value),
                          f = F(e)(s.unsafeGet(c)(r))(s.unsafeGet(c)(o));
                        return u.notEq(i.eqOrdering)(f)(i.EQ.value) ? f : A(n)(l.RLProxy.value)(r)(o);
                      };
                    };
                  }
                );
              };
            };
          };
        },
        ordRecord: function(n) {
          return function(r) {
            return new p(function() {
              return u.eqRec(n)(r.EqRecord0());
            }, A(r)(l.RLProxy.value));
          };
        },
      };
      t("AKjc"), t("+8kv");
    },
    Pbck: function(n, r, t) {
      "use strict";
      var e = t("2MG2"),
        u = t("NucT"),
        o = t("cvb+"),
        i = t("AKjc"),
        c = function(n, r, t) {
          (this.Ord0 = n), (this.bottom = r), (this.top = t);
        },
        f = new c(
          function() {
            return u.ordUnit;
          },
          i.unit,
          i.unit
        ),
        a = new c(
          function() {
            return u.ordOrdering;
          },
          o.LT.value,
          o.GT.value
        ),
        s = new c(
          function() {
            return u.ordNumber;
          },
          e.bottomNumber,
          e.topNumber
        ),
        l = new c(
          function() {
            return u.ordInt;
          },
          e.bottomInt,
          e.topInt
        ),
        d = new c(
          function() {
            return u.ordChar;
          },
          e.bottomChar,
          e.topChar
        ),
        m = new c(
          function() {
            return u.ordBoolean;
          },
          !1,
          !0
        );
      n.exports = {
        Bounded: c,
        bottom: function(n) {
          return n.bottom;
        },
        top: function(n) {
          return n.top;
        },
        boundedBoolean: m,
        boundedInt: l,
        boundedChar: d,
        boundedOrdering: a,
        boundedUnit: f,
        boundedNumber: s,
      };
    },
    RNiq: function(n, r, t) {
      "use strict";
      t.r(r);
      var e = t("q1tI"),
        u = t.n(e),
        o = t("T6fZ");
      r.default = function() {
        return u.a.createElement("h1", null, Object(o.greeting)("World"));
      };
    },
    T4xb: function(n, r, t) {
      "use strict";
      var e = t("Z24z"),
        u = t("Hnrf"),
        o = t("cvb+"),
        i = t("KGqT"),
        c = t("6YwU"),
        f = t("AKjc"),
        a = t("Wxt0"),
        s = t("NI2e"),
        l = function(n, r) {
          (this.SemigroupRecord0 = n), (this.memptyRecord = r);
        },
        d = function(n, r) {
          (this.Semigroup0 = n), (this.mempty = r);
        },
        m = new d(function() {
          return i.semigroupUnit;
        }, f.unit),
        p = new d(function() {
          return i.semigroupString;
        }, ""),
        g = new l(
          function() {
            return i.semigroupRecordNil;
          },
          function(n) {
            return {};
          }
        ),
        v = new d(function() {
          return o.semigroupOrdering;
        }, o.EQ.value),
        w = new d(function() {
          return i.semigroupArray;
        }, []),
        R = function(n) {
          return n.memptyRecord;
        },
        h = function(n) {
          return n.mempty;
        };
      n.exports = {
        Monoid: d,
        mempty: h,
        power: function(n) {
          return function(r) {
            var t = function(o) {
              if (o <= 0) return h(n);
              if (1 === o) return r;
              if (0 === u.mod(u.euclideanRingInt)(o)(2)) {
                var c = t(u.div(u.euclideanRingInt)(o)(2));
                return i.append(n.Semigroup0())(c)(c);
              }
              if (e.otherwise)
                return (
                  (c = t(u.div(u.euclideanRingInt)(o)(2))), i.append(n.Semigroup0())(c)(i.append(n.Semigroup0())(c)(r))
                );
              throw new Error(
                "Failed pattern match at Data.Monoid (line 66, column 3 - line 66, column 17): " + [o.constructor.name]
              );
            };
            return t;
          };
        },
        guard: function(n) {
          return function(r) {
            return function(t) {
              if (r) return t;
              if (!r) return h(n);
              throw new Error(
                "Failed pattern match at Data.Monoid (line 74, column 1 - line 74, column 49): " +
                  [r.constructor.name, t.constructor.name]
              );
            };
          };
        },
        MonoidRecord: l,
        memptyRecord: R,
        monoidUnit: m,
        monoidOrdering: v,
        monoidFn: function(n) {
          return new d(
            function() {
              return i.semigroupFn(n.Semigroup0());
            },
            function(r) {
              return h(n);
            }
          );
        },
        monoidString: p,
        monoidArray: w,
        monoidRecord: function(n) {
          return function(r) {
            return new d(function() {
              return i.semigroupRecord(n)(r.SemigroupRecord0());
            }, R(r)(s.RLProxy.value));
          };
        },
        monoidRecordNil: g,
        monoidRecordCons: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return new l(
                  function() {
                    return i.semigroupRecordCons(n)(t)(e.SemigroupRecord0())(r.Semigroup0());
                  },
                  function(t) {
                    var u = R(e)(s.RLProxy.value),
                      o = c.reflectSymbol(n)(c.SProxy.value);
                    return a.unsafeSet(o)(h(r))(u);
                  }
                );
              };
            };
          };
        },
      };
      t("zo+L"), t("NucT");
    },
    T6fZ: function(n, r, t) {
      "use strict";
      n.exports = {
        greeting: function(n) {
          return "Hello from PureScript, " + n + "!";
        },
      };
      t("sygH");
    },
    Tx0b: function(n, r, t) {
      "use strict";
      (r.unsafeHas = function(n) {
        return function(r) {
          return {}.hasOwnProperty.call(r, n);
        };
      }),
        (r.unsafeGet = function(n) {
          return function(r) {
            return r[n];
          };
        }),
        (r.unsafeSet = function(n) {
          return function(r) {
            return function(t) {
              var e = {};
              for (var u in t) ({}.hasOwnProperty.call(t, u) && (e[u] = t[u]));
              return (e[n] = r), e;
            };
          };
        }),
        (r.unsafeDelete = function(n) {
          return function(r) {
            var t = {};
            for (var e in r) e !== n && {}.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            return t;
          };
        });
    },
    UCB5: function(n, r, t) {
      "use strict";
      var e = t("v0Xu"),
        u = t("AKjc"),
        o = function(n, r) {
          (this.Apply0 = n), (this.pure = r);
        },
        i = function(n) {
          return n.pure;
        },
        c = new o(
          function() {
            return e.applyFn;
          },
          function(n) {
            return function(r) {
              return n;
            };
          }
        ),
        f = new o(
          function() {
            return e.applyArray;
          },
          function(n) {
            return [n];
          }
        );
      n.exports = {
        Applicative: o,
        pure: i,
        liftA1: function(n) {
          return function(r) {
            return function(t) {
              return e.apply(n.Apply0())(i(n)(r))(t);
            };
          };
        },
        unless: function(n) {
          return function(r) {
            return function(t) {
              if (!r) return t;
              if (r) return i(n)(u.unit);
              throw new Error(
                "Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " +
                  [r.constructor.name, t.constructor.name]
              );
            };
          };
        },
        when: function(n) {
          return function(r) {
            return function(t) {
              if (r) return t;
              if (!r) return i(n)(u.unit);
              throw new Error(
                "Failed pattern match at Control.Applicative (line 57, column 1 - line 57, column 63): " +
                  [r.constructor.name, t.constructor.name]
              );
            };
          };
        },
        applicativeFn: c,
        applicativeArray: f,
      };
      t("sAO9");
    },
    UbpX: function(n, r, t) {
      "use strict";
      var e = t("bAAa"),
        u = t("cvb+"),
        o = e.unsafeCompareImpl(u.LT.value)(u.EQ.value)(u.GT.value);
      n.exports = { unsafeCompare: o };
    },
    UhtL: function(n, r, t) {
      "use strict";
      var e = t("MYiI"),
        u = t("6YwU"),
        o = t("Wxt0"),
        i = t("NI2e"),
        c = function(n) {
          this.showRecordFields = n;
        },
        f = function(n) {
          this.show = n;
        },
        a = new f(e.showStringImpl),
        s = new c(function(n) {
          return function(n) {
            return [];
          };
        }),
        l = function(n) {
          return n.showRecordFields;
        },
        d = new f(e.showNumberImpl),
        m = new f(e.showIntImpl),
        p = new f(e.showCharImpl),
        g = new f(function(n) {
          if (n) return "true";
          if (!n) return "false";
          throw new Error(
            "Failed pattern match at Data.Show (line 20, column 1 - line 20, column 37): " + [n.constructor.name]
          );
        }),
        v = function(n) {
          return n.show;
        };
      n.exports = {
        Show: f,
        show: v,
        ShowRecordFields: c,
        showRecordFields: l,
        showBoolean: g,
        showInt: m,
        showNumber: d,
        showChar: p,
        showString: a,
        showArray: function(n) {
          return new f(e.showArrayImpl(v(n)));
        },
        showRecord: function(n) {
          return function(n) {
            return new f(function(r) {
              var t = l(n)(i.RLProxy.value)(r);
              return 0 === t.length ? "{}" : e.join(" ")(["{", e.join(", ")(t), "}"]);
            });
          };
        },
        showRecordFieldsNil: s,
        showRecordFieldsCons: function(n) {
          return function(r) {
            return function(t) {
              return new c(function(c) {
                return function(c) {
                  var f = l(r)(i.RLProxy.value)(c),
                    a = u.reflectSymbol(n)(u.SProxy.value),
                    s = o.unsafeGet(a)(c);
                  return e.cons(e.join(": ")([a, v(t)(s)]))(f);
                };
              });
            };
          };
        },
      };
    },
    UlDY: function(n, r, t) {
      "use strict";
      (r.intAdd = function(n) {
        return function(r) {
          return (n + r) | 0;
        };
      }),
        (r.intMul = function(n) {
          return function(r) {
            return (n * r) | 0;
          };
        }),
        (r.numAdd = function(n) {
          return function(r) {
            return n + r;
          };
        }),
        (r.numMul = function(n) {
          return function(r) {
            return n * r;
          };
        });
    },
    Wxt0: function(n, r, t) {
      "use strict";
      var e = t("Tx0b");
      n.exports = {
        unsafeHas: e.unsafeHas,
        unsafeGet: e.unsafeGet,
        unsafeSet: e.unsafeSet,
        unsafeDelete: e.unsafeDelete,
      };
    },
    YrJM: function(n, r, t) {
      "use strict";
      var e = t("Z24z");
      n.exports = {
        flip: function(n) {
          return function(r) {
            return function(t) {
              return n(t)(r);
            };
          };
        },
        const: function(n) {
          return function(r) {
            return n;
          };
        },
        apply: function(n) {
          return function(r) {
            return n(r);
          };
        },
        applyFlipped: function(n) {
          return function(r) {
            return r(n);
          };
        },
        applyN: function(n) {
          return function(r) {
            return function(t) {
              var u,
                o = r,
                i = !1;
              function c(r, u) {
                if (r <= 0) return (i = !0), u;
                if (e.otherwise) return (o = (r - 1) | 0), void (t = n(u));
                throw new Error(
                  "Failed pattern match at Data.Function (line 94, column 3 - line 96, column 37): " +
                    [r.constructor.name, u.constructor.name]
                );
              }
              for (; !i; ) u = c(o, t);
              return u;
            };
          };
        },
        on: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return n(r(t))(r(e));
              };
            };
          };
        },
      };
      t("4Bm9"), t("NucT"), t("j3Ls");
    },
    Z24z: function(n, r, t) {
      "use strict";
      n.exports = { otherwise: !0 };
    },
    Z7LG: function(n, r, t) {
      "use strict";
      var e = t("oLaZ"),
        u = t("v0Xu"),
        o = t("4Bm9"),
        i = t("YrJM"),
        c = function(n) {
          this.discard = n;
        },
        f = function(n, r) {
          (this.Apply0 = n), (this.bind = r);
        },
        a = new f(
          function() {
            return u.applyFn;
          },
          function(n) {
            return function(r) {
              return function(t) {
                return r(n(t))(t);
              };
            };
          }
        ),
        s = new f(function() {
          return u.applyArray;
        }, e.arrayBind),
        l = function(n) {
          return n.bind;
        },
        d = function(n) {
          return i.flip(l(n));
        },
        m = new c(function(n) {
          return l(n);
        });
      n.exports = {
        Bind: f,
        bind: l,
        bindFlipped: d,
        Discard: c,
        discard: function(n) {
          return n.discard;
        },
        join: function(n) {
          return function(r) {
            return l(n)(r)(o.identity(o.categoryFn));
          };
        },
        composeKleisli: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return l(n)(r(e))(t);
              };
            };
          };
        },
        composeKleisliFlipped: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return d(n)(r)(t(e));
              };
            };
          };
        },
        ifM: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return l(n)(r)(function(n) {
                  return n ? t : e;
                });
              };
            };
          };
        },
        bindFn: a,
        bindArray: s,
        discardUnit: m,
      };
      t("UCB5"), t("sAO9"), t("AKjc");
    },
    bAAa: function(n, r, t) {
      "use strict";
      r.unsafeCompareImpl = function(n) {
        return function(r) {
          return function(t) {
            return function(e) {
              return function(u) {
                return e < u ? n : e === u ? r : t;
              };
            };
          };
        };
      };
    },
    "cvb+": function(n, r, t) {
      "use strict";
      var e = t("zo+L"),
        u = t("KGqT"),
        o = t("UhtL"),
        i = (function() {
          function n() {}
          return (n.value = new n()), n;
        })(),
        c = (function() {
          function n() {}
          return (n.value = new n()), n;
        })(),
        f = (function() {
          function n() {}
          return (n.value = new n()), n;
        })(),
        a = new o.Show(function(n) {
          if (n instanceof i) return "LT";
          if (n instanceof c) return "GT";
          if (n instanceof f) return "EQ";
          throw new Error(
            "Failed pattern match at Data.Ordering (line 26, column 1 - line 26, column 39): " + [n.constructor.name]
          );
        }),
        s = new u.Semigroup(function(n) {
          return function(r) {
            if (n instanceof i) return i.value;
            if (n instanceof c) return c.value;
            if (n instanceof f) return r;
            throw new Error(
              "Failed pattern match at Data.Ordering (line 21, column 1 - line 21, column 49): " +
                [n.constructor.name, r.constructor.name]
            );
          };
        }),
        l = new e.Eq(function(n) {
          return function(r) {
            return (
              (n instanceof i && r instanceof i) ||
              ((n instanceof c && r instanceof c) || (n instanceof f && r instanceof f))
            );
          };
        });
      n.exports = {
        LT: i,
        GT: c,
        EQ: f,
        invert: function(n) {
          if (n instanceof c) return i.value;
          if (n instanceof f) return f.value;
          if (n instanceof i) return c.value;
          throw new Error(
            "Failed pattern match at Data.Ordering (line 33, column 1 - line 33, column 31): " + [n.constructor.name]
          );
        },
        eqOrdering: l,
        semigroupOrdering: s,
        showOrdering: a,
      };
    },
    j3Ls: function(n, r, t) {
      "use strict";
      var e = t("CDes"),
        u = t("BCFH"),
        o = t("6YwU"),
        i = t("AKjc"),
        c = t("Wxt0"),
        f = t("NI2e"),
        a = function(n, r) {
          (this.SemiringRecord0 = n), (this.subRecord = r);
        },
        s = function(n, r) {
          (this.Semiring0 = n), (this.sub = r);
        },
        l = function(n) {
          return n.subRecord;
        },
        d = function(n) {
          return n.sub;
        },
        m = new s(
          function() {
            return u.semiringUnit;
          },
          function(n) {
            return function(n) {
              return i.unit;
            };
          }
        ),
        p = new a(
          function() {
            return u.semiringRecordNil;
          },
          function(n) {
            return function(n) {
              return function(n) {
                return {};
              };
            };
          }
        ),
        g = new s(function() {
          return u.semiringNumber;
        }, e.numSub),
        v = new s(function() {
          return u.semiringInt;
        }, e.intSub);
      n.exports = {
        Ring: s,
        sub: d,
        negate: function(n) {
          return function(r) {
            return d(n)(u.zero(n.Semiring0()))(r);
          };
        },
        RingRecord: a,
        subRecord: l,
        ringInt: v,
        ringNumber: g,
        ringUnit: m,
        ringFn: function(n) {
          return new s(
            function() {
              return u.semiringFn(n.Semiring0());
            },
            function(r) {
              return function(t) {
                return function(e) {
                  return d(n)(r(e))(t(e));
                };
              };
            }
          );
        },
        ringRecord: function(n) {
          return function(r) {
            return new s(function() {
              return u.semiringRecord(n)(r.SemiringRecord0());
            }, l(r)(f.RLProxy.value));
          };
        },
        ringRecordNil: p,
        ringRecordCons: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return new a(
                  function() {
                    return u.semiringRecordCons(n)(r)(t.SemiringRecord0())(e.Semiring0());
                  },
                  function(r) {
                    return function(r) {
                      return function(u) {
                        var i = l(t)(f.RLProxy.value)(r)(u),
                          a = o.reflectSymbol(n)(o.SProxy.value),
                          s = c.unsafeSet(a),
                          m = c.unsafeGet(a);
                        return s(d(e)(m(r))(m(u)))(i);
                      };
                    };
                  }
                );
              };
            };
          };
        },
      };
    },
    kWHk: function(n, r, t) {
      "use strict";
      r.unsafeCoerce = function(n) {
        return n;
      };
    },
    oLEg: function(n, r, t) {
      "use strict";
      var e = (function() {
        function n() {}
        return (n.value = new n()), n;
      })();
      n.exports = { RProxy: e };
    },
    oLaZ: function(n, r, t) {
      "use strict";
      r.arrayBind = function(n) {
        return function(r) {
          for (var t = [], e = 0, u = n.length; e < u; e++) Array.prototype.push.apply(t, r(n[e]));
          return t;
        };
      };
    },
    pCBV: function(n, r, t) {
      "use strict";
      var e = t("j3Ls"),
        u = t("BCFH"),
        o = function(n, r) {
          (this.Ring0 = n), (this.recip = r);
        },
        i = function(n) {
          return n.recip;
        },
        c = new o(
          function() {
            return e.ringNumber;
          },
          function(n) {
            return 1 / n;
          }
        );
      n.exports = {
        DivisionRing: o,
        recip: i,
        leftDiv: function(n) {
          return function(r) {
            return function(t) {
              return u.mul(n.Ring0().Semiring0())(i(n)(t))(r);
            };
          };
        },
        rightDiv: function(n) {
          return function(r) {
            return function(t) {
              return u.mul(n.Ring0().Semiring0())(r)(i(n)(t));
            };
          };
        },
        divisionringNumber: c,
      };
      t("Hnrf");
    },
    sAO9: function(n, r, t) {
      "use strict";
      var e = t("wHBl"),
        u = t("CgSG"),
        o = t("YrJM"),
        i = t("AKjc"),
        c = function(n) {
          this.map = n;
        },
        f = function(n) {
          return n.map;
        },
        a = new c(u.compose(u.semigroupoidFn)),
        s = new c(e.arrayMap);
      n.exports = {
        Functor: c,
        map: f,
        mapFlipped: function(n) {
          return function(r) {
            return function(t) {
              return f(n)(t)(r);
            };
          };
        },
        void: function(n) {
          return f(n)(o.const(i.unit));
        },
        voidRight: function(n) {
          return function(r) {
            return f(n)(o.const(r));
          };
        },
        voidLeft: function(n) {
          return function(r) {
            return function(t) {
              return f(n)(o.const(t))(r);
            };
          };
        },
        flap: function(n) {
          return function(r) {
            return function(t) {
              return f(n)(function(n) {
                return n(t);
              })(r);
            };
          };
        },
        functorFn: a,
        functorArray: s,
      };
    },
    sygH: function(n, r, t) {
      "use strict";
      n.exports = {};
      t("UCB5"),
        t("v0Xu"),
        t("Z7LG"),
        t("4Bm9"),
        t("IGzz"),
        t("CgSG"),
        t("Z24z"),
        t("GvED"),
        t("Pbck"),
        t("5QI5"),
        t("pCBV"),
        t("zo+L"),
        t("Hnrf"),
        t("771w"),
        t("YrJM"),
        t("sAO9"),
        t("9/Dw"),
        t("T4xb"),
        t("Dstg"),
        t("NucT"),
        t("cvb+"),
        t("j3Ls"),
        t("KGqT"),
        t("BCFH"),
        t("UhtL"),
        t("AKjc"),
        t("+8kv");
    },
    v0Xu: function(n, r, t) {
      "use strict";
      var e = t("2UUF"),
        u = t("4Bm9"),
        o = t("YrJM"),
        i = t("sAO9"),
        c = function(n, r) {
          (this.Functor0 = n), (this.apply = r);
        },
        f = new c(
          function() {
            return i.functorFn;
          },
          function(n) {
            return function(r) {
              return function(t) {
                return n(t)(r(t));
              };
            };
          }
        ),
        a = new c(function() {
          return i.functorArray;
        }, e.arrayApply),
        s = function(n) {
          return n.apply;
        };
      n.exports = {
        Apply: c,
        apply: s,
        applyFirst: function(n) {
          return function(r) {
            return function(t) {
              return s(n)(i.map(n.Functor0())(o.const)(r))(t);
            };
          };
        },
        applySecond: function(n) {
          return function(r) {
            return function(t) {
              return s(n)(i.map(n.Functor0())(o.const(u.identity(u.categoryFn)))(r))(t);
            };
          };
        },
        lift2: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return s(n)(i.map(n.Functor0())(r)(t))(e);
              };
            };
          };
        },
        lift3: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return function(u) {
                  return s(n)(s(n)(i.map(n.Functor0())(r)(t))(e))(u);
                };
              };
            };
          };
        },
        lift4: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return function(u) {
                  return function(o) {
                    return s(n)(s(n)(s(n)(i.map(n.Functor0())(r)(t))(e))(u))(o);
                  };
                };
              };
            };
          };
        },
        lift5: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return function(u) {
                  return function(o) {
                    return function(c) {
                      return s(n)(s(n)(s(n)(s(n)(i.map(n.Functor0())(r)(t))(e))(u))(o))(c);
                    };
                  };
                };
              };
            };
          };
        },
        applyFn: f,
        applyArray: a,
      };
    },
    vlRD: function(n, r, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function() {
          var n = t("RNiq");
          return { page: n.default || n };
        },
      ]);
    },
    wHBl: function(n, r, t) {
      "use strict";
      r.arrayMap = function(n) {
        return function(r) {
          for (var t = r.length, e = new Array(t), u = 0; u < t; u++) e[u] = n(r[u]);
          return e;
        };
      };
    },
    "zo+L": function(n, r, t) {
      "use strict";
      var e = t("3adS"),
        u = t("6YwU"),
        o = t("Wxt0"),
        i = t("NI2e"),
        c = function(n) {
          this.eqRecord = n;
        },
        f = function(n) {
          this.eq1 = n;
        },
        a = function(n) {
          this.eq = n;
        },
        s = new a(function(n) {
          return function(n) {
            return !0;
          };
        }),
        l = new a(function(n) {
          return function(n) {
            return !0;
          };
        }),
        d = new a(e.refEq),
        m = new c(function(n) {
          return function(n) {
            return function(n) {
              return !0;
            };
          };
        }),
        p = function(n) {
          return n.eqRecord;
        },
        g = new a(e.refEq),
        v = new a(e.refEq),
        w = new a(e.refEq),
        R = new a(e.refEq),
        h = function(n) {
          return n.eq1;
        },
        y = function(n) {
          return n.eq;
        },
        b = function(n) {
          return new a(e.eqArrayImpl(y(n)));
        },
        S = new f(function(n) {
          return y(b(n));
        });
      n.exports = {
        Eq: a,
        eq: y,
        notEq: function(n) {
          return function(r) {
            return function(t) {
              return y(R)(y(n)(r)(t))(!1);
            };
          };
        },
        Eq1: f,
        eq1: h,
        notEq1: function(n) {
          return function(r) {
            return function(t) {
              return function(e) {
                return y(R)(h(n)(r)(t)(e))(!1);
              };
            };
          };
        },
        EqRecord: c,
        eqRecord: p,
        eqBoolean: R,
        eqInt: v,
        eqNumber: g,
        eqChar: w,
        eqString: d,
        eqUnit: l,
        eqVoid: s,
        eqArray: b,
        eqRec: function(n) {
          return function(n) {
            return new a(p(n)(i.RLProxy.value));
          };
        },
        eq1Array: S,
        eqRowNil: m,
        eqRowCons: function(n) {
          return function(r) {
            return function(r) {
              return function(t) {
                return new c(function(e) {
                  return function(e) {
                    return function(c) {
                      var f = p(n)(i.RLProxy.value)(e)(c),
                        a = u.reflectSymbol(r)(u.SProxy.value),
                        s = o.unsafeGet(a);
                      return y(t)(s(e))(s(c)) && f;
                    };
                  };
                });
              };
            };
          };
        },
      };
      t("9/Dw"), t("AKjc"), t("+8kv");
    },
  },
  [["vlRD", "5d41", "9da1"]],
]);
