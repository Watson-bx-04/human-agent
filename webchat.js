window.watsonAssistantChatOptions = {
  integrationID: "***",
  region: "***",
  serviceInstanceID: "***",
  onLoad: async (instance) => {
    instance.updateCSSVariables({
      'BASE-width': '50%',
    });
    instance.updateHomeScreenConfig({
      greeting: 'こんにちは！ ピザに関するお問い合わせについてお答えできます',
      starters: {
        buttons: [
          {label: 'ピザの注文'},
          {label: '割引条件'},
          {label: '注文のキャンセル'},
          {label: '注文内容を変更したい'},
          {label: '配達時刻を変更したい'},
        ],
      },
    });
    await instance.updateLocale('ja');
    instance.render();
  }
};
setTimeout(function(){
  const t=document.createElement('script');
  t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
  document.head.appendChild(t);
});
