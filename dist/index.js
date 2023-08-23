(()=>{"use strict";var n={772:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(537),o=r.n(t),i=r(645),a=r.n(i),A=r(673),s=r(667),l=r.n(s),d=new URL(r(549),r.b),c=a()(o());c.i(A.Z);var p=l()(d);c.push([n.id,`.page-container {\n  padding: 0 20px;\n}\n\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 20px 16px;\n  margin-left: -20px;\n  margin-right: -20px;\n}\n\n.logo {\n  margin: 0;\n  font-size: 28px;\n  cursor: pointer;\n  width: 130px;\n}\n\n.header-container {\n  margin-bottom: 8px;\n}\n\n.header-button {\n  padding: 0;\n  border: none;\n  background-color: transparent;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.logout-button {\n  width: 130px;\n  text-align: right;\n}\n\n.posts {\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.post-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n\n.post-header__user-image {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  border-radius: 40px;\n  margin-right: 10px;\n}\n\n.post-image-container {\n  margin-left: -20px;\n  margin-right: -20px;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  background-color: #e0e0e0;\n}\n\n.post-image {\n  width: 100%;\n  height: 100%;\n  max-width: 500px;\n  object-fit: cover;\n}\n\n.post-likes {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.like-button {\n  border: none;\n  background-color: transparent;\n  padding: 8px;\n  padding-left: 0px;\n  padding-bottom: 5px;\n  cursor: pointer;\n}\n\n.user-name {\n  font-weight: 500;\n}\n\n.post-text {\n  font-size: 14px;\n  line-height: 18px;\n  margin-top: 5px;\n}\n\n.post-date {\n  color: #8a8a8a;\n}\n\n.post+.post {\n  margin-top: 20px;\n}\n\n.posts-user-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.posts-user-header__user-image {\n  width: 70px;\n  height: 70px;\n  object-fit: cover;\n  border-radius: 40px;\n  margin-right: 10px;\n}\n\n.posts-user-header__user-name {\n  font-size: 28px;\n  line-height: 35px;\n}\n\n.loading-page {\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n}\n\n.add-post-sign {\n  background-image: url(${p});\n  height: 30px;\n  width: 30px;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.form-title {\n  font-size: 28px;\n  line-height: 35px;\n  text-align: center;\n}\n\n.form-inputs {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.form-error {\n  color: red;\n}\n\n.form-footer {\n  margin-top: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.form-footer-title {\n  text-align: center;\n}\n\n.file-upload-image-conrainer {\n  display: flex;\n  align-items: center;\n}\n\n.file-upload-image {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  margin-right: 10px;\n  border: 1px solid gray;\n  border-radius: 5px;\n}\n\n.file-upload-label {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  text-align: center;\n}`,"",{version:3,sources:["webpack://./src/styles/styles.css"],names:[],mappings:"AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gCAAgC;EAChC,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,eAAe;EACf,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,yDAAggB;EAChgB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;AACpB",sourcesContent:["@import './ui-kit.css';\r\n\r\n.page-container {\r\n  padding: 0 20px;\r\n}\r\n\r\n.page-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #e0e0e0;\r\n  padding: 20px 16px;\r\n  margin-left: -20px;\r\n  margin-right: -20px;\r\n}\r\n\r\n.logo {\r\n  margin: 0;\r\n  font-size: 28px;\r\n  cursor: pointer;\r\n  width: 130px;\r\n}\r\n\r\n.header-container {\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.header-button {\r\n  padding: 0;\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n}\r\n\r\n.logout-button {\r\n  width: 130px;\r\n  text-align: right;\r\n}\r\n\r\n.posts {\r\n  display: flex;\r\n  flex-direction: column;\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.post-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.post-header__user-image {\r\n  width: 40px;\r\n  height: 40px;\r\n  object-fit: cover;\r\n  border-radius: 40px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.post-image-container {\r\n  margin-left: -20px;\r\n  margin-right: -20px;\r\n  height: 500px;\r\n  display: flex;\r\n  justify-content: center;\r\n  background-color: #e0e0e0;\r\n}\r\n\r\n.post-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  max-width: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.post-likes {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.like-button {\r\n  border: none;\r\n  background-color: transparent;\r\n  padding: 8px;\r\n  padding-left: 0px;\r\n  padding-bottom: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.user-name {\r\n  font-weight: 500;\r\n}\r\n\r\n.post-text {\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  margin-top: 5px;\r\n}\r\n\r\n.post-date {\r\n  color: #8a8a8a;\r\n}\r\n\r\n.post+.post {\r\n  margin-top: 20px;\r\n}\r\n\r\n.posts-user-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.posts-user-header__user-image {\r\n  width: 70px;\r\n  height: 70px;\r\n  object-fit: cover;\r\n  border-radius: 40px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.posts-user-header__user-name {\r\n  font-size: 28px;\r\n  line-height: 35px;\r\n}\r\n\r\n.loading-page {\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-top: 100px;\r\n}\r\n\r\n.add-post-sign {\r\n  background-image: url(\"data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 122.88 122.88'%3E%3Ctitle%3Eadd%3C/title%3E%3Cpath d='M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z'/%3E%3C/svg%3E\");\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.form-title {\r\n  font-size: 28px;\r\n  line-height: 35px;\r\n  text-align: center;\r\n}\r\n\r\n.form-inputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.form-error {\r\n  color: red;\r\n}\r\n\r\n.form-footer {\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.form-footer-title {\r\n  text-align: center;\r\n}\r\n\r\n.file-upload-image-conrainer {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.file-upload-image {\r\n  width: 100px;\r\n  height: 100px;\r\n  object-fit: cover;\r\n  margin-right: 10px;\r\n  border: 1px solid gray;\r\n  border-radius: 5px;\r\n}\r\n\r\n.file-upload-label {\r\n  display: inline-block;\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  text-align: center;\r\n}"],sourceRoot:""}]);const u=c},673:(n,e,r)=>{r.d(e,{Z:()=>f});var t=r(537),o=r.n(t),i=r(645),a=r.n(i),A=r(667),s=r.n(A),l=new URL(r(137),r.b),d=new URL(r(374),r.b),c=a()(o()),p=s()(l),u=s()(d);c.push([n.id,`@font-face {\n  font-family: "StratosSkyeng";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(${p}) format("woff2");\n}\n\n@font-face {\n  font-family: "StratosSkyeng";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(${u}) format("woff2");\n}\n\nhtml {\n  /* скрывает скролбары в firefox */\n  scrollbar-width: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: StratosSkyeng;\n  overflow: auto;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n/* скрывает скролбары в chrome */\nbody::-webkit-scrollbar {\n  display: none;\n}\n\np {\n  margin: 0;\n}\n\n.button,\n.secondary-button {\n  display: block;\n  padding: 10px 13px 13px;\n  font-size: 18px;\n  line-height: 22px;\n  border-radius: 5px;\n  background-color: #565eef;\n  color: #ffffff;\n  border: none;\n}\n\n.link-button {\n  display: inline;\n  border: 0;\n  padding: 0;\n  background: none;\n  color: #565eef;\n  cursor: pointer;\n}\n\n.button:hover {\n  background-color: #6d73ff;\n}\n\n.button[disabled="true"],\n.secondary-button[disabled="true"] {\n  background-color: #f4f5f6;\n  color: rgba(153, 153, 153, 0.6);\n  pointer-events: none;\n}\n\n.button:active {\n  background-color: #4f56ce;\n}\n\n.secondary-button {\n  background-color: #edecff;\n  color: #565eef;\n}\n\n.secondary-button:hover {\n  background-color: #f2eeff;\n}\n\n.secondary-button:active {\n  background-color: #d8d7ff;\n}\n\n.input {\n  height: 36px;\n  box-sizing: border-box;\n  padding: 15px;\n  font-size: 14px;\n  line-height: 18px;\n  color: rgb(4, 18, 27);\n  border: none;\n  border-radius: 5px;\n  background-color: #e8e8e8;\n}\n\n.input .-error {\n  background-color: #fff;\n}\n\n.input:focus {\n  background-color: #fff;\n}\n\n.textarea {\n  padding: 15px;\n  resize: none;\n  width: 100%;\n  height: 100px;\n}\n\nstrong {\n  font-weight: 500;\n}\n\n/** Анимация загрузки **/\n.loader {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.loader div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #000;\n  animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.loader div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n\n.loader div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n\n.loader div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n\n@keyframes loader {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n\n  50%,\n  100% {\n    top: 24px;\n    height: 32px;\n  }\n}`,"",{version:3,sources:["webpack://./src/styles/ui-kit.css"],names:[],mappings:"AAAA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,4DAA0E;AAC5E;;AAEA;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;EAClB,4DAAyE;AAC3E;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,cAAc;EACd,eAAe;EACf,iBAAiB;AACnB;;AAEA,gCAAgC;AAChC;EACE,aAAa;AACf;;AAEA;EACE,SAAS;AACX;;AAEA;;EAEE,cAAc;EACd,uBAAuB;EACvB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;EACzB,cAAc;EACd,YAAY;AACd;;AAEA;EACE,eAAe;EACf,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,yBAAyB;EACzB,+BAA+B;EAC/B,oBAAoB;AACtB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA,wBAAwB;AACxB;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,gBAAgB;EAChB,4DAA4D;AAC9D;;AAEA;EACE,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE;IACE,QAAQ;IACR,YAAY;EACd;;EAEA;;IAEE,SAAS;IACT,YAAY;EACd;AACF",sourcesContent:['@font-face {\r\n  font-family: "StratosSkyeng";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-display: swap;\r\n  src: url("../assets/fonts/stratosskyengweb-regular.woff2") format("woff2");\r\n}\r\n\r\n@font-face {\r\n  font-family: "StratosSkyeng";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-display: swap;\r\n  src: url("../assets/fonts/stratosskyengweb-medium.woff2") format("woff2");\r\n}\r\n\r\nhtml {\r\n  /* скрывает скролбары в firefox */\r\n  scrollbar-width: none;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: StratosSkyeng;\r\n  overflow: auto;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n}\r\n\r\n/* скрывает скролбары в chrome */\r\nbody::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\np {\r\n  margin: 0;\r\n}\r\n\r\n.button,\r\n.secondary-button {\r\n  display: block;\r\n  padding: 10px 13px 13px;\r\n  font-size: 18px;\r\n  line-height: 22px;\r\n  border-radius: 5px;\r\n  background-color: #565eef;\r\n  color: #ffffff;\r\n  border: none;\r\n}\r\n\r\n.link-button {\r\n  display: inline;\r\n  border: 0;\r\n  padding: 0;\r\n  background: none;\r\n  color: #565eef;\r\n  cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n  background-color: #6d73ff;\r\n}\r\n\r\n.button[disabled="true"],\r\n.secondary-button[disabled="true"] {\r\n  background-color: #f4f5f6;\r\n  color: rgba(153, 153, 153, 0.6);\r\n  pointer-events: none;\r\n}\r\n\r\n.button:active {\r\n  background-color: #4f56ce;\r\n}\r\n\r\n.secondary-button {\r\n  background-color: #edecff;\r\n  color: #565eef;\r\n}\r\n\r\n.secondary-button:hover {\r\n  background-color: #f2eeff;\r\n}\r\n\r\n.secondary-button:active {\r\n  background-color: #d8d7ff;\r\n}\r\n\r\n.input {\r\n  height: 36px;\r\n  box-sizing: border-box;\r\n  padding: 15px;\r\n  font-size: 14px;\r\n  line-height: 18px;\r\n  color: rgb(4, 18, 27);\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: #e8e8e8;\r\n}\r\n\r\n.input .-error {\r\n  background-color: #fff;\r\n}\r\n\r\n.input:focus {\r\n  background-color: #fff;\r\n}\r\n\r\n.textarea {\r\n  padding: 15px;\r\n  resize: none;\r\n  width: 100%;\r\n  height: 100px;\r\n}\r\n\r\nstrong {\r\n  font-weight: 500;\r\n}\r\n\r\n/** Анимация загрузки **/\r\n.loader {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 80px;\r\n  height: 80px;\r\n}\r\n\r\n.loader div {\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: 8px;\r\n  width: 16px;\r\n  background: #000;\r\n  animation: loader 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\r\n}\r\n\r\n.loader div:nth-child(1) {\r\n  left: 8px;\r\n  animation-delay: -0.24s;\r\n}\r\n\r\n.loader div:nth-child(2) {\r\n  left: 32px;\r\n  animation-delay: -0.12s;\r\n}\r\n\r\n.loader div:nth-child(3) {\r\n  left: 56px;\r\n  animation-delay: 0;\r\n}\r\n\r\n@keyframes loader {\r\n  0% {\r\n    top: 8px;\r\n    height: 64px;\r\n  }\r\n\r\n  50%,\r\n  100% {\r\n    top: 24px;\r\n    height: 32px;\r\n  }\r\n}'],sourceRoot:""}]);const f=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],l=t.base?s[0]+t.base:s[0],d=i[l]||0,c="".concat(l," ").concat(d);i[l]=d+1;var p=r(c),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,t);t.byIndex=A,e.splice(A,0,{identifier:c,updater:f,references:1})}a.push(c)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=r(i[a]);e[A].references--}for(var s=t(n,o),l=0;l<i.length;l++){var d=r(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},549:n=>{n.exports="data:image/svg+xml,%3Csvg id=%27Layer_1%27 data-name=%27Layer 1%27 xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 122.88 122.88%27%3E%3Ctitle%3Eadd%3C/title%3E%3Cpath d=%27M61.44,0A61.46,61.46,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0ZM88.6,56.82v9.24a4,4,0,0,1-4,4H70V84.62a4,4,0,0,1-4,4H56.82a4,4,0,0,1-4-4V70H38.26a4,4,0,0,1-4-4V56.82a4,4,0,0,1,4-4H52.84V38.26a4,4,0,0,1,4-4h9.24a4,4,0,0,1,4,4V52.84H84.62a4,4,0,0,1,4,4Zm8.83-31.37a50.92,50.92,0,1,0,14.9,36,50.78,50.78,0,0,0-14.9-36Z%27/%3E%3C/svg%3E"},374:(n,e,r)=>{n.exports=r.p+"stratosskyengweb-medium.woff2"},137:(n,e,r)=>{n.exports=r.p+"stratosskyengweb-regular.woff2"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.p="/",r.b=document.baseURI||self.location.href,r.nc=void 0;var t={};(()=>{r.d(t,{Ig:()=>U,kS:()=>I,xu:()=>j,EA:()=>w});var n=r(379),e=r.n(n),o=r(795),i=r.n(o),a=r(569),A=r.n(a),s=r(565),l=r.n(s),d=r(216),c=r.n(d),p=r(589),u=r.n(p),f=r(772),g={};g.styleTagTransform=u(),g.setAttributes=l(),g.insert=A().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),e()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,r.p,r.p,r.p;var C="https://webdev-hw-api.vercel.app",E="".concat(C,"/api/v1/").concat("prod","/instapro"),B="posts",m="user-posts",h="auth",b="add-post",x="loading";function v(n){var e,r=n.element;return r.innerHTML='\n  <div class="page-header">\n      <h1 class="logo">instapro</h1>\n      <button class="header-button add-or-login-button">\n      '.concat(w?'<div title="Добавить пост" class="add-post-sign"></div>':"Войти","\n      </button>\n      ").concat(w?'<button title="'.concat(w.name,'" class="header-button logout-button">Выйти</button>'):"","  \n  </div>\n  \n"),r.querySelector(".add-or-login-button").addEventListener("click",(function(){U(w?b:h)})),r.querySelector(".logo").addEventListener("click",(function(){U(B)})),null===(e=r.querySelector(".logout-button"))||void 0===e||e.addEventListener("click",I),r}function y(n){var e=n.appEl,r=n.setUser,t=!0,o="";!function n(){var i='\n      <div class="page-container">\n          <div class="header-container"></div>\n          <div class="form">\n              <h3 class="form-title">\n                '.concat(t?"Вход в&nbsp;Instapro":"Регистрация в&nbsp;Instapro",'\n                </h3>\n              <div class="form-inputs">\n    \n                  ').concat(t?"":'\n                      <div class="upload-image-container"></div>\n                      <input type="text" id="name-input" class="input" placeholder="Имя" />\n                      ','\n                  \n                  <input type="text" id="login-input" class="input" placeholder="Логин" />\n                  <input type="password" id="password-input" class="input" placeholder="Пароль" />\n                  \n                  <div class="form-error"></div>\n                  \n                  <button class="button" id="login-button">').concat(t?"Войти":"Зарегистрироваться",'</button>\n              </div>\n            \n              <div class="form-footer">\n                <p class="form-footer-title">\n                  ').concat(t?"Нет аккаунта?":"Уже есть аккаунт?",'\n                  <button class="link-button" id="toggle-button">\n                    ').concat(t?"Зарегистрироваться.":"Войти.","\n                  </button>\n                </p> \n               \n              </div>\n          </div>\n      </div>    \n");e.innerHTML=i;var a=function(n){e.querySelector(".form-error").textContent=n};v({element:document.querySelector(".header-container")}),e.querySelector(".upload-image-container")&&function(n){var e=n.element,r=n.onImageUrlChange,t="";!function n(){var o;e.innerHTML='\n  <div class="upload=image">\n      '.concat(t?'\n          <div class="file-upload-image-conrainer">\n            <img class="file-upload-image" src="'.concat(t,'">\n            <button class="file-upload-remove-button button">Заменить фото</button>\n          </div>\n          '):'\n            <label class="file-upload-label secondary-button">\n                <input\n                  type="file"\n                  class="file-upload-input"\n                  style="display:none"\n                />\n                Выберите фото\n            </label>\n          \n      ',"\n  </div>\n");var i=e.querySelector(".file-upload-input");null==i||i.addEventListener("change",(function(){var e=i.files[0];if(e){var o=document.querySelector(".file-upload-label");o.setAttribute("disabled",!0),o.textContent="Загружаю файл...",function(n){var e=n.file,r=new FormData;return r.append("file",e),fetch(C+"/api/upload/image",{method:"POST",body:r}).then((function(n){return n.json()}))}({file:e}).then((function(e){var o=e.fileUrl;r(t=o),n()}))}})),null===(o=e.querySelector(".file-upload-remove-button"))||void 0===o||o.addEventListener("click",(function(){r(t=""),n()}))}()}({element:e.querySelector(".upload-image-container"),onImageUrlChange:function(n){o=n}}),document.getElementById("login-button").addEventListener("click",(function(){if(a(""),t){var n=document.getElementById("login-input").value,e=document.getElementById("password-input").value;if(!n)return void alert("Введите логин");if(!e)return void alert("Введите пароль");(function(n){var e=n.login,r=n.password;return fetch(C+"/api/user/login",{method:"POST",body:JSON.stringify({login:e,password:r})}).then((function(n){if(400===n.status)throw new Error("Неверный логин или пароль");return n.json()}))})({login:n,password:e}).then((function(n){r(n.user)})).catch((function(n){console.warn(n),a(n.message)}))}else{var i=document.getElementById("login-input").value,A=document.getElementById("name-input").value,s=document.getElementById("password-input").value;if(!A)return void alert("Введите имя");if(!i)return void alert("Введите логин");if(!s)return void alert("Введите пароль");if(!o)return void alert("Не выбрана фотография");(function(n){var e=n.login,r=n.password,t=n.name,o=n.imageUrl;return fetch(C+"/api/user",{method:"POST",body:JSON.stringify({login:e,password:r,name:t,imageUrl:o})}).then((function(n){if(400===n.status)throw new Error("Такой пользователь уже существует");return n.json()}))})({login:i,password:s,name:A,imageUrl:o}).then((function(n){r(n.user)})).catch((function(n){console.warn(n),a(n.message)}))}})),document.getElementById("toggle-button").addEventListener("click",(function(){t=!t,n()}))}()}function k(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}var w=function(n){try{return JSON.parse(window.localStorage.getItem("user"))}catch(n){return null}}(),S=null,j=[],I=function(){w=null,window.localStorage.removeItem("user"),U(B)},U=function n(e,r){if([B,h,b,m,x].includes(e))return e===b?(S=w?b:h,Y()):e===B?(S=x,Y(),(t={token:w?"Bearer ".concat(w.token):void 0},o=t.token,fetch(E,{method:"GET",headers:{Authorization:o}}).then((function(n){if(401===n.status)throw new Error("Нет авторизации");return n.json()})).then((function(n){return n.posts}))).then((function(n){S=B,j=n,Y()})).catch((function(e){console.error(e),n(B)}))):e===m?(console.log("Открываю страницу пользователя: ",r.userId),S=m,j=[],Y()):(S=e,void Y());var t,o;throw new Error("страницы не существует")},Y=function(){var n,e,r=document.getElementById("app");return S===x?function(n){var e=n.user,r=n.goToPage;n.appEl.innerHTML='\n              <div class="page-container">\n                <div class="header-container"></div>\n                <div class="loading-page">\n                  <div class="loader"><div></div><div></div><div></div></div>\n                </div>\n              </div>',v({user:e,element:document.querySelector(".header-container"),goToPage:r})}({appEl:r,user:w,goToPage:U}):S===h?y({appEl:r,setUser:function(n){(function(n){window.localStorage.setItem("user",JSON.stringify(n))})(w=n),U(B)},user:w,goToPage:U}):S===b?(e=(n={appEl:r,onAddPostClick:function(n){var e=n.description,r=n.imageUrl;console.log("Добавляю пост...",{description:e,imageUrl:r}),U(B)}}).onAddPostClick,n.appEl.innerHTML='\n    <div class="page-container">\n      <div class="header-container"></div>\n      Cтраница добавления поста\n      <button class="button" id="add-button">Добавить</button>\n    </div>\n  ',void document.getElementById("add-button").addEventListener("click",(function(){e({description:"Описание картинки",imageUrl:"https://image.png"})}))):S===B?function(n){var e=n.appEl;console.log("Актуальный список постов:",j),e.innerHTML='\n              <div class="page-container">\n                <div class="header-container"></div>\n                <ul class="posts">\n                \n                  <li class="post">\n                    <div class="post-header" data-user-id="642d00329b190443860c2f31">\n                        <img src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg" class="post-header__user-image">\n                        <p class="post-header__user-name">Иван Иваныч</p>\n                    </div>\n                    <div class="post-image-container">\n                      <img class="post-image" src="https://www.imgonline.com.ua/examples/bee-on-daisy.jpg">\n                    </div>\n                    <div class="post-likes">\n                      <button data-post-id="642d00579b190443860c2f32" class="like-button">\n                        <img src="./assets/images/like-active.svg">\n                      </button>\n                      <p class="post-likes-text">\n                        Нравится: <strong>2</strong>\n                      </p>\n                    </div>\n                    <p class="post-text">\n                      <span class="user-name">Иван Иваныч</span>\n                      Ромашка, ромашка...\n                    </p>\n                    <p class="post-date">\n                      19 минут назад\n                    </p>\n                  </li>\n\n                  <li class="post">\n                    <div class="post-header" data-user-id="6425602ce156b600f7858df2">\n                        <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">\n                        <p class="post-header__user-name">Варварва Н.</p>\n                    </div>\n                  \n                    \n                    <div class="post-image-container">\n                      <img class="post-image" src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680670675451-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-03-31%2520%25C3%2590%25C2%25B2%252012.51.20.png">\n                    </div>\n                    <div class="post-likes">\n                      <button data-post-id="642cffed9b190443860c2f30" class="like-button">\n                        <img src="./assets/images/like-not-active.svg">\n                      </button>\n                      <p class="post-likes-text">\n                        Нравится: <strong>35</strong>\n                      </p>\n                    </div>\n                    <p class="post-text">\n                      <span class="user-name">Варварва Н.</span>\n                      Нарисовала картину, посмотрите какая красивая\n                    </p>\n                    <p class="post-date">\n                      3 часа назад\n                    </p>\n                  </li>\n                  <li class="post">\n                    <div class="post-header" data-user-id="6425602ce156b600f7858df2">\n                        <img src="https://storage.yandexcloud.net/skypro-webdev-homework-bucket/1680601502867-%25C3%2590%25C2%25A1%25C3%2590%25C2%25BD%25C3%2590%25C2%25B8%25C3%2590%25C2%25BC%25C3%2590%25C2%25BE%25C3%2590%25C2%25BA%2520%25C3%2591%25C2%258D%25C3%2590%25C2%25BA%25C3%2591%25C2%2580%25C3%2590%25C2%25B0%25C3%2590%25C2%25BD%25C3%2590%25C2%25B0%25202023-04-04%2520%25C3%2590%25C2%25B2%252014.04.29.png" class="post-header__user-image">\n                        <p class="post-header__user-name">Варварва Н.</p>\n                    </div>\n                  \n                    \n                    <div class="post-image-container">\n                      <img class="post-image" src="https://leonardo.osnova.io/97a160ca-76b6-5cba-87c6-84ef29136bb3/">\n                    </div>\n                    <div class="post-likes">\n                      <button data-post-id="642cf82e9b190443860c2f2b" class="like-button">\n                        <img src="./assets/images/like-not-active.svg">\n                      </button>\n                      <p class="post-likes-text">\n                        Нравится: <strong>0</strong>\n                      </p>\n                    </div>\n                    <p class="post-text">\n                      <span class="user-name">Варварва Н.</span>\n                      Голова\n                    </p>\n                    <p class="post-date">\n                      8 дней назад\n                    </p>\n                  </li>\n                </ul>\n              </div>',v({element:document.querySelector(".header-container")});var r,t=function(n,e){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,e){if(n){if("string"==typeof n)return k(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){r&&(n=r);var t=0,o=function(){};return{s:o,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,A=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return a=n.done,n},e:function(n){A=!0,i=n},f:function(){try{a||null==r.return||r.return()}finally{if(A)throw i}}}}(document.querySelectorAll(".post-header"));try{var o=function(){var n=r.value;n.addEventListener("click",(function(){U(m,{userId:n.dataset.userId})}))};for(t.s();!(r=t.n()).done;)o()}catch(n){t.e(n)}finally{t.f()}}({appEl:r}):void(S!==m||(r.innerHTML="Здесь будет страница фотографий пользователя"))};U(B)})()})();