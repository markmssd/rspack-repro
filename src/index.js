let unusedLetVar = 'will-warn'

import('./render').then(exports => {
    exports.render()
})
