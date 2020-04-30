# 공적 마스크 재고 확인 웹사이트

## Links

- http://data.go.kr/data/15058203/openapi.do : 공적 마스크 재고 API
- https://app.swaggerhub.com/apis-docs/Promptech/public-mask-info/20200307-oas3#/ : 공적마스크 재고 API
- Naver MAP API: https://www.ncloud.com/product/applicationService/maps
- 



## 사전 준비

- JavaScript, node v12, react, redux, axios API ...
- Git,  



# 작업 순서

1. create react app

   ```sh
   npx create-react-app 00mask
   ```

   

2. Install 할 패키지
   - Material UI: https://material-ui.com/
   - Immer: https://github.com/immerjs/immer
   - Redux: https://redux.js.org/
   - React-Redux:https://github.com/reduxjs/react-redux
   - Redux-Thunk: https://github.com/reduxjs/redux-thunk
   - Axios: https://github.com/axios/axios
   - Redux Dev Tool: https://github.com/zalmoxisus/redux-devtools-extension
   - Redux Logger: https://github.com/LogRocket/redux-logger
   - **React Router: https://reacttraining.com/react-router/web/guides/quick-start**



3. Reducer / Redux / React-Redux / Redux-Thunk / Redux-Logger Store를 Provider에
4. React-Router가지고 Page들 Switch
5. AppBar, BottomNavigation 
6. ListUI
7. Map Page
8. NaverMap --> Component
9. Map - Redux
10. Map에 마커 추가
    1. https://www.iconfinder.com/iconsets/map-location-solid-style