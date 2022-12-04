(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.cardData,r=e.templateSelector,o=e.userId,i=e.handleCardClick,a=e.handleDeleteIconClick,u=e.handleSetLike,c=e.handleRemoveLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardData=n,this._name=n.name,this._link=n.link,this._templateSelector=r,this._userId=o,this._cardId=n._id,this._cardOwnerId=n.owner._id,this._handleCardClick=i,this._handleDeleteIconClick=a,this._cardId=n._id,this._likes=n.likes,this._handleSetLike=u,this._handleRemoveLike=c}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".element__picture"),this._cardImage.src=this._link,this._cardImage.alt="Фотография: ".concat(this._name),this._element.querySelector(".element__title").textContent=this._name,this._likesNumber=this._element.querySelector(".element__like-container"),this._cardTrash=this._element.querySelector(".element__delete-button"),this._cardLike=this._element.querySelector(".element__like-button"),this._hasDeleteBtn(),this._isCardLiked(),this._likesNumber.textContent=this._likes.length,this._setEventListeners(),this._element}},{key:"_setLikeButtonEventListener",value:function(){var e=this;this._cardLike.addEventListener("click",(function(){e._cardLike.classList.contains("element__like-button_active")?e._handleRemoveLike(e._cardId):e._handleSetLike(e._cardId)}))}},{key:"_setButtonDeleteCardEventListener",value:function(){var e=this;this._cardTrash.addEventListener("click",(function(){e._handleDeleteIconClick(e._cardId)}))}},{key:"deleteCard",value:function(){this._element.closest(".element").remove()}},{key:"_setOpenPopupEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._cardData)}))}},{key:"_setEventListeners",value:function(){this._setButtonDeleteCardEventListener(),this._setLikeButtonEventListener(),this._setOpenPopupEventListeners()}},{key:"_hasDeleteBtn",value:function(){this._userId!==this._cardOwnerId&&this._cardTrash.remove()}},{key:"handleLikeCard",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this._cardLike.classList.toggle("element__like-button_active")}},{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._cardLike.classList.add("element__like-button_active")}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=t.name,r=t.about,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._avatar.src=e.avatar}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close-button"))&&e.close(t.target)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(){return c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=s(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},c.apply(this,arguments)}function s(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function l(e,t){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleFormSubmit=r,t._form=t._popup.querySelector(".popup__form"),t._formInputsList=t._form.querySelectorAll(".popup__input"),t._submitButton=t._form.querySelector(".popup__submit-button"),t._submitButtonText=t._submitButton.textContent,t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputsValues={},this._formInputsList.forEach((function(t){e._inputsValues[t.name]=t.value})),this._inputsValues}},{key:"setEventListeners",value:function(){var e=this;c(p(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){c(p(a.prototype),"close",this).call(this),this._form.reset()}},{key:"setInputValues",value:function(e){this._formInputsList.forEach((function(t){t.value=e[t.name],console.log(t),console.log(e)}))}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonText}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__figcaption"),t}return t=a,(n=[{key:"open",value:function(e){y(k(a.prototype),"open",this).call(this),this._popupImage.alt="".concat(e.name),this._popupImage.src=e.link,this._popupCaption.textContent=e.name}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i);function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&S(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._formList=this._formElement.querySelector(this._formSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){e.classList.add(this._inputErrorClass),this._errorElement.classList.add(this._errorClass),this._errorElement.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){e.classList.remove(this._inputErrorClass),this._errorElement.classList.remove(this._errorClass),this._errorElement.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"disableButton",value:function(){this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableButton():this.enableButton()}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._errorElement=e._formElement.querySelector(".".concat(t.id,"-error")),e._isValid(t),e._toggleButtonState()}))}))}},{key:"hideErrors",value:function(){var e=this;this._inputList.forEach((function(t){e._errorElement=e._formElement.querySelector(".".concat(t.id,"-error")),e._hideInputError(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners(this._formSelector)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_parseResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._parseResponse(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._parseResponse(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._parseResponse(e)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._parseResponse(e)}))}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t,n=e.popupSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"submitCallback",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;P(T(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("click",(function(t){t.preventDefault(),e._handleSubmit()}))}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(i),U=document.forms.user,x=(document.forms.card,document.forms.avatar),A=document.querySelector(".profile__button-edit"),V=(document.querySelector(".popup__close-button"),document.querySelector(".popup__container"),document.querySelector(".profile__name"),document.querySelector(".profile__description"),document.querySelector(".popup__input_data_name"),document.querySelector(".popup__input_data_job"),document.querySelector(".profile__image")),N=(document.querySelector(".elements"),document.querySelector(".profile__button-add")),F=(document.querySelector(".popup__form_add-place").querySelector(".popup__submit-button"),document.querySelector(".popup__form_add-place"),document.querySelector(".popup__input_place_name"),document.querySelector(".popup__input_image_url"),document.querySelector(".profile__avatar-btn")),J=(document.querySelector(".popup__image"),document.querySelector(".popup__figcaption"),{popupSelector:".popup",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_disabled",inputErrorClass:"popup__input_error",errorClass:"popup__error-message_active"});function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,z=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54",headers:{authorization:"bcb4532a-7b6a-4778-ad3b-abcb539d9fe0","Content-Type":"application/json"}});function $(e){var n=new t({cardData:e,templateSelector:"#card",userId:H,handleCardClick:function(e){Y.open(e)},handleDeleteIconClick:function(e){ne.open(),ne.submitCallback((function(){z.deleteCard(e).then((function(){ne.close(),n.deleteCard()})).catch((function(e){console.log("Ошибка: ".concat(e))}))}))},handleSetLike:function(e){z.setLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},handleRemoveLike:function(e){z.deleteLike(e).then((function(e){n.handleLikeCard(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))}});return n.generateCard()}Promise.all([z.getInitialCards(),z.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];W.setUserInfo(i),H=i._id,G.renderItems(o)})).catch((function(e){console.log("Ошибка: ".concat(e))}));var G=new E({renderer:function(e){G.addItem($(e))}},".elements"),K=new h({popupSelector:".popup_profile-edit",handleFormSubmit:function(e){K.loading(!0),z.editUserInfo(e).then((function(e){W.setUserInfo(e),K.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){K.loading(!1)}))}});K.setEventListeners();var Q=new h({popupSelector:".popup_avatar",handleFormSubmit:function(e){Q.loading(!0),z.editAvatar(e).then((function(e){V.src=e.avatar,Q.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){Q.loading(!1)}))}});Q.setEventListeners();var W=new r({name:".profile__name",about:".profile__description",avatar:".profile__image"}),X=new h({popupSelector:".popup_add-card",handleFormSubmit:function(e){X.loading(!0),z.addCard(e).then((function(e){G.addItem($(e)),X.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){X.loading(!1)}))}});X.setEventListeners();var Y=new g(".popup_gallery");Y.setEventListeners(),A.addEventListener("click",(function(){K.setInputValues(W.getUserInfo()),Z.hideErrors(),K.open()})),N.addEventListener("click",(function(){ee.disableButton(),ee.hideErrors(),X.open()})),F.addEventListener("click",(function(){te.disableButton(),te.hideErrors(),Q.open()}));var Z=new L(J,U);Z.enableValidation();var ee=new L(J,document.forms.card);ee.enableValidation();var te=new L(J,x);te.enableValidation();var ne=new D({popupSelector:".popup_confirmation"});ne.setEventListeners()})();
//# sourceMappingURL=main.js.map