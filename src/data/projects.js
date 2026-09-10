// 대표 프로젝트 데이터. 이미지는 src/assets/works/ 아래 포트폴리오용 복사본만 사용합니다.
// (원본 works/ 폴더는 수정하지 않습니다.)
//
// arrangement: "cover-first" → 대표 이미지 → 정보 → 블록
//              "info-first"  → 정보 → 대표 이미지 → 블록
// cover.display: "contained"(반응형 max-width 제한) | "panel"(surface 프레임) | 없음(전폭)
// blocks[].type: "grid" | "strip" | "stack" | "process"

import chamCover from "../assets/works/chamtoon/cham-cover.jpg";
import chamEp2 from "../assets/works/chamtoon/cham-ep2.jpg";
import chamEp3 from "../assets/works/chamtoon/cham-ep3.jpg";
import chamEp4 from "../assets/works/chamtoon/cham-ep4.jpg";
import chamEp5 from "../assets/works/chamtoon/cham-ep5.jpg";
import chamDetail1 from "../assets/works/chamtoon/cham-detail-1.jpg";
import chamDetail2 from "../assets/works/chamtoon/cham-detail-2.jpg";
import chamDetail3 from "../assets/works/chamtoon/cham-detail-3.jpg";

import decoCover from "../assets/works/ssomedeco/deco-cover.jpg";
import decoSeason from "../assets/works/ssomedeco/deco-season.jpg";
import decoNotice from "../assets/works/ssomedeco/deco-notice.jpg";
import decoStory1 from "../assets/works/ssomedeco/deco-story-1.jpg";
import decoStory2 from "../assets/works/ssomedeco/deco-story-2.jpg";
import decoDetail1 from "../assets/works/ssomedeco/deco-detail-1.jpg";
import decoDetail2 from "../assets/works/ssomedeco/deco-detail-2.jpg";
import decoDetail3 from "../assets/works/ssomedeco/deco-detail-3.jpg";

import mimeCover from "../assets/works/mime-festival/mime-cover.jpg";
import mimeDetail1 from "../assets/works/mime-festival/mime-detail-1.jpg";

import thumb1 from "../assets/works/thumbnail/thumb-1.jpg";
import thumb2 from "../assets/works/thumbnail/thumb-2.jpg";
import thumb3 from "../assets/works/thumbnail/thumb-3.jpg";
import thumb4 from "../assets/works/thumbnail/thumb-4.jpg";
import thumb5 from "../assets/works/thumbnail/thumb-5.jpg";
import thumb6 from "../assets/works/thumbnail/thumb-6.jpg";
import thumb7 from "../assets/works/thumbnail/thumb-7.jpg";
import thumb8 from "../assets/works/thumbnail/thumb-8.jpg";
import thumb9 from "../assets/works/thumbnail/thumb-9.jpg";

export const projects = [
  {
    id: "chamtoon",
    no: "01",
    title: "CHAMTOON",
    subtitle: "간판·옥외광고 정보성 콘텐츠 시리즈",
    type: ["CONTENT DESIGN", "INFORMATION DESIGN"],
    period: "2023",
    role: "콘텐츠 기획 · 일러스트 · 편집 디자인",
    tools: ["Photoshop"],
    tagline:
      "낯선 주제인 간판·옥외광고를 캐릭터와 카드 구성으로 쉽게 풀어낸 정보성 SNS 콘텐츠 시리즈.",
    description: [
      "옥외광고 전문 업체의 SNS 채널을 위해 기획한 정보성 콘텐츠 시리즈입니다. 마스코트 캐릭터를 화자로 세워 간판의 종류·허가 기준·가격 산정처럼 상담 전 자주 나오는 주제를 한 편씩 풀어냈고, 표지·본문·다이어그램을 내용에 맞게 다르게 구성했습니다. 5개 에피소드가 같은 캐릭터와 타이포·레이아웃 규칙을 공유합니다.",
    ],
    purpose:
      "상담 전 정보 제공으로 반복 문의를 줄이고, 브랜드를 ‘설명해 주는 전문가’로 각인시키기 위한 콘텐츠입니다.",
    arrangement: "cover-first",
    cover: {
      src: chamCover,
      alt: "CHAMTOON 시리즈 대표 이미지 — ‘간판이란 무엇인가?’ 표지",
      ratio: "1 / 1",
      display: "contained",
    },
    blocks: [
      {
        type: "grid",
        label: "에피소드",
        columns: 2,
        columnsMd: 2,
        ratio: "1 / 1",
        images: [
          { src: chamCover, alt: "1화 — 간판이란 무엇인가?", caption: "EP.01" },
          { src: chamEp2, alt: "2화 — 옥외광고물 종류와 허가", caption: "EP.02" },
          { src: chamEp3, alt: "3화 — 자기 PR의 시대", caption: "EP.03" },
          { src: chamEp4, alt: "4화 — 간판 규정과 허가의 기준", caption: "EP.04" },
          { src: chamEp5, alt: "5화 — 간판 가격은 어떻게 책정될까", caption: "EP.05" },
        ],
      },
      {
        type: "strip",
        label: "콘텐츠 구성",
        columns: 3,
        columnsMd: 2,
        columnsSm: 2,
        ratio: "1 / 1",
        images: [
          { src: chamDetail1, alt: "허가 기준을 3분할 다이어그램으로 정리한 본문 컷" },
          { src: chamDetail2, alt: "말풍선과 설명을 배치한 본문 컷" },
          { src: chamDetail3, alt: "간판 종류를 사진 톤 일러스트로 설명한 본문 컷" },
        ],
      },
    ],
  },

  {
    id: "ssomedeco",
    no: "02",
    title: "썸앤데코 브랜드 SNS 콘텐츠",
    titleEn: "SSOME&DECO — Brand SNS Content",
    subtitle: "가구·인테리어 브랜드 채널 콘텐츠",
    type: ["SNS CONTENT DESIGN"],
    period: "2024 – 2025",
    role: "SNS 콘텐츠 디자인 · 이미지 합성 · 카피라이팅",
    tools: ["Photoshop", "Clip Studio Paint"],
    tagline:
      "시즌·제품·공지·스토리 등 목적이 다른 콘텐츠를 하나의 브랜드 채널 톤으로 운영한 SNS 작업.",
    description: [
      "가구·인테리어 브랜드의 인스타그램 채널 콘텐츠입니다. 대표를 형상화한 캐릭터를 실제 제품·공간 사진과 합성해 브랜드의 얼굴로 활용했고, 시즌 콘텐츠·제품 추천·배송 공지·스토리형 컷만화처럼 목적이 다른 콘텐츠를 같은 색·타이포 규칙 안에서 제작했습니다.",
    ],
    purpose:
      "제품 홍보와 브랜드 친근감, 실무 공지까지 하나의 채널 톤으로 소화하기 위한 콘텐츠 운영입니다.",
    arrangement: "info-first",
    cover: {
      src: decoCover,
      alt: "썸앤데코 대표 콘텐츠 — MBTI별 소파 추천",
      ratio: "1 / 1",
    },
    blocks: [
      {
        type: "grid",
        label: "콘텐츠 포맷",
        columns: 2,
        ratio: "1 / 1",
        images: [
          { src: decoSeason, alt: "시즌 콘텐츠 — 크리스마스 인테리어", caption: "시즌" },
          { src: decoCover, alt: "제품 추천 — MBTI별 소파", caption: "제품 추천" },
          { src: decoNotice, alt: "공지형 콘텐츠 — 원목 가구 배송 지연 안내", caption: "공지" },
          { src: decoStory1, alt: "스토리형 컷만화 표지 — 가족의 식탁 교체 이야기", caption: "스토리" },
        ],
      },
      {
        type: "strip",
        label: "세부 컷",
        columns: 2,
        columnsSm: 1,
        ratio: "1 / 1",
        images: [
          { src: decoDetail1, alt: "캐릭터와 실사 제품을 합성한 본문 컷" },
          { src: decoDetail2, alt: "제품 컷을 정리한 본문 레이아웃" },
          { src: decoDetail3, alt: "배송 안내 흐름을 설명한 본문 컷" },
        ],
      },
      {
        type: "stack",
        label: "스토리형 콘텐츠",
        images: [
          { src: decoStory1, alt: "식탁 교체를 두고 대화하는 가족 — 1컷" },
          { src: decoStory2, alt: "브랜드와 함께 문제를 해결하는 장면 — 2컷" },
        ],
      },
    ],
  },

  {
    id: "mime-festival",
    no: "03",
    title: "2026 춘천마임축제 웹사이트",
    titleEn: "2026 Chuncheon Mime Festival Website",
    subtitle: "축제 홍보 반응형 웹사이트",
    type: ["WEB DESIGN", "AI-ASSISTED WEB PRODUCTION"],
    period: "2026",
    role: "AI 초기 제작(weAI) · 코드 검토 및 수정 · 화면 구성 · 배포",
    tools: ["weAI", "VS Code", "Claude"],
    tagline:
      "AI 기반 제작 도구로 만든 초기 결과물을 직접 검토하고 수정해 완성한 축제 홍보 웹사이트.",
    description: [
      "2026 춘천마임축제를 주제로 만든 반응형 홍보 웹사이트입니다. weAI로 초기 구조와 화면을 생성한 뒤 VS Code에서 코드를 직접 확인했고, 레이아웃·타이포그래피·색상·반응형 동작을 의도에 맞게 수정했습니다. 이 과정에서 Claude를 코딩 보조 도구로 활용해 완성도를 끌어올리고 배포까지 마쳤습니다.",
    ],
    purpose:
      "AI 제작 도구를 실제 작업 흐름에 넣고, 생성된 결과물을 직접 수정·개선해 완성하는 과정을 경험하기 위한 프로젝트입니다.",
    arrangement: "cover-first",
    cover: {
      src: mimeCover,
      alt: "2026 춘천마임축제 웹사이트 메인 화면",
      ratio: "native",
      display: "panel",
    },
    process: [
      { no: "01", en: "AI INITIAL BUILD", ko: "weAI로 웹사이트의 초기 구조와 화면을 생성" },
      { no: "02", en: "PROJECT REVIEW", ko: "VS Code에서 프로젝트 구조와 코드를 직접 확인" },
      { no: "03", en: "EDIT & IMPROVE", ko: "레이아웃·타이포·색상·반응형을 의도에 맞게 수정" },
      { no: "04", en: "AI-ASSISTED CODING", ko: "Claude를 코딩 보조로 활용해 수정·오류 해결" },
      { no: "05", en: "BUILD & TEST", ko: "브라우저에서 반복 확인하며 완성하고 배포" },
    ],
    blocks: [
      { type: "process" },
      {
        type: "strip",
        label: "웹사이트 화면",
        columns: 1,
        ratio: "native",
        images: [
          { src: mimeDetail1, alt: "바로가기 링크 모음 페이지 — 카드형 목록과 카테고리 필터" },
        ],
      },
    ],
    link: { label: "사이트 보기", url: "https://2026mime-fes.vercel.app" },
  },

  {
    id: "thumbnail-series",
    no: "04",
    title: "펌블만 터지는 명란젓 연대기",
    titleEn: "Myeongnanjeot Chronicles — YouTube Thumbnail Series",
    subtitle: "유튜브 썸네일 시리즈",
    type: ["GRAPHIC DESIGN", "THUMBNAIL DESIGN"],
    period: "2025",
    role: "썸네일 디자인 · 일러스트 · 타이포그래피",
    tools: ["Photoshop", "Clip Studio Paint"],
    tagline:
      "공통 캐릭터와 타이포그래피를 유지하면서 회차마다 분위기를 달리한 유튜브 썸네일 시리즈.",
    description: [
      "웹 콘텐츠 ‘펌블만 터지는 명란젓 연대기’의 회차별 유튜브 썸네일입니다. 고정 출연 캐릭터와 제목 타이포그래피를 시리즈 아이덴티티로 두고, 배경 패턴·색·연출을 회차마다 바꿔 목록에서 한 시리즈로 묶이면서도 각 편이 구분되도록 했습니다. 총 9편.",
    ],
    purpose:
      "채널 목록에서 시리즈를 즉시 알아보게 하고, 회차별 클릭을 유도하기 위한 썸네일입니다.",
    arrangement: "cover-first",
    cover: {
      src: thumb9,
      alt: "명란젓 연대기 썸네일 대표 이미지",
      ratio: "16 / 9",
      display: "contained",
    },
    blocks: [
      {
        type: "grid",
        label: "썸네일 시리즈",
        columns: 3,
        columnsMd: 2,
        columnsSm: 1,
        ratio: "16 / 9",
        images: [
          { src: thumb1, alt: "1화 썸네일" },
          { src: thumb2, alt: "2화 썸네일" },
          { src: thumb3, alt: "3화 썸네일" },
          { src: thumb4, alt: "4화 썸네일" },
          { src: thumb5, alt: "5화 썸네일" },
          { src: thumb6, alt: "6화 썸네일" },
          { src: thumb7, alt: "7화 썸네일" },
          { src: thumb8, alt: "8화 썸네일" },
          { src: thumb9, alt: "9화 썸네일" },
        ],
      },
    ],
  },
];

// 프로젝트 섹션 하단에 노출하는 추가 작업물 채널 링크.
export const moreWork = [
  { label: "ArtStation", url: "https://tr1t1um.artstation.com/" },
  { label: "YouTube", url: "https://www.youtube.com/@jianspo" },
];
