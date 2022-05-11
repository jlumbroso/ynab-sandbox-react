# Cost Sharing for YNAB

Originally developed by [https://github.com/chelseaSchmidt](@chelseaSchmidt).

Check out the live app here! https: https://cost-sharing-for-ynab.ottom.app Cost Sharing for YNAB is an open-source React web application built to work with YNAB (You Need a Budget), integrating with the YNAB API. Since YNAB, a popular budgeting software, doesn't natively support tracking of a shared credit card account (such as a communal expense credit card shared between partners), YNAB members can use this add-on app to incorporate a shared credit card into their personal budget without making their expenses look inflated. Members authenticate with their existing YNAB credentials via OAuth, allowing the app to connect securely to their account. I'm excited to contribute this add-on feature to the YNAB community!

## Changelog

This fork of the original project is designed to remove all server dependency, and to auto-deploy in GitHub Pages through GitHub Actions.

## Development

- Clone the repository.
- Install all the Node.js dependencies: `npm install`
- Start a local server: `npm start`
- Navigate to http://localhost:3000
