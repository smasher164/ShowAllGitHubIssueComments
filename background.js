chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    hostEquals: 'github.com',
                    urlMatches: 'github\\.com\\/.*\\/.*\\/issues\\/\\d+'
                }
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        code: 'var btnload = document.querySelector(".ajax-pagination-btn");\n' +
            'if (btnload) {\n' +
            '    btnload.click();\n' +
            '}\n' +
            'setTimeout(function loop() {\n' +
            '    btnload = document.querySelector(".ajax-pagination-btn");\n' +
            '    if (btnload) {\n' +
            '        btnload.click();\n' +
            '    }\n' +
            '    if (document.querySelector(".ajax-pagination-btn")) {\n' +
            '        setTimeout(loop, 100);\n' +
            '    }\n' +
            '}, 100);'
    });
});