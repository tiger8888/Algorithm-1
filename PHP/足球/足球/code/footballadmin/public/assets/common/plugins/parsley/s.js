!function(e) {
    "use strict";
    var t = function(e) {
        this.messages = {
            defaultMessage:"请填写有效的 内容",
            type:{
                email:"请填写有效的 Email 地址",
                url:"请填写有效的 URL",
                urlstrict:"请填写有效的 URL",
                number:"请填写有效的 数字",
                digits:"请填写有效的 数字2",
                dateIso:"请填写有效的 日期 (YYYY-MM-DD).",
                alphanum:"请填写有效的 字母与数字",
                phone:"请填写有效的 电话号码"
            },
            notnull:"该字段不能为空",
            notblank:"该字段不能为空2",
            required:"",
            regexp:"格式错误，请按照提示给出示例格式填写",
            min:"该字段值必须大于等于 %s",
            max:"该字段值必须小于等于 %s",
            range:"该字段值必须在 %s 与 %s 之间",
            minlength:"该字段值太短，必须在 %s 个字符以上",
            maxlength:"该字段值太长，必须在 %s 个字符以内",
            rangelength:"该字段值长度无效，必须在 %s 到 %s 个字符之间",
            mincheck:"您必须至少选择 %s 项",
            maxcheck:"您最多只能选择 %s 项",
            rangecheck:"您必须选择 %s 到 %s 项",
            equalto:"该字段值必须相同",
            notequal:"该字段值不能等于 %s"
        }, this.init(e);
    };
    t.prototype = {
        constructor:t,
        validators:{
            notnull:function(e) {
                return e.length > 0;
            },
            notblank:function(e) {
                return "string" === typeof e && "" !== e.replace(/^\s+/g, "").replace(/\s+$/g, "");
            },
            required:function(e) {
                if ("object" === typeof e) {
                    for (var t in e) {
                        if (this.required(e[t])) {
                            return true;
                        }
                    }
                    return false;
                }
                return this.notnull(e) && this.notblank(e);
            },
            type:function(e, t) {
                var n;
                switch (t) {
                    case "number":
                        n = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/;
                        break;

                    case "digits":
                        n = /^\d+$/;
                        break;

                    case "alphanum":
                        n = /^\w+$/;
                        break;

                    case "email":
                        n = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
                        break;

                    case "url":
                        e = new RegExp("(https?|s?ftp|git)", "i").test(e) ? e :"http://" + e;

                    case "urlstrict":
                        n = /^(https?|s?ftp|git):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
                        break;

                    case "dateIso":
                        n = /^(\d{4})\D?(0[1-9]|1[0-2])\D?([12]\d|0[1-9]|3[01])$/;
                        break;

                    case "phone":
                        n = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
                        break;

                    default:
                        return false;
                }
                return "" !== e ? n.test(e) :false;
            },
            regexp:function(e, t, n) {
                return new RegExp(t, n.options.regexpFlag || "").test(e);
            },
            minlength:function(e, t) {
                return e.length >= t;
            },
            maxlength:function(e, t) {
                return e.length <= t;
            },
            rangelength:function(e, t) {
                return this.minlength(e, t[0]) && this.maxlength(e, t[1]);
            },
            min:function(e, t) {
                return Number(e) >= t;
            },
            max:function(e, t) {
                return Number(e) <= t;
            },
            range:function(e, t) {
                return e >= t[0] && e <= t[1];
            },
            equalto:function(t, n, r) {
                r.options.validateIfUnchanged = true;
                return t === e(n).val();
            },
            notequal:function(e, t, n) {
                return t ? e != t :true;
            },
            remote:function(t, n, r) {
                var i = null, s = {}, o = {};
                s[r.$element.attr("name")] = t;
                if ("undefined" !== typeof r.options.remoteDatatype) {
                    o = {
                        dataType:r.options.remoteDatatype
                    };
                }
                var u = function(t, n) {
                    if ("undefined" !== typeof n && "undefined" !== typeof r.Validator.messages.remote && n !== r.Validator.messages.remote) {
                        e(r.ulError + " .remote").remove();
                    }
                    r.updtConstraint({
                        name:"remote",
                        valid:t
                    }, n);
                    r.manageValidationResult();
                };
                var a = function(t) {
                    if ("object" === typeof t) {
                        return t;
                    }
                    try {
                        t = e.parseJSON(t);
                    } catch (n) {}
                    return t;
                };
                var f = function(e) {
                    return "object" === typeof e && null !== e ? "undefined" !== typeof e.error ? e.error :"undefined" !== typeof e.message ? e.message :null :null;
                };
                e.ajax(e.extend({}, {
                    url:n,
                    data:s,
                    type:r.options.remoteMethod || "GET",
                    success:function(e) {
                        e = a(e);
                        u(1 === e || true === e || "object" === typeof e && null !== e && "undefined" !== typeof e.success, f(e));
                    },
                    error:function(e) {
                        e = a(e);
                        u(false, f(e));
                    }
                }, o));
                return i;
            },
            mincheck:function(e, t) {
                return this.minlength(e, t);
            },
            maxcheck:function(e, t) {
                return this.maxlength(e, t);
            },
            rangecheck:function(e, t) {
                return this.rangelength(e, t);
            }
        },
        init:function(e) {
            var t = e.validators, n = e.messages;
            var r;
            for (r in t) {
                this.addValidator(r, t[r]);
            }
            for (r in n) {
                this.addMessage(r, n[r]);
            }
        },
        formatMesssage:function(e, t) {
            if ("object" === typeof t) {
                for (var n in t) {
                    e = this.formatMesssage(e, t[n]);
                }
                return e;
            }
            return "string" === typeof e ? e.replace(new RegExp("%s", "i"), t) :"";
        },
        addValidator:function(e, t) {
            this.validators[e] = t;
        },
        addMessage:function(e, t, n) {
            if ("undefined" !== typeof n && true === n) {
                this.messages.type[e] = t;
                return;
            }
            if ("type" === e) {
                for (var r in t) {
                    this.messages.type[r] = t[r];
                }
                return;
            }
            this.messages[e] = t;
        }
    };
    var n = function(e, n, r) {
        this.options = n;
        this.Validator = new t(n);
        if (r === "ParsleyFieldMultiple") {
            return this;
        }
        this.init(e, r || "ParsleyField");
    };
    n.prototype = {
        constructor:n,
        init:function(t, n) {
            this.type = n;
            this.valid = true;
            this.element = t;
            this.validatedOnce = false;
            this.$element = e(t);
            this.val = this.$element.val();
            this.isRequired = false;
            this.constraints = {};
            if ("undefined" === typeof this.isRadioOrCheckbox) {
                this.isRadioOrCheckbox = false;
                this.hash = this.generateHash();
                this.errorClassHandler = this.options.errors.classHandler(t, this.isRadioOrCheckbox) || this.$element;
            }
            this.ulErrorManagement();
            this.bindHtml5Constraints();
            this.addConstraints();
            if (this.hasConstraints()) {
                this.bindValidationEvents();
            }
        },
        setParent:function(t) {
            this.$parent = e(t);
        },
        getParent:function() {
            return this.$parent;
        },
        bindHtml5Constraints:function() {
            if (this.$element.hasClass("required") || this.$element.prop("required")) {
                this.options.required = true;
            }
            if ("undefined" !== typeof this.$element.attr("type") && new RegExp(this.$element.attr("type"), "i").test("email url number range")) {
                this.options.type = this.$element.attr("type");
                if (new RegExp(this.options.type, "i").test("number range")) {
                    this.options.type = "number";
                    if ("undefined" !== typeof this.$element.attr("min") && this.$element.attr("min").length) {
                        this.options.min = this.$element.attr("min");
                    }
                    if ("undefined" !== typeof this.$element.attr("max") && this.$element.attr("max").length) {
                        this.options.max = this.$element.attr("max");
                    }
                }
            }
            if ("string" === typeof this.$element.attr("pattern") && this.$element.attr("pattern").length) {
                this.options.regexp = this.$element.attr("pattern");
            }
        },
        addConstraints:function() {
            for (var e in this.options) {
                var t = {};
                t[e] = this.options[e];
                this.addConstraint(t, true);
            }
        },
        addConstraint:function(e, t) {
            for (var n in e) {
                n = n.toLowerCase();
                if ("function" === typeof this.Validator.validators[n]) {
                    this.constraints[n] = {
                        name:n,
                        requirements:e[n],
                        valid:null
                    };
                    if (n === "required") {
                        this.isRequired = true;
                    }
                    this.addCustomConstraintMessage(n);
                }
            }
            if ("undefined" === typeof t) {
                this.bindValidationEvents();
            }
        },
        updateConstraint:function(e, t) {
            for (var n in e) {
                this.updtConstraint({
                    name:n,
                    requirements:e[n],
                    valid:null
                }, t);
            }
        },
        updtConstraint:function(t, n) {
            this.constraints[t.name] = e.extend(true, this.constraints[t.name], t);
            if ("string" === typeof n) {
                this.Validator.messages[t.name] = n;
            }
            this.bindValidationEvents();
        },
        removeConstraint:function(e) {
            var e = e.toLowerCase();
            delete this.constraints[e];
            if (e === "required") {
                this.isRequired = false;
            }
            if (!this.hasConstraints()) {
                if ("ParsleyForm" === typeof this.getParent()) {
                    this.getParent().removeItem(this.$element);
                    return;
                }
                this.destroy();
                return;
            }
            this.bindValidationEvents();
        },
        addCustomConstraintMessage:function(e) {
            var t = e + ("type" === e && "undefined" !== typeof this.options[e] ? this.options[e].charAt(0).toUpperCase() + this.options[e].substr(1) :"") + "Message";
            if ("undefined" !== typeof this.options[t]) {
                this.Validator.addMessage("type" === e ? this.options[e] :e, this.options[t], "type" === e);
            }
        },
        bindValidationEvents:function() {
            this.valid = null;
            this.$element.addClass("parsley-validated");
            this.$element.off("." + this.type);
            if (this.options.remote && !new RegExp("change", "i").test(this.options.trigger)) {
                this.options.trigger = !this.options.trigger ? "change" :" change";
            }
            var t = (!this.options.trigger ? "" :this.options.trigger) + (new RegExp("key", "i").test(this.options.trigger) ? "" :" keyup");
            if (this.$element.is("select")) {
                t += new RegExp("change", "i").test(t) ? "" :" change";
            }
            t = t.replace(/^\s+/g, "").replace(/\s+$/g, "");
            this.$element.on((t + " ").split(" ").join("." + this.type + " "), false, e.proxy(this.eventValidation, this));
        },
        generateHash:function() {
            return "parsley-" + (Math.random() + "").substring(2);
        },
        getHash:function() {
            return this.hash;
        },
        getVal:function() {
            return this.$element.data("value") || this.$element.val();
        },
        eventValidation:function(e) {
            var t = this.getVal();
            if (e.type === "keyup" && !/keyup/i.test(this.options.trigger) && !this.validatedOnce) {
                return true;
            }
            if (e.type === "change" && !/change/i.test(this.options.trigger) && !this.validatedOnce) {
                return true;
            }
            if (!this.isRadioOrCheckbox && this.getLength(t) < this.options.validationMinlength && !this.validatedOnce) {
                return true;
            }
            this.validate();
        },
        getLength:function(e) {
            if (!e || !e.hasOwnProperty("length")) return 0;
            return e.length;
        },
        isValid:function() {
            return this.validate(false);
        },
        hasConstraints:function() {
            for (var e in this.constraints) {
                return true;
            }
            return false;
        },
        validate:function(e) {
            var t = this.getVal(), n = null;
            if (!this.hasConstraints()) {
                return null;
            }
            if (this.options.listeners.onFieldValidate(this.element, this) || "" === t && !this.isRequired) {
                this.reset();
                return null;
            }
            if (!this.needsValidation(t)) {
                return this.valid;
            }
            n = this.applyValidators();
            if ("undefined" !== typeof e ? e :this.options.showErrors) {
                this.manageValidationResult();
            }
            return n;
        },
        needsValidation:function(e) {
            if (!this.options.validateIfUnchanged && this.valid !== null && this.val === e && this.validatedOnce) {
                return false;
            }
            this.val = e;
            return this.validatedOnce = true;
        },
        applyValidators:function() {
            var e = null;
            for (var t in this.constraints) {
                var n = this.Validator.validators[this.constraints[t].name](this.val, this.constraints[t].requirements, this);
                if (false === n) {
                    e = false;
                    this.constraints[t].valid = e;
                } else if (true === n) {
                    this.constraints[t].valid = true;
                    e = false !== e;
                }
            }
            if (false === e) {
                this.options.listeners.onFieldError(this.element, this.constraints, this);
            } else if (true === e && false === this.options.listeners.onFieldSuccess(this.element, this.constraints, this)) {
                e = false;
            }
            return e;
        },
        manageValidationResult:function() {
            var t = null;
            for (var n in this.constraints) {
                if (false === this.constraints[n].valid) {
                    this.manageError(this.constraints[n]);
                    t = false;
                } else if (true === this.constraints[n].valid) {
                    this.removeError(this.constraints[n].name);
                    t = false !== t;
                }
            }
            this.valid = t;
            if (true === this.valid) {
                this.removeErrors();
                this.errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
                return true;
            } else if (false === this.valid) {
                this.errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
                return false;
            }
            if (this.ulError && e(this.ulError).children().length === 0) {
                this.removeErrors();
            }
            return t;
        },
        ulErrorManagement:function() {
            this.ulError = "#" + this.hash;
            this.ulTemplate = e(this.options.errors.errorsWrapper).attr("id", this.hash).addClass("parsley-error-list");
        },
        removeError:function(t) {
            var n = this.ulError + " ." + t, r = this;
            this.options.animate ? e(n).fadeOut(this.options.animateDuration, function() {
                e(this).remove();
                if (r.ulError && e(r.ulError).children().length === 0) {
                    r.removeErrors();
                }
            }) :e(n).remove();
        },
        addError:function(t) {
            for (var n in t) {
                var r = e(this.options.errors.errorElem).addClass(n);
                e(this.ulError).append(this.options.animate ? e(r).html(t[n]).hide().fadeIn(this.options.animateDuration) :e(r).html(t[n]));
            }
        },
        removeErrors:function() {
            this.options.animate ? e(this.ulError).fadeOut(this.options.animateDuration, function() {
                e(this).remove();
            }) :e(this.ulError).remove();
        },
        reset:function() {
            this.valid = null;
            this.removeErrors();
            this.validatedOnce = false;
            this.errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
            for (var e in this.constraints) {
                this.constraints[e].valid = null;
            }
            return this;
        },
        manageError:function(t) {
            if (!e(this.ulError).length) {
                this.manageErrorContainer();
            }
            if ("required" === t.name && null !== this.getVal() && this.getVal().length > 0) {
                return;
            } else if (this.isRequired && "required" !== t.name && (null === this.getVal() || 0 === this.getVal().length)) {
                this.removeError(t.name);
                return;
            }
            var n = t.name, r = false !== this.options.errorMessage ? "custom-error-message" :n, i = {}, s = false !== this.options.errorMessage ? this.options.errorMessage :t.name === "type" ? this.Validator.messages[n][t.requirements] :"undefined" === typeof this.Validator.messages[n] ? this.Validator.messages.defaultMessage :this.Validator.formatMesssage(this.Validator.messages[n], t.requirements);
            if (!e(this.ulError + " ." + r).length) {
                i[r] = s;
                this.addError(i);
            }
        },
        manageErrorContainer:function() {
            var t = this.options.errorContainer || this.options.errors.container(this.element, this.isRadioOrCheckbox), n = this.options.animate ? this.ulTemplate.show() :this.ulTemplate;
            if ("undefined" !== typeof t) {
                e(t).append(n);
                return;
            }
            !this.isRadioOrCheckbox ? this.$element.after(n) :this.$element.parent().after(n);
        },
        addListener:function(e) {
            for (var t in e) {
                this.options.listeners[t] = e[t];
            }
        },
        destroy:function() {
            this.$element.removeClass("parsley-validated");
            this.reset().$element.off("." + this.type).removeData(this.type);
        }
    };
    var r = function(e, n, r) {
        this.initMultiple(e, n);
        this.inherit(e, n);
        this.Validator = new t(n);
        this.init(e, r || "ParsleyFieldMultiple");
    };
    r.prototype = {
        constructor:r,
        initMultiple:function(t, n) {
            this.element = t;
            this.$element = e(t);
            this.group = n.group || false;
            this.hash = this.getName();
            this.siblings = this.group ? '[data-group="' + this.group + '"]' :'input[name="' + this.$element.attr("name") + '"]';
            this.isRadioOrCheckbox = true;
            this.isRadio = this.$element.is("input[type=radio]");
            this.isCheckbox = this.$element.is("input[type=checkbox]");
            this.errorClassHandler = n.errors.classHandler(t, this.isRadioOrCheckbox) || this.$element.parent();
        },
        inherit:function(e, t) {
            var r = new n(e, t, "ParsleyFieldMultiple");
            for (var i in r) {
                if ("undefined" === typeof this[i]) {
                    this[i] = r[i];
                }
            }
        },
        getName:function() {
            if (this.group) {
                return "parsley-" + this.group;
            }
            if ("undefined" === typeof this.$element.attr("name")) {
                throw "A radio / checkbox input must have a data-group attribute or a name to be Parsley validated !";
            }
            return "parsley-" + this.$element.attr("name").replace(/(:|\.|\[|\])/g, "");
        },
        getVal:function() {
            if (this.isRadio) {
                return e(this.siblings + ":checked").val() || "";
            }
            if (this.isCheckbox) {
                var t = [];
                e(this.siblings + ":checked").each(function() {
                    t.push(e(this).val());
                });
                return t;
            }
        },
        bindValidationEvents:function() {
            this.valid = null;
            this.$element.addClass("parsley-validated");
            this.$element.off("." + this.type);
            var t = this, n = (!this.options.trigger ? "" :this.options.trigger) + (new RegExp("change", "i").test(this.options.trigger) ? "" :" change");
            n = n.replace(/^\s+/g, "").replace(/\s+$/g, "");
            e(this.siblings).each(function() {
                e(this).on(n.split(" ").join("." + t.type + " "), false, e.proxy(t.eventValidation, t));
            });
        }
    };
    var i = function(e, t, n) {
        this.init(e, t, n || "parsleyForm");
    };
    i.prototype = {
        constructor:i,
        init:function(t, n, r) {
            this.type = r;
            this.items = [];
            this.$element = e(t);
            this.options = n;
            var i = this;
            this.$element.find(n.inputs).each(function() {
                i.addItem(this);
            });
            this.$element.on("submit." + this.type, false, e.proxy(this.validate, this));
        },
        addListener:function(e) {
            for (var t in e) {
                if (new RegExp("Field").test(t)) {
                    for (var n = 0; n < this.items.length; n++) {
                        this.items[n].addListener(e);
                    }
                } else {
                    this.options.listeners[t] = e[t];
                }
            }
        },
        addItem:function(t) {
            if (e(t).is(this.options.excluded)) {
                return false;
            }
            var n = e(t).parsley(this.options);
            n.setParent(this);
            this.items.push(n);
        },
        removeItem:function(t) {
            var n = e(t).parsley();
            for (var r = 0; r < this.items.length; r++) {
                if (this.items[r].hash === n.hash) {
                    this.items[r].destroy();
                    this.items.splice(r, 1);
                    return true;
                }
            }
            return false;
        },
        validate:function(t) {
            var n = true;
            this.focusedField = false;
            for (var r = 0; r < this.items.length; r++) {
                if ("undefined" !== typeof this.items[r] && false === this.items[r].validate()) {
                    n = false;
                    if (!this.focusedField && "first" === this.options.focus || "last" === this.options.focus) {
                        this.focusedField = this.items[r].$element;
                    }
                }
            }
            if (this.focusedField && !n) {
                if (this.options.scrollDuration > 0) {
                    var i = this, s = this.focusedField.offset().top - e(window).height() / 2;
                    e("html, body").animate({
                        scrollTop:s
                    }, this.options.scrollDuration, function() {
                        i.focusedField.focus();
                    });
                } else {
                    this.focusedField.focus();
                }
            }
            var o = this.options.listeners.onFormSubmit(n, t, this);
            if ("undefined" !== typeof o) {
                return o;
            }
            return n;
        },
        isValid:function() {
            for (var e = 0; e < this.items.length; e++) {
                if (false === this.items[e].isValid()) {
                    return false;
                }
            }
            return true;
        },
        removeErrors:function() {
            for (var e = 0; e < this.items.length; e++) {
                this.items[e].parsley("reset");
            }
        },
        destroy:function() {
            for (var e = 0; e < this.items.length; e++) {
                this.items[e].destroy();
            }
            this.$element.off("." + this.type).removeData(this.type);
        },
        reset:function() {
            for (var e = 0; e < this.items.length; e++) {
                this.items[e].reset();
            }
        }
    };
    e.fn.parsley = function(t, s) {
        function a(u, a) {
            var f = e(u).data(a);
            if (!f) {
                switch (a) {
                    case "parsleyForm":
                        f = new i(u, o, "parsleyForm");
                        break;

                    case "parsleyField":
                        f = new n(u, o, "parsleyField");
                        break;

                    case "parsleyFieldMultiple":
                        f = new r(u, o, "parsleyFieldMultiple");
                        break;

                    default:
                        return;
                }
                e(u).data(a, f);
            }
            if ("string" === typeof t && "function" === typeof f[t]) {
                var l = f[t](s);
                return "undefined" !== typeof l ? l :e(u);
            }
            return f;
        }
        var o = e.extend(true, {}, e.fn.parsley.defaults, "undefined" !== typeof window.ParsleyConfig ? window.ParsleyConfig :{}, t, this.data()), u = null;
        if (e(this).is("form") || true === e(this).data("bind")) {
            u = a(e(this), "parsleyForm");
        } else if (e(this).is(o.inputs) && !e(this).is(o.excluded)) {
            u = a(e(this), !e(this).is("input[type=radio], input[type=checkbox]") ? "parsleyField" :"parsleyFieldMultiple");
        }
        return "function" === typeof s ? s() :u;
    };
    e.fn.parsley.Constructor = i;
    e.fn.parsley.defaults = {
        inputs:"input, textarea, select",
        excluded:"input[type=hidden], input[type=file], :disabled",
        trigger:false,
        animate:true,
        animateDuration:300,
        scrollDuration:500,
        focus:"first",
        validationMinlength:3,
        successClass:"parsley-success",
        errorClass:"parsley-error",
        errorMessage:false,
        validators:{},
        showErrors:true,
        messages:{},
        validateIfUnchanged:false,
        errors:{
            classHandler:function(e, t) {},
            container:function(e, t) {},
            errorsWrapper:"<ul></ul>",
            errorElem:"<li></li>"
        },
        listeners:{
            onFieldValidate:function(e, t) {
                return false;
            },
            onFormSubmit:function(e, t, n) {},
            onFieldError:function(e, t, n) {},
            onFieldSuccess:function(e, t, n) {}
        }
    };
    e(window).on("load", function() {
        e('[data-validate="parsley"]').each(function() {
            e(this).parsley();
        });
    });
}(window.jQuery || window.Zepto);/**
 * Created by Administrator on 2016-07-01.
 */
