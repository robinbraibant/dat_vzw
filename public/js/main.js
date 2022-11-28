/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/scripts/components/navigation.components.ts":
/*!**************************************************************!*\
  !*** ./frontend/scripts/components/navigation.components.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
class NavigationComponent {
    constructor() {
        // this.bodyTag = document.querySelector('body');
        // this.navButton = document.querySelector('.mobilenav__toggle');
        this.mainNavItems = Array.from(document.querySelectorAll('.mainnav__item.has-children'));
        if (this.mainNavItems) {
            this.mainnavItemsInit();
        }
        // this.subNavItems = Array.from(document.querySelectorAll('.subnav__item.has-children'));
        // if (this.subNavItems) {
        //     this.subNavItemsInit()
        // }
        //
        // if (this.navButton) {
        //     this.mobilenavToggle();
        // }
    }
    // private mobilenavToggle() {
    //     this.navButton.addEventListener('click', () => {
    //         let bodyTag = document.querySelector('body');
    //         bodyTag.classList.toggle('has-open-navigation');
    //     });
    // }
    mainnavItemsInit() {
        this.mainNavItems.forEach(e => {
            let button = e.querySelector('.subnav-toggle');
            let child = e.querySelector('.subnav');
            this.addEvents(e, button, child);
        });
    }
    // private subNavItemsInit() {
    //     this.subNavItems.forEach(e => {
    //         let button = e.querySelector('.subnav-toggle');
    //         let child = e.querySelector('.subnav');
    //         this.addEvents(e, button, child);
    //     });
    // }
    addEvents(e, button, child) {
        // e.addEventListener('mouseenter', () => {
        //     child.setAttribute('aria-hidden', false);
        // });
        // e.addEventListener('mouseleave', () => {
        //     child.setAttribute('aria-hidden', true);
        // });
        if (button) {
            button.addEventListener('click', () => {
                if (child.getAttribute('aria-hidden') === 'true') {
                    e.classList = 'mainnav__item has-children is-opened';
                    child.style.display = 'block';
                    child.setAttribute('aria-hidden', false);
                }
                else {
                    e.classList = 'mainnav__item has-children';
                    child.style.display = 'none';
                    child.setAttribute('aria-hidden', true);
                }
            });
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./frontend/scripts/main.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_navigation_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation.components */ "./frontend/scripts/components/navigation.components.ts");

new _components_navigation_components__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sbUJBQW1CO0lBTzVCO1FBQ0ksaURBQWlEO1FBQ2pELGlFQUFpRTtRQUVqRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7UUFFRCwwRkFBMEY7UUFDMUYsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixJQUFJO1FBQ0osRUFBRTtRQUNGLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsSUFBSTtJQUNSLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsdURBQXVEO0lBQ3ZELHdEQUF3RDtJQUN4RCwyREFBMkQ7SUFDM0QsVUFBVTtJQUNWLElBQUk7SUFFSSxnQkFBZ0I7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQy9DLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQztJQUNOLENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLDBEQUEwRDtJQUMxRCxrREFBa0Q7SUFDbEQsNENBQTRDO0lBQzVDLFVBQVU7SUFDVixJQUFJO0lBRUksU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSztRQUM5QiwyQ0FBMkM7UUFDM0MsZ0RBQWdEO1FBQ2hELE1BQU07UUFDTiwyQ0FBMkM7UUFDM0MsK0NBQStDO1FBQy9DLE1BQU07UUFDTixJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNsQyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssTUFBTSxFQUFFO29CQUM5QyxDQUFDLENBQUMsU0FBUyxHQUFHLHNDQUFzQyxDQUFDO29CQUNyRCxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPO29CQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDNUM7cUJBQU07b0JBQ0gsQ0FBQyxDQUFDLFNBQVMsR0FBRyw0QkFBNEIsQ0FBQztvQkFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUM3QixLQUFLLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDM0M7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7O1VDdEVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOdUU7QUFDdkUsSUFBSSxrRkFBbUIsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc2NyaXB0cy9jb21wb25lbnRzL25hdmlnYXRpb24uY29tcG9uZW50cy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9mcm9udGVuZC9zY3JpcHRzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBib2R5VGFnOiBIVE1MQm9keUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBuYXZCdXR0b246IEhUTUxCdXR0b25FbGVtZW50O1xuICAgIHByaXZhdGUgbWFpbk5hdkl0ZW1zOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgc3ViTmF2SXRlbXM6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gdGhpcy5ib2R5VGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAvLyB0aGlzLm5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVuYXZfX3RvZ2dsZScpO1xuXG4gICAgICAgIHRoaXMubWFpbk5hdkl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbm5hdl9faXRlbS5oYXMtY2hpbGRyZW4nKSk7XG4gICAgICAgIGlmICh0aGlzLm1haW5OYXZJdGVtcykge1xuICAgICAgICAgICAgdGhpcy5tYWlubmF2SXRlbXNJbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0aGlzLnN1Yk5hdkl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VibmF2X19pdGVtLmhhcy1jaGlsZHJlbicpKTtcbiAgICAgICAgLy8gaWYgKHRoaXMuc3ViTmF2SXRlbXMpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuc3ViTmF2SXRlbXNJbml0KClcbiAgICAgICAgLy8gfVxuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAodGhpcy5uYXZCdXR0b24pIHtcbiAgICAgICAgLy8gICAgIHRoaXMubW9iaWxlbmF2VG9nZ2xlKCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIG1vYmlsZW5hdlRvZ2dsZSgpIHtcbiAgICAvLyAgICAgdGhpcy5uYXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgYm9keVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAvLyAgICAgICAgIGJvZHlUYWcuY2xhc3NMaXN0LnRvZ2dsZSgnaGFzLW9wZW4tbmF2aWdhdGlvbicpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBwcml2YXRlIG1haW5uYXZJdGVtc0luaXQoKSB7XG4gICAgICAgIHRoaXMubWFpbk5hdkl0ZW1zLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gZS5xdWVyeVNlbGVjdG9yKCcuc3VibmF2LXRvZ2dsZScpO1xuICAgICAgICAgICAgbGV0IGNoaWxkID0gZS5xdWVyeVNlbGVjdG9yKCcuc3VibmF2Jyk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50cyhlLCBidXR0b24sIGNoaWxkKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIHN1Yk5hdkl0ZW1zSW5pdCgpIHtcbiAgICAvLyAgICAgdGhpcy5zdWJOYXZJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgIC8vICAgICAgICAgbGV0IGJ1dHRvbiA9IGUucXVlcnlTZWxlY3RvcignLnN1Ym5hdi10b2dnbGUnKTtcbiAgICAvLyAgICAgICAgIGxldCBjaGlsZCA9IGUucXVlcnlTZWxlY3RvcignLnN1Ym5hdicpO1xuICAgIC8vICAgICAgICAgdGhpcy5hZGRFdmVudHMoZSwgYnV0dG9uLCBjaGlsZCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIHByaXZhdGUgYWRkRXZlbnRzKGUsIGJ1dHRvbiwgY2hpbGQpIHtcbiAgICAgICAgLy8gZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgLy8gICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QgPSAnbWFpbm5hdl9faXRlbSBoYXMtY2hpbGRyZW4gaXMtb3BlbmVkJztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdCA9ICdtYWlubmF2X19pdGVtIGhhcy1jaGlsZHJlbic7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7TmF2aWdhdGlvbkNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmlnYXRpb24uY29tcG9uZW50cyc7XG5uZXcgTmF2aWdhdGlvbkNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==