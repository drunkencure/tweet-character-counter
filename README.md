# @drunkencure/tweet-character-counter

A reliable tweet character counter and validator for developers.  
Built with Unicode, emoji, and Twitter-specific length rules in mind.

## ✍️ Based on Official Twitter Character Counting Rules

This package implements character counting rules based on the official Twitter (X) documentation:  
📄 [Counting characters when composing Tweets](https://docs.x.com/resources/fundamentals/counting-characters)

It follows the same behavior as described in Twitter’s own [`twitter-text`](https://github.com/twitter/twitter-text) library, including:

- ✅ Emoji sequences count as 2 characters
- ✅ CJK (Chinese, Japanese, Korean) glyphs count as 2 characters
- ✅ Latin-based characters, general punctuation, and certain Unicode ranges count as 1 character
- ✅ URLs are always counted as 23 characters
- ✅ Media links posted from official clients count as 0 characters
- ✅ Text is normalized using NFC (Normalization Form C) before counting
- ✅ Length is calculated based on Unicode code points, **not** UTF-8 byte length

> 🧠 This implementation is compatible with Twitter’s character weight configuration as documented and open-sourced by Twitter/X.

---

## 📦 Installation

```bash
npm install @drunkencure/tweet-character-counter
```

## 🚀 Usage (with JavaScript)

```
import tweetCounter from '@drunkencure/tweet-character-counter';

// Optional: configure maximum tweet length and reserved characters (e.g., for URLs or newlines)
tweetCounter.configure({
  maxTweetLength: 280,
  reservedLength: 24, // Example: 23 for a URL + 1 for a newline
// Use this to reserve space for content automatically added to the tweet,
// such as links or line breaks that are not part of the user input.
});

const tweet = "안녕하세요! 이건 테스트 트윗입니다 😊";
const length = tweetCounter.count(tweet);
const isValid = tweetCounter.isValidLength(tweet);

console.log(length);    // e.g. 37
console.log(isValid);   // true or false
```


## 🧰 API Reference

### `configure(options)`
Configure max tweet length and reserved space (like URL or newline buffers).

- `options.maxTweetLength` – default: `280`
- `options.reservedLength` – default: `0`

### `count(text)`
Returns the weighted character count of the given text.

### `isValidLength(text)`
Returns `true` if the given text is within the allowed length.

### `getConfig()`
Returns the current configuration object.


## 🧪 CLI Test Tool

This package includes a simple CLI utility (test.js) that allows you to test tweet text length directly from the terminal.

### ▶️ How to Use

Make sure the file is named test.js and located in your project root.
Run it using Node.js:

```
node test.js "Your tweet-like sentence goes here"
```

### 🧾 Example Output

```
$ node test.js "Hello world! Testing tweet 🐦"

=== Tweet Text Check ===
Input: "Hello world! Testing tweet 🐦"
Character count (Twitter rules): 29
Is it a valid tweet?: ✅ Yes
```

## 🪪 License

MIT © [drunkencure](https://github.com/drunkencure) 