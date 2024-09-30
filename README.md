# adamik-extension

An open-source extension designed to enable the display of multichain transactions (blinks) on specified websites.

## What it does

The adamik-extension is a browser extension that enhances web pages by replacing specific text strings with interactive iframes. These iframes display multichain transactions, also known as "blinks," which provide a visual representation of blockchain transactions across multiple chains.

Key features:

- Scans web pages for predefined text strings
- Replaces matched strings with embedded iframes
- Displays multichain transaction information in a compact, user-friendly format
- Supports multiple blink types with different URLs

## How to use it as an unofficial extension in Chrome Browser

To install and use the adamik-extension in Chrome:

1. Clone or download this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" in the top left corner.
5. Select the directory containing the extension files (where you cloned/downloaded the repository).
6. The extension should now appear in your list of installed extensions.

Once installed, the extension will automatically scan web pages for the specified text strings and replace them with the corresponding blink iframes.

## Development Context

This extension was developed as part of the EthGlobal hackathon in Singapore (September 2024). It showcases the potential for integrating blockchain transaction data directly into web browsing experiences.

The project aimed to expand the concept of Solana "blinks" to work across multiple blockchain networks. Blinks are blockchain links that allow users to perform on-chain actions directly from URLs, making Web3 interactions more accessible and user-friendly across the internet.

For more detailed information about the project's development and insights gained during the hackathon, please read our blog post: [EthGlobal: Building a Multichain Blink Engine](https://adamik.io/blog/ethglobal-building-a-multichain-blinks-engine)

## Contributing

This project will not be maintained further. Feel free to fork it and maintain it further.

## License

This project is licensed under the MIT License.
