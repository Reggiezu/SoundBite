import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const MusicKitWebView = () => {
  const webviewRef = useRef(null);

  useEffect(() => {
    const message = JSON.stringify({
      type: 'INIT_MUSICKIT',
      developerToken: process.env.APPLE_MUSIC_API_KEY,
    });
    webviewRef.current.postMessage(message);
  }, []);

  return (
    <WebView
      ref={webviewRef}
      originWhitelist={['*']}
      source={{
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <script src="https://js-cdn.music.apple.com/musickit/v1/musickit.js"></script>
            <script>
              document.addEventListener("message", function(event) {
                var data = JSON.parse(event.data);
                if (data.type === 'INIT_MUSICKIT') {
                  MusicKit.configure({
                    developerToken: data.developerToken,
                    app: {
                      name: 'SoundBite',
                      build: '1.0.0',
                    },
                  });
                }
              });
            </script>
          </head>
          <body></body>
          </html>
        `,
      }}
    />
  );
};

export default MusicKitWebView;
