<img src="https://i.ibb.co/j6df7Wy/logo.png" alt="donut logo" title="donut logo" width="171">
<br>

<p style="font-size: 1.2rem;">A simple, styleable and easy to use donut component.</p>
<hr />

![downloads][downloads-badge]
[![MIT License][license-badge]][license]
![npm](https://img.shields.io/npm/v/react-donut-component)

## Install

```
npm install react-donut-component
```

## Usage

> [Try it out in the browser][code-sandbox-try-it-out]

```jsx
import React from 'react'
import { Donut } from 'react-donut-component' 

const App = () => (  
  <Donut>70</Donut>
);

```
#### Preview: 
![donut-example](https://i.ibb.co/P6RnW0x/image.png)

<hr />

### Setting a label:
> When you put a label, you have to specify the value with DonutValue component
```jsx
import React from 'react'
import { Donut, DonutValue, DonutLabel } from 'react-donut-component' 

const App = () => (
  <Donut>
    <DonutValue>70</DonutValue>
    <DonutLabel>My label</DonutLabel>
  </Donut>
);

```
#### Preview: 
![donut-example](https://i.ibb.co/wwbBkQw/image.png)

<hr />

### Styling: 
> There are many style props with the format 'styleSomething'.

[See API](https://5f711adb6ec1620022e842dc-ewgfhkdqda.chromatic.com/?path=/docs/donut--simple-donut)
```jsx
import React from 'react'
import { Donut, DonutValue, DonutLabel } from 'react-donut-component' 

const App = () => (
  <Donut
    styleTrack={{ strokeWidth: 9, stroke: 'AliceBlue' }}
    styleIndicator={{ stroke: 'Cyan', strokeLinecap: 'round' }}
  >
    <DonutValue
      style={{ fontWeight: 'bold' }}
      symbol='°C'
      styleSymbol={{ fontWeight: 'bold', fontSize: '18px' }}
      symbolPosition='top-right'
    >
      79
    </DonutValue>
  </Donut>
);
```
#### Preview: 
![donut-example](https://i.ibb.co/3d1HN7D/image.png)

<hr />

## Usage with multiple values
We provide a component called DonutMultiple, which can receive multiple DonutElement values that are calculated relatively. 

```jsx
import React from 'react'
import { DonutMultiple, DonutElement, DonutLabel } from 'react-donut-component' 

const App = () => (
  <DonutMultiple>
    <DonutElement color='brown' name="Messi">6</DonutElement>
    <DonutElement color='black' name="CR7">5</DonutElement>
    <DonutLabel>Ballon d'ors</DonutLabel>
  </DonutMultiple>
);
```
#### Preview: 
![donut-example](https://i.ibb.co/gVHhH50/image.png)

#### See the API and more examples like this in the: [the story book](https://5f711adb6ec1620022e842dc-ewgfhkdqda.chromatic.com/?path=/story/donut--simple-donut)
<img src="https://i.ibb.co/18kDxtj/donut-test.png" alt="donut logo" title="donut logo" width="300">


That's all :wink:

## Contributors

@gsdeveloper
   
## LICENSE

MIT

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[build-badge]:
  https://img.shields.io/travis/downshift-js/downshift.svg?style=flat-square
[build]: https://travis-ci.org/downshift-js/downshift
[coverage-badge]:
  https://img.shields.io/codecov/c/github/downshift-js/downshift.svg?style=flat-square
[coverage]: https://codecov.io/github/downshift-js/downshift
[version-badge]: https://img.shields.io/npm/v/downshift.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-donut-component
[downloads-badge]: https://img.shields.io/npm/dm/react-donut-component
[license-badge]: https://img.shields.io/npm/l/downshift.svg?style=flat-square
[license]: https://github.com/downshift-js/downshift/blob/master/LICENSE
[code-sandbox-try-it-out]:
  https://codesandbox.io/s/react-donut-component-example-cy1yb?file=/src/App.tsx
