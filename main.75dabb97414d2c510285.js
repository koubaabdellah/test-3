<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="x-ua-compatible" content="IE=edge">
  <meta charset="utf-8">
  <meta name="robots" content="noindex,nofollow,nosnippet">
  <title>Astra</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <script type="text/javascript">
    function onImgLoadError(imgEl) {
      imgEl.remove();
      document.getElementById('genericErrorMsg').textContent = "The website you requested cannot be accessed from this network.";
    }
  </script>
<link rel="stylesheet" href="styles.4074c726718ee64e.css"></head>

<body>
  <script>
    const startTime = new Date().getTime();
    window.sessionStorage.removeItem('indexHtmlLoadTimeKey');
    window.sessionStorage.setItem('indexHtmlLoadTimeKey', startTime );
  </script>
  <app-root>
    <div style="background-color: #fff;height:100vh;width:100%;position:fixed;top:0;bottom:0;">
      <div style="margin: 12% auto;">
        <p style="text-align: center;">
          <img src="assets/astra_logo_sm.png" alt="astra logo" onerror="onImgLoadError(this);"/>
          <br>
          <span data-qa="genericErrorMsg" id="genericErrorMsg" style="font-family: sans-serif; font-size:18px;text-align: center;color: #666;">Loading...Please
            wait</span>
        </p>
        <script>
          var ua = window.navigator.userAgent;
          var isIE = /MSIE|Trident/.test(ua);
          if (isIE) {
            document.getElementById("genericErrorMsg").innerHTML = "Internet Explorer is not supported.<br />Please use Edge or Firefox.";
          }
        </script>
      </div>
    </div>
  </app-root>
<script src="runtime.4a747800449eeefd.js" type="module"></script><script src="polyfills.f31e566eafa6f373.js" type="module"></script><script src="scripts.49ece9a33f7e68c3.js" defer></script><script src="main.a5a2e9da3a091469.js" type="module"></script></body>

</html>
