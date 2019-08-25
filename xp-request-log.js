const { performance } = require('perf_hooks')
export default (req, res, next) => {
    const t0 = performance.now();
    console.info(`\n\n\n${req.method} ${req.originalUrl}\n\n`)
    res.on('finish', () => {
        const t1 = performance.now()
        console.info(`\n\n\n\n [FINISH] ${req.method} ${req.originalUrl}  ${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent IN ${((t1 - t0) / 1000).toFixed(2)} SECONDS\n\n\n`)
    })
    next()
}

