# AMP - https://www.ampproject.org/docs/

#### �����ϱ�
 - ��ũ : HTML�� AMP�� ��ȯ https://www.ampproject.org/ko/docs/fundamentals/converting
 
    1. AMP ����Ʈ�� ���� ������
    2. AMP �������� ���� HTML ������ ���� ������ ����
    3. ���� HTML �������� AMP HTML�� ��ȯ
    4. AMP ������ ��ȿ�� �˻� - #development=1
    5. �˻� ������ AMP ������ �غ� - [�׽��õ���](https://search.google.com/structured-data/testing-tool/u/0/)
    
 - �׽�Ʈ������ :
    - HTML ������ : [converting.html](https://github.com/jungyounghwan/AMP/blob/master/canonical/converting.html)
    - AMP ������ : [converting_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/converting_amp.html)
    
#### ����߰�1
 - ��ũ : ��� AMP ��� �߰� https://www.ampproject.org/ko/docs/fundamentals/add_advanced
 
    1. amp-ad�� ����Ͽ� ���� ǥ��
    2. ��Ʃ�� ������, Ʈ���� ī��, �������� �ؽ�Ʈ ��� ����
    3. amp-carousel�� ����Ͽ� �̹����� ���������� �������� ĳ������ ����
    4. amp-analytics�� �ܼ��� ���ϵ� ���� (�ϴ�����)
    
  - �׽�Ʈ������ :
    - HTML ������ : [add_advanced.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced.html)
    - AMP ������ : [add_advanced_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_amp.html)
    
#### ����߰�2
  - ��ũ : ��� AMP ��� �߰� https://www.ampproject.org/docs/fundamentals/add_advanced/navigating
    1. amp-sidebar�� ����Ͽ� ����Ʈ Ž�� ��� �߰�
    2. AMP���� ����� ���� �۲��� ���
    
  - �׽�Ʈ������ :
    - HTML ������ : [add_advanced_sidebar.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_sidebar.html)
    - AMP ������ : [add_advanced_sidebar_amp.html](https://github.com/jungyounghwan/AMP/blob/master/amphtml/add_advanced_sidebar_amp.html)
    
#### ������ �� ���̾ƿ�
  - ��ũ : style & layout https://www.ampproject.org/ko/docs/design/responsive/style_pages
    1. �����Ǵ� css
        1. AMP �������� css�� ��Ÿ���� ���������� ���� �۲� �� �ܺ� ��Ÿ�� ��Ʈ�� ������ �� ����.
        
            | ������ ��Ÿ�� | ���� |
            |---|:---:|
            | `�ζ��� ��Ÿ�� �Ӽ�` | ��� ��Ÿ���� ���������� &lt;head&gt; �� &lt;style amp-custom&gt; �±� ���� ���ǵǾ�� �մϴ�. |
            | `!important ������` | ����� �� �����ϴ�. AMP ���� ��� ũ�� ���� ��Ģ�� �����ϱ� ���� �ʼ� �䱸�����Դϴ�. |
            | `<link rel="stylesheet">` | Disallowed with the exception of ���� �۲� �̿��� ��쿡�� ����� �� �����ϴ�. |
            | `-amp- Ŭ���� �� i-amp- �±� �̸�` | �ۼ��� ��Ÿ�Ͻ�Ʈ�� Ŭ���� �̸��� ���ڿ� -amp- �� ������ �� �����ϴ�. �̷��� ���ڿ��� AMP ��Ÿ�ӿ��� ���ο����θ� ����� �� �ֽ��ϴ�. ���� ������� ��Ÿ�Ͻ�Ʈ�� -amp- Ŭ���� �� i-amp �±��� CSS ���ñ⸦ ������ �� �����ϴ� |
            
            | ���ѵ� ��Ÿ�� | ���� |
            |---|:---:|
            | `transition �Ӽ�` | GPU ������ ������ �Ӽ��� ����(���� opacity, transform, -vendorPrefix-transform). |
            | `@keyframes {...}` | GPU ������ ������ �Ӽ��� ����(���� opacity, transform, -vendorPrefix-transform). |

        2. CSS ��ó���� ��� ���� : ERR - CSS syntax error in tag 'style amp-custom' - invalid declaration. 
        
            ```html
            <style amp-custom>
              {% include "/css/style.min.css" %}
            </style>
            ```
            
    2. �ڸ�ǥ���� �� ��ü ����
        1. �ڸ�ǥ���� : ���ҽ��� �ٿ�ε���� �ʾҰų� �ʱ�ȭ���� ���� ��� ��� ǥ��
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
        2. ��ü ���� : �������� �ʴ� ���������� ��ü�� ������ ������ �� ����
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
        3. �ε� ǥ�ñ� ����� : AMP �⺻ ����� �ε� ǥ�ñ⸦ ������� ����
            ```html
            <amp-img noloading src="../images/mountains.jpg" layout="responsive" width="266" height="150">
                <div fallback>
                    <p>This browser does not support the amp-img element.</p>
                </div>
            </amp-img>
            ```
    3. Layout System : [����URL](https://www.ampproject.org/ko/docs/design/amp-html-layout/layouts_demonstrated)
    4. iframe
        ```html
        <amp-iframe width="200" height="100"
            sandbox="allow-scripts allow-same-origin"
            layout="responsive"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDG9YXIhKBhqclZizcSzJ0ROiE0qgVfwzI&q=europe">
        </amp-iframe>
        ```