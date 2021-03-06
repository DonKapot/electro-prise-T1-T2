# electro-prise-T1-T2
Count price for electricity of T1/ T2 electro meter

*Note that you will need to have [Node.js](https://nodejs.org) installed.*

# Get started

Install the dependencies...
```bash
cd electro-prise-T1-T2
```

## 1) Electron: 
   ```bash
   yarn add electron-builder --dev
   ```

## 2) Svelte:

```bash
npm install
```

# Run dev environment (If you want change smth in app)

## 1) Svelte:

Change source code in /src dir.

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

### 2) Electron Build Win app (dev mode): 

...Then check it with electron:

```bash
npm run e-start
```

And wait (a little)

---

# Build prod

## Electron Build Win app (prod mode): 

...Then check it with electron:

```bash
npm run e-dist
```

And wait (about 5 min)

Take your count-t1-t2 1.0.0.exe in /dist dir

---

*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*


### svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```
