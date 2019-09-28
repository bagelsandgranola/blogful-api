function makeMaliciousArticle() {
    const maliciousArticle = {
        id: 9112,
        title: 'naughty naughty <script>alert("xss");</script>',
        style: 'How-to',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`
    }

    const expectedArticle = {
        ...maliciousArticle,
        title: 'naughty naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
        content: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`
    }

    return {
        maliciousArticle,
        expectedArticle
    }
}

module.exports = {makeMaliciousArticle}