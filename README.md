# 아카이빙 합본 1 (220531)

### 1. AJAX 이용하여 html 분리 
*  navbar, banner, surfer_archive(our waves와 about us 있던 기존 html), timeline, footer 각각 html 파일 분리
* 필요한 경우 surfer_archive.html 내에서 다른 html을 불러올 수 있음
* 기획 페이지도 마찬가지로 html을 분리함 : article 폴더 내에 intro.html, part 1 ~ 3.html, outro.html, surfer_article.html

* #### 그중 `banner 요소`의 경우 ajax로 `surfer_archive.html` 내에서 `banner.html`을 불러올 때 JS 효과가 잘 로드되지 않는 문제가 있어, 
* #### 다른 html파일들처럼 ajax로 불러오지 않고 일단 `surfer_archive.html` 내에 `banner div`를 그냥 두었음. 

### 2. css 분리
* 아카이빙 페이지 CSS 파일 : navbar, banner, surfer_archive, ourwaves, timeline, aboutUs, footer 
* 기획 페이지 CSS 파일 : `css` 폴더 안 `article` 폴더에 intro, part 1~3, outro, surfer_article 로 구분
