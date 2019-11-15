function generateUniqKey() {
    return (+new Date() + Math.random());
}

export {generateUniqKey};