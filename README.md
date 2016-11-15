### [Live](https://xeonys.github.io/react-showroom/#teleport)

# react-teleportation

## Why ?

Following the ***portal*** principle, [react-teleportation](#) create a new tree in the DOM to display some component in the foreground. It avoids headache with some z-Index weird tricks 😱 and can display your teleported component in full screen even if you run the modal from a component down in the tree.

## Usage

```js
import React from 'react'
import Teleport, { Lightbox } from 'react-teleportation'

const Home = () => {
  const openLightbox = () => Teleport.init(<Lightbox url="img/1.jpg" />)

  return (
    <a onClick={openLightbox}>Open Lightbox</a>
  )
}

export default Home
```

## Available components

**Lightbox**
```js
<Lightbox url="img/1.jpg" />
```

**Alert**
```js
const props = {
  title: 'Hi',
  description: 'Some text',
  right: {
    title: 'ok',
    action: () => Teleport.clear(),
  },
  left: {
    title: 'cancel',
    action: () => Teleport.clear(),
  },
}

<Alert {...props} />
```

**Modal**
```js
<Modal>
  Some text
  <YourComponent />
</Modal>
```

**Tutorial**

```js
<Tutorial>
  {[
    { id: 'componentId', text: 'Some information' },
    { id: 'anotherComponentId', text: 'Some information' },
  ]}
</Tutorial>
```

We're actually working on Snackbar (Toast), tutorial, and routing for modal and lightbox

## Run and code

```
yarn && yarn start
```

## Competitors

- **[react-portal](https://github.com/tajo/react-portal)** : React component for transportation of modals, lightboxes, loading bars... to document.body

*Submit a PR and add yours to this list !*

_____________

***Inspired by Ryan Florence talk https://www.youtube.com/watch?v=z5e7kWSHWTg***
