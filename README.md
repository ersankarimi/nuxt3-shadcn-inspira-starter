# Nuxt Minimal Starter with Inspira UI Integration

## Overview

This project provides a minimal Nuxt.js starter template with built-in integration for Inspira UI, a versatile component library for Vue and Nuxt. It's designed to help you quickly bootstrap new projects and build stunning, interactive web applications.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone [https://github.com/ersankarimi/nuxt3-shadcn-inspira-starter](https://github.com/ersankarimi/nuxt3-shadcn-inspira-starter)

   cd your-repo-name
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

   Or, if you prefer:

   ```bash
   pnpm install
   ```

   ```bash
   yarn install
   ```

   ```bash
   bun install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Or, if you prefer:
   ```bash
   pnpm dev
   ```
   ```bash
   yarn dev
   ```
   ```bash
   bun run dev
   ```

## Integrating Inspira UI

Inspira UI is already included in this project. To use its components, simply import them into your Vue components. For example:

```vue
<script>
import InspiraButton from "inspira-ui/button";

export default {
  components: {
    InspiraButton,
  },
};
</script>

<template>
  <div>
    <InspiraButton variant="primary">
      Click Me
    </InspiraButton>
  </div>
</template>
```

## Building for Production

```bash
npm run build
```

Or, if you prefer:

```bash
pnpm build
```

```bash
yarn build
```

```bash
bun run build
```

## Deployment

Refer to the Nuxt.js documentation for detailed deployment instructions: https://nuxt.com/docs/getting-started/deployment

## Contributing

We welcome contributions from everyone! To contribute:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Commit your changes** and push to your branch.
4. **Create a pull request**.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Resources

- Nuxt.js Documentation: https://nuxt.com
- Inspira UI Documentation: [https://inspira-ui.com](https://inspira-ui.com)
- shadcn/vue: [https://www.shadcn-vue.com/](https://www.shadcn-vue.com/)
