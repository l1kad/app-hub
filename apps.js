const visuals = {
  window: `<span class="mock-window primary"><span class="mock-topline"><i></i><i></i><i></i></span><span class="mock-layout"><i class="mock-side"></i><span class="mock-lines"><i></i><i></i><i></i><i></i></span></span></span><span class="mock-window secondary"><span class="mock-lines"><i></i><i></i><i></i></span></span>`,
  orbit: `<span class="mock-orbit"></span>`,
  bars: `<span class="mock-bars"><i></i><i></i><i></i><i></i><i></i></span>`,
  cards: `<span class="mock-cards"><i></i><i></i><i></i></span>`
};

const icons = {
  rift: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 13h24M12 24h16M12 35h20"/><path d="m32 20 5 4-5 4"/></svg>',
  image: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="11" width="28" height="26" rx="5"/><circle cx="19" cy="20" r="3"/><path d="m14 33 8-8 5 5 4-4 4 4"/></svg>',
  drop: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 9v22M16 23l8 8 8-8"/><path d="M12 37h24"/></svg>',
  frame: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 18v-8h8M30 10h8v8M38 30v8h-8M18 38h-8v-8"/><rect x="17" y="17" width="14" height="14" rx="3"/></svg>',
  note: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M15 10h14l7 7v21H15a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4Z"/><path d="M28 10v8h8M18 25h12M18 31h9"/></svg>',
  box: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M14 12h20a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4Z"/><path d="M18 19h12M18 25h12M18 31h7"/></svg>'
};

const apps = [{
  id: "d2cash",
  name: "d2cash",
  tagline: "Учёт и аналитика портфеля Steam",
  category: "Финансы · Steam",
  platform: "Windows 10–11 · macOS",
  version: "0.1.40",
  fileSize: "Windows x64",
  description: "Десктопное приложение для учёта Steam-инвентаря, истории покупок и продаж, прибыли и общей стоимости портфеля. Данные хранятся локально в SQLite, а синхронизацию между Windows и macOS можно подключить отдельно.",
  features: ["Портфель, позиции на продажу и список наблюдения", "Журнал операций, FIFO-учёт и аналитика прибыли", "История цен Steam и уведомления об изменениях", "Локальная база с дополнительной облачной синхронизацией"],
  changelog: [["0.1.40","29.09.2026","Исправлена синхронизация полной базы между Windows и macOS, совместимость старого формата и ложные конфликты при фоновом обновлении цен."],["0.1.35","16.09.2026","Опубликованы пакеты обновления для macOS и улучшено энергопотребление в простое."],["0.1.34","16.09.2026","Упрощены карточка предмета и настройки, добавлена навигация Touch Bar на macOS."]],
  image: "assets/d2cash-period-report.png",
  images: [
    { src: "assets/d2cash-period-report.png", label: "Отчёт за период" },
    { src: "assets/d2cash-analytics-overview.png", label: "Обзор аналитики" },
    { src: "assets/d2cash-selling.png", label: "Позиции к продаже" },
    { src: "assets/d2cash-settings.png", label: "Настройки" }
  ],
  iconImage: "assets/d2cash-icon.png",
  visualBg: "#091017",
  downloadUrl: "https://d2cash-updater.ivan2000442.workers.dev/d2cash_0.1.40_windows-x64-setup.exe",
  repoUrl: "https://github.com/l1kad/d2cash",
  requirements: "Windows 10–11 · macOS · Сборка Windows x64"
}, {
  id: "video-server",
  name: "Домашний экран",
  tagline: "Личные видео на старом Smart TV",
  category: "Видео · Домашняя сеть",
  platform: "Windows",
  version: "1.0.0",
  fileSize: "Локальная сборка",
  description: "Небольшое Windows-приложение, которое раздаёт фильмы и сериалы по домашней сети. На телевизоре достаточно открыть показанный адрес в обычном браузере — отдельное приложение для ТВ не требуется.",
  features: ["Медиатека фильмов и сериалов с поиском", "Работа со старыми Smart TV через браузер", "Проверка совместимости H.264 и AAC", "Перекодирование видео и работа в системном трее"],
  changelog: [["1.0.0","Локальная сборка","Готовы медиатека, автоматический выбор сетевого адреса, плейлист и перекодирование несовместимых видео."]],
  image: "assets/video-server.png",
  images: [{ src: "assets/video-server.png", label: "Медиатека" }],
  iconImage: "assets/video-server-icon.svg",
  visualBg: "#111315",
  downloadUrl: "",
  repoUrl: "",
  requirements: "Windows · Установщик собран локально"
}, {
  id: "raiting-film",
  name: "Raiting Film",
  tagline: "Личный дневник фильмов, музыки и видео",
  category: "Медиа · Оценки",
  platform: "Windows",
  version: "0.1.0",
  fileSize: "В разработке",
  description: "Личный трекер оценок для фильмов, сериалов, аниме, музыки и YouTube-роликов. Библиотека хранится в выбранной папке и может пережить переустановку Windows через синхронизацию с Google Drive.",
  features: ["Единая библиотека разных типов медиа", "Оценки, профили и личная статистика", "Локальная SQLite-база в выбранной папке", "Синхронизация данных через Google Drive"],
  changelog: [["0.1.0","В разработке","Собраны авторизация, библиотека, поиск, профили, страницы произведений и базовая синхронизация."]],
  image: "assets/raiting-film.png",
  images: [{ src: "assets/raiting-film.png", label: "Вход и создание профиля" }],
  iconImage: "assets/raiting-film-icon.jpeg",
  visualBg: "#090909",
  downloadUrl: "",
  repoUrl: "",
  requirements: "Windows 11 · Проект находится в разработке"
}, {
  id: "d2cash-scanner",
  name: "d2cash scanner",
  tagline: "Гемы Dota 2 прямо в списке предложений",
  category: "Расширение · Dota 2",
  platform: "Chrome · Edge · Яндекс",
  version: "1.6.0",
  fileSize: "Расширение",
  description: "Браузерное расширение показывает Kinetic, Unusual Effect и цветные Prismatic-гемы прямо на страницах Dota-маркетов. Всё вычисляется локально и не отправляет историю или данные аккаунта сторонним сервисам.",
  features: ["Avan, AIM, LIS-SKINS и Market Dota", "Группировка гемов и минимальные цены", "Настоящие цвета Prismatic и быстрый переход к лоту", "Полностью локальная обработка страниц"],
  changelog: [["1.6.0","Текущая версия","Добавлены адаптеры четырёх маркетов, группировка Prismatic по цветам и поиск самых дешёвых предложений."]],
  image: "assets/d2cash-scanner.png",
  images: [{ src: "assets/d2cash-scanner.png", label: "Панель расширения" }],
  iconImage: "assets/d2cash-scanner-icon.png",
  visualBg: "#09111f",
  downloadUrl: "",
  repoUrl: "",
  requirements: "Chrome · Edge · Яндекс Браузер · Установка из папки"
}];

function visualFor(app) {
  return app.image ? `<img class="product-screenshot" src="${app.image}" alt="Интерфейс ${app.name}" />` : visuals[app.visual];
}

const grid = document.querySelector("#app-grid");
const count = document.querySelector("#app-count");
const detail = document.querySelector("#app-detail");
const detailContent = document.querySelector("#detail-content");
const closeButton = document.querySelector(".detail-close");
let previouslyFocused = null;
let detailSlideshow = null;

count.textContent = apps.length === 1 ? "1 приложение" : apps.length < 5 ? `${apps.length} приложения` : `${apps.length} приложений`;
grid.classList.add("catalog-browser");
grid.innerHTML = `
  <div class="catalog-list" role="tablist" aria-label="Выбор приложения">
    ${apps.map((app,index) => `
      <button class="catalog-item${index===0 ? " is-active" : ""}" type="button" role="tab"
        aria-selected="${index===0}" data-id="${app.id}">
        ${app.iconImage ? `<img class="catalog-app-icon" src="${app.iconImage}" alt="" />` : `<span class="catalog-index">${String(index+1).padStart(2,"0")}</span>`}
        <span class="catalog-item-copy"><strong>${app.name}</strong><small>${app.category}</small></span>
      </button>`).join("")}
  </div>
  <article id="catalog-stage" class="catalog-stage" aria-live="polite"></article>`;

const stage = document.querySelector("#catalog-stage");
const catalogItems = [...grid.querySelectorAll(".catalog-item")];

function renderStage(id) {
  const app = apps.find(item => item.id === id);
  if (!app) return;
  stage.innerHTML = `
    <div class="stage-visual card-visual" style="--visual-bg:${app.visualBg}">${visualFor(app)}</div>
    <div class="stage-content">
      <div class="stage-copy">
        <span class="card-kicker">${app.platform} · Версия ${app.version}</span>
        <h3>${app.name}</h3>
        <p>${app.tagline}</p>
      </div>
      <button class="stage-open" type="button" data-id="${app.id}">Подробнее</button>
    </div>`;
  catalogItems.forEach(item => {
    const active=item.dataset.id===id;
    item.classList.toggle("is-active",active);
    item.setAttribute("aria-selected",String(active));
  });
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stage.animate([{opacity:.55,transform:"translateY(6px)"},{opacity:1,transform:"translateY(0)"}],{duration:300,easing:"cubic-bezier(.2,.8,.2,1)"});
  }
  stage.querySelector(".stage-open").addEventListener("click",()=>openDetail(app.id,true));
}

catalogItems.forEach(item => {
  item.addEventListener("pointerenter",()=>{if(matchMedia("(hover:hover) and (pointer:fine)").matches)renderStage(item.dataset.id);});
  item.addEventListener("focus",()=>renderStage(item.dataset.id));
  item.addEventListener("click",()=>openDetail(item.dataset.id,true));
});
renderStage(apps[0].id);

function renderDetail(app) {
  clearInterval(detailSlideshow);
  const changes = app.changelog.length ? app.changelog.slice(0,3).map(([version,date,text]) => `<div class="simple-change"><span><strong>${version}</strong><time>${date}</time></span><p>${text}</p></div>`).join("") : '<p class="simple-muted">История обновлений пока пуста.</p>';
  const screenshots = app.images?.length ? app.images : [{src:app.image,label:`Интерфейс ${app.name}`}];
  const actions = [
    app.downloadUrl ? `<a class="detail-button primary" href="${app.downloadUrl}" target="_blank" rel="noreferrer">Скачать</a>` : `<span class="detail-button unavailable">Локальная сборка</span>`,
    app.repoUrl ? `<a class="detail-button" href="${app.repoUrl}" target="_blank" rel="noreferrer">GitHub</a>` : ""
  ].join("");
  detailContent.innerHTML = `
    <div class="detail-gallery" data-gallery-index="0">
      <div class="simple-detail-preview slideshow-hero" style="--visual-bg:${app.visualBg}">
        <div class="slideshow-images">
          <img class="product-screenshot gallery-image gallery-image-current" src="${screenshots[0].src}" alt="${screenshots[0].label}" />
          <img class="product-screenshot gallery-image gallery-image-next" src="${screenshots[1]?.src || screenshots[0].src}" alt="" />
        </div>
        <div class="slideshow-shade"></div>
        <header class="slideshow-content">
          <div><p class="simple-overline">${app.platform} · ${app.version}</p><h2 id="detail-title">${app.name}</h2><p>${app.tagline}</p></div>
          <div class="simple-actions">${actions}</div>
        </header>
        <div class="gallery-dots" aria-label="Скриншоты приложения">
          ${screenshots.map((shot,index)=>`<button class="gallery-dot${index===0?' is-active':''}" type="button" data-index="${index}" aria-label="${shot.label}"></button>`).join("")}
        </div>
      </div>
    </div>
    <div class="simple-detail-body">
      <section><h3>О проекте</h3><p class="simple-description">${app.description}</p><ul class="simple-features">${app.features.map(x=>`<li>${x}</li>`).join("")}</ul></section>
      <section class="simple-updates"><h3>Последние изменения</h3>${changes}</section>
    </div>
    <p class="simple-requirements">${app.requirements || `${app.platform} · Сборка ${app.fileSize}`}</p>`;

  const gallery = detailContent.querySelector(".detail-gallery");
  const currentImage = gallery.querySelector(".gallery-image-current");
  const nextImage = gallery.querySelector(".gallery-image-next");
  const dots = [...gallery.querySelectorAll(".gallery-dot")];
  let crossfadeTimer = null;
  const showScreenshot = index => {
    const next = (index + screenshots.length) % screenshots.length;
    if (next === Number(gallery.dataset.galleryIndex) || nextImage.classList.contains("is-visible")) return;
    gallery.dataset.galleryIndex = String(next);
    nextImage.src = screenshots[next].src;
    nextImage.alt = screenshots[next].label;
    requestAnimationFrame(()=>nextImage.classList.add("is-visible"));
    clearTimeout(crossfadeTimer);
    crossfadeTimer = setTimeout(()=>{
      currentImage.src = screenshots[next].src;
      currentImage.alt = screenshots[next].label;
      nextImage.classList.remove("is-visible");
    },1700);
    dots.forEach((dot,i)=>dot.classList.toggle("is-active",i===next));
  };
  const restartSlideshow = () => {
    clearInterval(detailSlideshow);
    detailSlideshow = setInterval(()=>showScreenshot(Number(gallery.dataset.galleryIndex)+1),8000);
  };
  dots.forEach(dot=>dot.addEventListener("click",()=>{showScreenshot(Number(dot.dataset.index));restartSlideshow();}));
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) restartSlideshow();
}

function transition(action) { return document.startViewTransition ? document.startViewTransition(action) : action(); }
function openDetail(id, updateHistory=false) {
  const app = apps.find(item => item.id === id); if (!app) return;
  previouslyFocused = document.activeElement;
  transition(() => { renderDetail(app); detail.hidden=false; document.body.classList.add("detail-open"); requestAnimationFrame(()=>detail.classList.add("is-open")); });
  if (updateHistory) history.pushState({app:id},"",`#${id}`);
  closeButton.focus();
}
function closeDetail(updateHistory=true) {
  if (detail.hidden) return;
  clearInterval(detailSlideshow);
  transition(() => { detail.classList.remove("is-open"); document.body.classList.remove("detail-open"); setTimeout(()=>{detail.hidden=true;detailContent.innerHTML="";},300); });
  if (updateHistory) history.pushState({},"",location.pathname+location.search);
  previouslyFocused?.focus();
}

closeButton.addEventListener("click",()=>closeDetail());
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !detail.hidden) closeDetail();
  if (event.key === "Tab" && !detail.hidden) {
    const list=[...detail.querySelectorAll('button,a[href]')], first=list[0], last=list.at(-1);
    if (event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
    if (!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
  }
});
window.addEventListener("popstate",()=>{const id=location.hash.slice(1); id && apps.some(app=>app.id===id) ? openDetail(id,false) : closeDetail(false);});
const initialId=location.hash.slice(1); if (initialId && apps.some(app=>app.id===initialId)) openDetail(initialId,false);
