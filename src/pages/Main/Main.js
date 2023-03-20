/* eslint-disabled  */

import React from "react";
import './Main.css';
import '../../styles/common.css';

const Main = () => {
  return (
    <>
      <nav>
        <div class="navLeft">
          <img class="instarIcon" src="img/instagram.png" />
          <hr class="v-Line" />
          <span class="navWestagram">westagram</span>
        </div>
        {/* <!--<input id="commentInput" type="search" class="input-search" placeholder="검색">--> */}
        <div class="searchForm">
          <input class="searchInput" type="search" placeholder="검색" />
        </div>
        <div class="navIcon">
          <img class="iconStyle" src="img/explore.png" />
          <img class="iconStyle" src="img/heart.png" />
          <img class="iconStyle" src="img/profile.png" />
        </div>
      </nav>
      <div id="main">
        {/* <!-- 프로필 박스 --> */}
        {/* <!-- <div id="searchBox">
              asd
          </div> --> */}
        <div class="articleBody">
          <article class="feeds">
            {/* <!-- 피드 상단 --> */}

            <div class="articleHead">
              <div>
                <div class="profileFeed">
                  <img class="profileFeedImg" src="img/good6.jpg" />
                  <div class="PeopleName">
                    <span class="textBold">Hyomins-013</span>
                    <span class="subGray">효민입니다.</span>
                  </div>
                </div>
              </div>
              <img class="iconStyle" src="img/dots.png" />
            </div>

            {/* <!-- 피드 이미지 --> */}

            <div>
              <img class="articleFeedImg" src="img/695986339.887071.JPG" />
            </div>
            {/* <!-- 댓글, 좋아요 등 아이콘들 --> */}
            <div class="reaction">
              <div class="articleFeedIcon">
                <div>
                  <img class="iconStyle" src="img/heart.png" />
                  <img
                    class="iconStyle"
                    src="img/free-icon-speech-bubble-151789.png"
                  />
                  <img class="iconStyle" src="img/ribbon.png" />
                </div>
                <img class="iconStyle" src="img/upload.png" />
              </div>
              <div>
                <div class="articleLikeInfo">
                  <img
                    class="profilePic"
                    src="img/KakaoTalk_Photo_2023-03-13-20-33-24.jpeg"
                  />
                  <span class="textBold">minjun</span>
                  <span>님 </span>
                  <span class="textBold"> 외 10명</span>
                  <span>이 좋아합니다.</span>
                </div>
                <div class="commentAndFeedTime">
                  <ul class="commentList">
                    <li class="comment">
                      <span class="textBold">canon_mj</span>
                      <span> 어디냐?</span>
                      <img class="smallHeart" src="./img/heart.png" />
                      <span class="miniSubGray">댓글삭제</span>
                    </li>
                    <li class="comment">
                      <span class="textBold">someone</span>
                      <span> 글 내려라</span>
                      <img class="smallHeart" src="./img/heart.png" />
                      <span class="miniSubGray">댓글삭제</span>
                    </li>

                    {/* <!-- 여기에 새로운 댓글 추가 하는거임. --> */}
                  </ul>
                  <span class="feedTimeCount">42분전</span>
                </div>
              </div>
            </div>
            <div class="commentDiv">
              <input
                id="commentInput"
                type="text"
                name="commentInput"
                placeholder="댓글달기..."
              />
              <button id="commentReply" type="submit">
                게시
              </button>
            </div>
          </article>
        </div>

        {/* <!-- 메인 오른쪽, 스토리와 연관사람 추천--> */}

        <div class="mainRight">
          <div class="profileCard">
            <img class="myProfile" src="img/good6.jpg" />
            <div class="PeopleName">
              <span class="textBold">Hyomins-013</span>
              <span class="subGray">효민입니다.</span>
            </div>
          </div>

          <div class="storyDiv">
            <div class="allView">
              <span class="subGray">스토리</span>
              <span class="find-more">모두보기</span>
            </div>
            <ul>
              <li>
                <div class="miniProfileCard">
                  <div class="storyRedCircle">
                    <img class="myProfile" src="img/good6.jpg" />
                  </div>
                  <div class="PeopleName">
                    <span class="miniTextBold">Hyomins-013</span>
                    <span class="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="miniProfileCard">
                  <div class="storyRedCircle">
                    <img class="myProfile" src="img/good6.jpg" />
                  </div>
                  <div class="PeopleName">
                    <span class="miniTextBold">Hyomins-013</span>
                    <span class="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="miniProfileCard">
                  <div class="storyRedCircle">
                    <img class="myProfile" src="img/good6.jpg" />
                  </div>
                  <div class="PeopleName">
                    <span class="miniTextBold">Hyomins-013</span>
                    <span class="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="miniProfileCard">
                  <div class="storyRedCircle">
                    <img class="myProfile" src="img/good6.jpg" />
                  </div>
                  <div class="PeopleName">
                    <span class="miniTextBold">Hyomins-013</span>
                    <span class="miniSubGray">효민입니다.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="recommendDiv">
            <div class="allView">
              <span class="subGray">회원님을 위한 추천</span>
              <span class="find-more">모두보기</span>
            </div>
            <div class="miniProfileCard">
              <img class="myProfile" src="img/good6.jpg" />
              <div class="PeopleName">
                <span class="miniTextBold">Hyomins-013</span>
                <span class="miniSubGray">효민입니다.</span>
              </div>
              <button type="submit">팔로우</button>
            </div>
            <div class="miniProfileCard">
              <img class="myProfile" src="img/good6.jpg" />
              <div class="PeopleName">
                <span class="miniTextBold">Hyomins-013</span>
                <span class="miniSubGray">효민입니다.</span>
              </div>
              <button type="submit">팔로우</button>
            </div>
          </div>

          <div class="instaInfo">
            <p>Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ </p>
            <p>채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙ </p>
            <p>디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어</p>
            <br />
            <br />
            <p>© 2020 INSTAGRAM FROM FACEBOOK</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;