# AMP - https://www.ampproject.org/docs/

#### 시작하기
 - 링크 : HTML을 AMP로 변환 https://www.ampproject.org/ko/docs/fundamentals/converting
 
    1. AMP 사이트의 기초 마스터
    2. AMP 페이지와 기존 HTML 페이지 간의 차이점 이해
    3. 기존 HTML 페이지를 AMP HTML로 전환
    4. AMP 페이지 유효성 검사 - #development=1
    5. 검색 가능한 AMP 컨텐츠 준비 - [테스팅도구](https://search.google.com/structured-data/testing-tool/u/0/)
    
 - 테스트페이지 :
    - HTML 페이지 : [converting.html](https://github.com/jungyounghwan/AMP/blob/master/canonical/converting.html)
    - AMP 페이지 : [converting_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/converting_amp.html)
    
#### 기능추가1
 - 링크 : 고급 AMP 기능 추가 https://www.ampproject.org/ko/docs/fundamentals/add_advanced
 
    1. amp-ad를 사용하여 광고 표시
    2. 유튜브 동영상, 트위터 카드, 반응적인 텍스트 요소 포함
    3. amp-carousel을 사용하여 이미지와 콘텐츠들의 조합으로 캐러셀을 구축
    4. amp-analytics로 단순한 패턴들 추적 (하단참조)
    
  - 테스트페이지 :
    - HTML 페이지 : [add_advanced.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced.html)
    - AMP 페이지 : [add_advanced_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_amp.html)
    
#### 기능추가2
  - 링크 : 고급 AMP 기능 추가 https://www.ampproject.org/docs/fundamentals/add_advanced/navigating
    1. amp-sidebar를 사용하여 사이트 탐색 기능 추가
    2. AMP에서 사용자 정의 글꼴을 사용
    
  - 테스트페이지 :
    - HTML 페이지 : [add_advanced_sidebar.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_sidebar.html)
    - AMP 페이지 : [add_advanced_sidebar_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_sidebar_amp.html)
    
#### 디자인 및 레이아웃
  - 링크 : style & layout https://www.ampproject.org/ko/docs/design/responsive/style_pages
    1. 지원되는 css
        1. AMP 페이지는 css로 스타일이 지정되지만 맞춤 글꼴 외 외부 스타일 시트는 참조할 수 없다.
        
            | 금지된 스타일 | 설명 |
            |---|:---:|
            | `인라인 스타일 속성` | 모든 스타일은 페이지에서 &lt;head&gt; 의 &lt;style amp-custom&gt; 태그 내에 정의되어야 합니다. |
            | `!important 한정자` | 사용할 수 없습니다. AMP 에서 요소 크기 조정 규칙을 시행하기 위한 필수 요구사항입니다. |
            | `<link rel="stylesheet">` | Disallowed with the exception of 맞춤 글꼴 이외의 경우에는 사용할 수 없습니다. |
            | `-amp- 클래스 및 i-amp- 태그 이름` | 작성자 스타일시트의 클래스 이름은 문자열 -amp- 로 시작할 수 없습니다. 이러한 문자열은 AMP 런타임에서 내부용으로만 사용할 수 있습니다. 따라서 사용자의 스타일시트는 -amp- 클래스 및 i-amp 태그의 CSS 선택기를 참조할 수 없습니다 |
            
            | 제한된 스타일 | 설명 |
            |---|:---:|
            | `transition 속성` | GPU 가속이 가능한 속성만 허용됨(현재 opacity, transform, -vendorPrefix-transform). |
            | `@keyframes {...}` | GPU 가속이 가능한 속성만 허용됨(현재 opacity, transform, -vendorPrefix-transform). |

        2. CSS 전처리기 사용 가능 : ERR - CSS syntax error in tag 'style amp-custom' - invalid declaration. 
        
            ```html
            <style amp-custom>
              {% include "/css/style.min.css" %}
            </style>
            ```
            
    2. 자리표시자 및 대체 동작
        1. 자리표시자 : 리소스가 다운로드되지 않았거나 초기화되지 않은 경우 즉시 표시
            ```html
               <amp-anim src="images/wavepool.gif"
                 layout="responsive"
                 width="400"
                 height="300">
                 <amp-img placeholder
                   src="images/wavepool.png"
                   layout="fill">
                 </amp-img>
               </amp-anim>
            ```
        2. 대체 동작 : 지원하지 않는 브라우저에서 대체할 동작을 지정할 수 있음
            ```html
                <amp-video controls
                  width="640"
                  height="360"
                  src="videos/kitten-playing.mp4"
                  poster="images/kitten-playing.png">
                  <div fallback>
                    <p>This browser does not support the video element.</p>
                  </div>
                </amp-video>
            ```
        3. 로딩 표시기 숨기기 : AMP 기본 요소인 로딩 표시기를 사용하지 않음
            ```html
            <amp-img noloading src="../images/mountains.jpg" layout="responsive" width="266" height="150">
                <div fallback>
                    <p>This browser does not support the amp-img element.</p>
                </div>
            </amp-img>
            ```
    3. Layout System : [참고URL](https://www.ampproject.org/ko/docs/design/amp-html-layout/layouts_demonstrated)
    4. iframe
        ```html
        <amp-iframe width="200" height="100"
            sandbox="allow-scripts allow-same-origin"
            layout="responsive"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDG9YXIhKBhqclZizcSzJ0ROiE0qgVfwzI&q=europe">
        </amp-iframe>
        ```