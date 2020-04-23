<h1 align="center">📝 Study Combined 📝</h1>
<p align="center">
  <a href="https://github.com/connect-foundation/2019-16/wiki" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/connect-foundation/2019-16/wiki" target="_blank">
    <img alt="node" src="https://img.shields.io/node/v/3" />
  </a>
  <a href="https://github.com/connect-foundation/2019-16/wiki" target="_blank">
    <img alt="node" src="https://github.com/connect-foundation/2019-16/workflows/PR Test [Service]/badge.svg" />
  </a>
</p>

> ✏ 스터디원을 모집하고 원하는 지역에 이용 가능한 스터디룸을 예약할 수 있도록 검색해주는 플랫폼입니다.


### [📖 Wiki](https://github.com/connect-foundation/2019-16/wiki)

### [💾 더 많은 정보](https://www.notion.so/9f5925bc47884bf7ad0bb258a2566c9e)

### [🎥 데모 영상](https://www.youtube.com/playlist?list=PLgN7SPXzVFBCx30q9n8s5Y3DbCJBRTFfX)

## 프로젝트 소개

### 주제 선정 이유

프로젝트 주제를 정하기 위해 강남역에서 만나기로 한 16조. 스터디룸을 예약하기 위해서 전화를 돌려보기 시작한다. 하지만 남아있는 스터디룸을 찾다가 지쳐버리는데... 두-둥

이렇게 된거 스터디룸 사용을 편하게 하는 서비스를 우리가 만들어 보자!👊

### 기술 스택

| Front-End        | Back-End  | DevOps       | Etc      |
| ---------------- | --------- | ------------ | -------- |
| `React`          | `Express` | `Git Action` | `jest`   |
| `Bulma`          | `mongoDB` |              | `socket` |
| `Kakao Maps API` | `elasticsearch`|              | `OAuth`  |

### 특징

- 마이크로서비스 아키텍쳐
- 소켓 통신 프로토콜 구현
- 결제 서비스
- 엘라스틱 서치 검색
- 내 지역 기반 스터디 그룹/스터디룸 검색

## 마이크로서비스 아키텍쳐
![서비스구성도2](https://user-images.githubusercontent.com/39212304/71319744-a1ddcd80-24e5-11ea-8305-981c3fb6f070.png)


## 화면 구성
<table>
  <tr>
    <th><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337283-49aed600-258e-11ea-8d12-6aa81e0d3f04.png"></th>
    <th><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337331-85e23680-258e-11ea-98e5-715d3feacf28.png"></th>
  </tr>
  <tr>
    <td>메인 페이지</td>
    <td>검색 페이지</td>
  </tr>
  <tr>
    <td><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337389-e07b9280-258e-11ea-8047-78846a8fa988.png"></td>
    <td><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337423-03a64200-258f-11ea-93c2-8b0065d4531e.png"></td>
  </tr>
  <tr>
    <td>스터디 그룹 생성 페이지</td>
    <td>스터디룸 예약 페이지</td>
  </tr> 
  <tr>
    <td><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337467-2c2e3c00-258f-11ea-95d7-12393bc9fbbf.png"></td>
    <td><img width="1067" alt="스크린샷 2019-12-23 오후 2 10 00" src="https://user-images.githubusercontent.com/42646264/71337505-5d0e7100-258f-11ea-8c45-35deb8a38ac1.png"></td>
  </tr>
   <tr>
    <td>카카오페이 결제 페이지</td>
    <td>결제 완료 페이지</td>
  </tr> 
</table>

