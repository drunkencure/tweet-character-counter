import twitterText from 'twitter-text';

let config = {
    maxTweetLength: 280,
    reservedLength: 0, // 자동 링크나 기타 요소를 위한 여유 문자
};

function getMaxTextLength() {
    return config.maxTweetLength - config.reservedLength;
}

function configure(options = {}) {
    config = { ...config, ...options };
}

function count(text) {
    return twitterText.parseTweet(text).weightedLength;
}

function isValidLength(text) {
    return count(text) <= config.maxTweetLength;
}

function getConfig() {
    return { ...config };
}

export default {
    configure,
    count,
    isValidLength,
    getConfig
};
