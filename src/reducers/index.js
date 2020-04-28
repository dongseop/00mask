import produce from "immer";

const baseState = {
  loading: false,
  error: "", 
  mapCenter: [37.3595704, 127.105399],
  mapZoom: 14,
  stores: [
    {
      addr: '경기도 성남시 분당구 서현로210번길 2 105호 (서현동, 성지하이츠텔)',
      code: '31802095',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3868395,
      lng: 127.1254838,
      name: '메디팜우정약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 11:32:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 서현로 184 219호 (서현동, 엘지에클라트)',
      code: '31811931',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3882631,
      lng: 127.1236949,
      name: '성민약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 11:00:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 내정로 29 307-1호 (정자동, 금곡프라자)',
      code: '31813232',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3628586,
      lng: 127.1144417,
      name: '금곡프라자약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 08:37:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 야탑로 95 201-23~25호 (야탑동, 세신옴니코아빌딩)',
      code: '31814590',
      created_at: '2020/04/28 12:10:00',
      lat: 37.4101463,
      lng: 127.1292681,
      name: '밝은약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/27 08:58:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 판교로 700 110호 (야탑동, 아파트형공장)',
      code: '31814841',
      created_at: '2020/04/28 12:10:00',
      lat: 37.4042805,
      lng: 127.1517384,
      name: '한약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 07:31:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 성남대로 926 1층 (야탑동, 메트로빌딩)',
      code: '31815561',
      created_at: '2020/04/28 12:10:00',
      lat: 37.412667,
      lng: 127.1291861,
      name: '메트로약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 10:20:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 돌마로 80 2층 (구미동, 분당현대벤처빌,85~90.119~124호)',
      code: '31815782',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3497433,
      lng: 127.1104142,
      name: '엄마손약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 08:41:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 미금로 48 111,112호 (구미동, 오성프라자)',
      code: '31816789',
      created_at: '2020/04/28 12:10:00',
      lat: 37.337721,
      lng: 127.1164728,
      name: '기린약국',
      remain_stat: 'few',
      stock_at: '2020/04/28 09:01:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 분당로 43 1층 (서현동)',
      code: '31819991',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3840714,
      lng: 127.1202711,
      name: '우리약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 10:09:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 벌말로 10 1층 107호 (야탑동, 목련마을근린상가)',
      code: '31822746',
      created_at: '2020/04/28 12:10:00',
      lat: 37.4085972,
      lng: 127.1402225,
      name: '유정약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/27 09:22:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 서현로180번길 19 1층 (서현동, 비전월드)',
      code: '31823599',
      created_at: '2020/04/28 12:10:00',
      lat: 37.387286,
      lng: 127.122009,
      name: '분당백제약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 08:58:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 돌마로 85 (금곡동)',
      code: '31824897',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3503901,
      lng: 127.111345,
      name: '미금역하나약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 09:48:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 동판교로 59 자유퍼스트프라자1 108호 (백현동)',
      code: '31830986',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3883538,
      lng: 127.115058,
      name: '더존약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 10:09:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 수내로46번길 33 1층 (수내동)',
      code: '31831044',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3787138,
      lng: 127.1151428,
      name: '세계로약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 10:54:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 돌마로 47 108호 (금곡동, 이코노샤르망)',
      code: '31831958',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3503814,
      lng: 127.1072135,
      name: '스타온누리약국',
      remain_stat: 'some',
      stock_at: '2020/04/28 08:56:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 성남대로 906 502호 (야탑동, 국민은행건물)',
      code: '31832067',
      created_at: '2020/04/28 12:10:00',
      lat: 37.41053,
      lng: 127.1292177,
      name: '오층애천사약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 08:02:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 느티로 71 106호 (정자동, 현대프라자 )',
      code: '31832440',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3687763,
      lng: 127.1125857,
      name: '은정약국',
      remain_stat: 'break',
      stock_at: '2020/04/27 11:26:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 운중로 140 107호 (운중동, 메트로골드)',
      code: '31832458',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3912531,
      lng: 127.0785396,
      name: '옵티마우리들약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 11:10:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 이매로 51 102호 (이매동, 한라프라자)',
      code: '31832849',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3949947,
      lng: 127.1266181,
      name: '한라약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/27 09:31:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 운중로 115 102호 (운중동, 판오션타워)',
      code: '31834451',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3920596,
      lng: 127.0760789,
      name: '운중약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 09:03:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 서현로180번길 13 107호 (서현동, 서현프라자)',
      code: '31834558',
      created_at: '2020/04/28 12:10:00',
      lat: 37.387931,
      lng: 127.12268,
      name: '파란약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 09:08:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 돌마로90번길 4 1동 304호 (구미동, 엘레강스프라자)',
      code: '31836674',
      created_at: '2020/04/28 12:10:00',
      lat: 37.3496173,
      lng: 127.1117627,
      name: '분당미금약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 09:18:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 중앙공원로40번길 42 49동 1층 118,119호 (서현동, 우성종합상가)',
      code: '31836861',
      created_at: '2020/04/28 12:10:00',
      lat: 37.378272,
      lng: 127.1320911,
      name: '우성플러스약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 08:32:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 돌마로366번길 42 동한프라자 1층 (수내동)',
      code: '31837263',
      created_at: '2020/04/28 12:10:00',
      lat: 37.367074,
      lng: 127.126783,
      name: '온누리중앙약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 09:21:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 벌말로 35 (야탑동, 대명빌딩)',
      code: '31837549',
      created_at: '2020/04/28 12:10:00',
      lat: 37.4111837,
      lng: 127.1379864,
      name: '비타민약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/28 11:29:00',
      type: '01'
    },
    {
      addr: '경기도 성남시 분당구 내정로 29 209호 (정자동, 금곡동프라자)',
      code: '31838405',
      created_at: '2020/04/28 12:10:00',
      lat: 37.36287,
      lng: 127.114523,
      name: '메디칼김약국',
      remain_stat: 'plenty',
      stock_at: '2020/04/27 08:49:00',
      type: '01'
    },
  ]
};

const reducer = produce((state, action) => {
  switch(action.type) {
    case "SET_MAP_ZOOM":
      state.mapZoom = action.payload;
      break;
    case "SET_MAP_CENTER": 
      state.mapCenter = action.payload;
      break;
    default:
      break;
  }
}, baseState);

export default reducer;