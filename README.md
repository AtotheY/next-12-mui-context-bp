This is a custom NEXT 12 (USING THE OLD NEXTJS STYLE, NOT APP FOLDER - FOR THAT SEE [THIS REPO](https://github.com/AtotheY/next-13-mui-context-bp)) boilerplate that includes a setup for MUI & React Context.

## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
```

## Structure

Everything is standardized to Next JS with a few caveats:

1. Styles are in the `styles` folder along with the MUI theme customizations for light and dark mode. Note that you can't have `styles` files inside the Pages folder.
2. A services folder exist for abstracting away API calls.
3. A `components` folder exists for all abstracted components.
4. A `context` folder exists for the global react Context that is set in the first client component loaded after a page load.

## State

We're able to get all the state gotten from getServersideProps / getInitialProps through the custom getContext hook within any component in the React tree. It automatically gets populated with the pageProps passed in from \_app.
