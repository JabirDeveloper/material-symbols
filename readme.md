# Material Symbols for React Project

This is just a simple library to use Material Symbols in your React project. You can learn more about Material Symbols from this link: [https://fonts.google.com/icons.](https://fonts.google.com/icons.) This library also includes other libraries namely: [material-symbols](https://www.npmjs.com/package/material-symbols), [clsx](https://www.npmjs.com/package/clsx), and [tailwind-merge](https://www.npmjs.com/package/tailwind-merge).

# Installation

```c
npm i @jabirdeveloper/material-symbols
```

# Usage

Import in CSS (example: index.css in Vite):

```css
@import "material-symbols";
```

Component Symbol props:

<table><tbody><tr><td>filled</td><td>boolean</td></tr><tr><td>variants</td><td>outlined | rounded | sharp</td></tr><tr><td>opticalSize</td><td>20 | 24 | 40 | 48</td></tr><tr><td>weight</td><td>thin | extra_light | &nbsp;light | normal | medium | semi_bold | bold</td></tr><tr><td>grade</td><td>low | normal | high</td></tr><tr><td>className</td><td>string</td></tr></tbody></table>

Example code to display icon:

```typescript
...
import { Symbols } from "@jabirdeveloper/material-symbols";

function App() {

  return (
    <>
      ...
        <Symbols filled variants="rounded" grade="high" opticalSize={48}>
          home
        </Symbols>
      ...
    </>
  );
}

export default App;
```

Thank you
