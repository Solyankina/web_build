function loadScript(url, cb) {
    const urls = getUrls();
    if (urls.indexOf(url) < 0) {
        addScript(url, cb);
    }
}

function getUrls() {
    const urls = [];
    const scriptElements = document.getElementsByTagName('script');
    for(let i = 0; i < scriptElements.length; i++) {
        urls.push(scriptElements[i].getAttribute('src'))
    }
    return urls;
}

function addScript(url, cb) {
    const el = document.createElement('script')
    el.type = 'text/javascript';
    el.src = url;
    el.onload = cb;
    document.body.appendChild(el);
}