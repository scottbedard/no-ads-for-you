# No Ads For You

Some websites think they're special, and want to shove ads down your throat. They request you carve out an exception for them and disable Adblock. To those websites I say, how about you make me.

### Installation

This extension is mostly for personal use, and has not been packaged for the Chrome Web Store. To install, you'll need to load the unpacked extension. First clone or download the repository.

```bash
git clone git@github.com:scottbedard/no-ads-for-you.git
```

Then, navigate to `chrome://extensions/`, click `Load unpacked`, and the select the extension directory.

### Adding Websites

Most Adblock notices can be side stepped by simply dismissing them, or removing them from the DOM and removing `overflow: hidden` from the `<body>` tag. To add a website to this extension, do the following.

1. Add an entry to `content_scripts` within `manifest.json`.
2. Create a `.js` file to execute on page load that removes the Adblock notice.
3. Sit back and laugh maniacally.

### License

[MIT](https://github.com/scottbedard/no-ads-for-you/blob/master/LICENSE)

Copyright (c) 2020-present, Scott Bedard
