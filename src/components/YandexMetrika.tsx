import Script from "next/script";

// ID счётчика — публичный, не секрет. Принимаем только цифры.
const raw = process.env.NEXT_PUBLIC_YM_ID ?? "";
const id = /^\d+$/.test(raw) ? raw : null;

export default function YandexMetrika() {
  if (!id) return null;
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,'script','https://mc.yandex.ru/metrika/tag.js','ym');ym(${id},'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:false});`}
      </Script>
      <noscript>
        <div><img src={`https://mc.yandex.ru/watch/${id}`} style={{ position: "absolute", left: "-9999px" }} alt="" /></div>
      </noscript>
    </>
  );
}
