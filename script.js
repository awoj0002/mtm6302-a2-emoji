const emojiCodes = [128526, 128535, 128566, 128566, 128549, 128564, 128541, 128531, 129297, 128548, 128546, 128553]

let emojiGallery = document.getElementById('gallery-container')

function showEmojis(count = emojiCodes.length) {
    emojiGallery.innerHTML = ''
    for (let i = 0; i < count; i++) {
        const code = emojiCodes[i]

        const emoji = String.fromCodePoint(code)

        const card = document.createElement('div')

        card.textContent = `${emoji} ${code}`
        
        emojiGallery.appendChild(card);
    }
}
showEmojis()