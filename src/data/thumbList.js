const thumbList = [
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "AI 디지털",
    description: "",
  },
  {
    img: require("../images/thumb/thumb_namyangju.png"),
    name: "아트봉봉",
    description: "",
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "유진투자증권",
    detailsTitle: "유진투자증권 (화상상담)",
    date: "2022.12 ~ 2023.03",
    linkBtn: [
      {
        text: '화면',
        href:'/counseling/html/dashboard.html'
      },
      {
        text: '리스트',
          href:'./publ/counseling/index.html'
      },
    ],
    description:
      "반응형으로 퍼블 진행했으며, 웹표준과 접근성까지 고려 되어있다. <br/> Bootstrap, Datepicker까지 사용되었다.",
    additional: [
      {
        desc: "참여도 100%",
      },
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다.",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "남양주주자치센터",
    detailsTitle: "남양주 주민자치센터 (통합관리 시스템)",
    date: "2022.06 ~ 2022.08",
    linkBtn: ["홈페이지", "리스트"],
    description:
      "반응형으로 퍼블 진행했으며, 웹표준과 접근성까지 고려 되어있다. <br/> Bootstrap, Datepicker까지 사용되었다.",
    additional: [
      {
        desc: "참여도 100%",
      },
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다.",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "무비차트",
    link: "www.moviechart.co.kr/",
    detailsTitle: "무비차트 적응형",
    date: "2022.04 ~ 2022.05",
    linkBtn: ["Pc", "Mobile", "Pc 리스트", "Mo 리스트"],
    description:
      "적응형으로 퍼블을 진행하여 Pc, Mobile의 별개로 작업되어 있다.",
    additional: [
      {
        desc: "참여도 100%",
      },
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다.",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "한국평생교육원",
    detailsTitle: "한국안전평생교육원",
    date: "2022.03 ~ 2022.04",
    linkBtn: ["홈페이지", "Pc 리스트"],
    description:
      "한국안전평생교육원 부분 페이지 리뉴얼에 참여, 반응형으로 진행했다",
    additional: [
      {
        desc: "참여도 80%",
      },
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다.",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "한국기술교육대학교",
    detailsTitle: "한국기술교육대학교",
    date: "2021.04 ~ 2021.09",
    linkBtn: ["문제풀이"],
    description:
      "한국기술교육대학교 콘텐츠로 E-Learning 동영상수업 구성되어있으며 동영상제어와 문제풀이 퀴즈 개발",
    additional: [
      {
        desc: "참여도 50%",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "홈트",
    date: "Type : Web / Peroid : 1일",
    linkBtn: ["홈페이지", "기획", "리스트"],
    description:
      "운동에 관심은 많으나 할 시간이 없다는 사람들을 위해 제작하게 되었고 홈페이지에서 운동하는 사진을 보고 동기부여를 얻었으면 하는 바램으로 제작하게 되었다.",
    additional: [
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "동화자연마루",
    date: "Type : Web / Peroid : 4일",
    linkBtn: ["홈페이지", "리스트"],
    description:
      "CSS로 ‘hover’ 섹션분활 그리드로 작업 했으며, JQuery로 메뉴 클릭과 Slide 기능을 구현 했고, toggleSilde로 메뉴 열고 닫기 기능과 스크롤 애니메이션 이벤트를 기능 구현했다.",
    additional: [
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "티빙",
    date: "Type : Web / Peroid : 1일",
    linkBtn: ["홈페이지", "리스트"],
    description:
      "섹션을 공통클래스로 한번에 제어했으며, 섹션 별 Slide기능이 있고 한 섹션에 float로 left, right 레어어 분리 했다.",
    additional: [
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "art1",
    date: "Type : Web / Peroid : 1일",
    linkBtn: ["홈페이지", "리스트"],
    description:
      "미디어 쿼리로 작업으로 PC, Tablet, Mobile에서 모두 볼 수 있는 반응형 홈페이지이며, 각 브라우저 호환에 중점으로 작업했다.",
    additional: [
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다",
      },
    ],
  },
  {
    img: require("../images/thumb/thumb_eugenefn.png"),
    name: "하우루",
    date: "Type : Web / Peroid : 1일",
    linkBtn: ["홈페이지", "리스트"],
    description:
      '하이브리드 모바일 앱으로 PC, MOBILE에서 모두 볼 수 있고 "flex"요소를 사용해 IE 10버전 부터 지원한다.',
    additional: [
      {
        desc: "리스트에서 각 페이지를 볼 수 있습니다",
      },
    ],
  },
];

export default thumbList;