"use strict";
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 3325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/layout/Nav.tsx




const Nav = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
        position: "static",
        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
            maxWidth: "xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Toolbar, {
                disableGutters: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Bear Test App - Punk API"
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/components/layout/Layout.tsx




const Layout = ({ children , title  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Nav, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Container, {
                    maxWidth: "lg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                ]
            })
        ]
    });
};


/***/ })

};
;