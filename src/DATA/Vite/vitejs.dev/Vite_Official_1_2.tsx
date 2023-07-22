import Img from "../../../components/HTML/Img";
import CodeBlock from "../../../components/HTML/CodeBlock";

export default function Vite_Official_1_2() {
  const code1 = `$ npm create vite@latest`;
  const code2 = `$ yarn create vite`;
  const code3 = `$ pnpm create vite`;
  const code4 = `
  # npm 6.x
  npm create vite@latest my-vue-app --template vue
  
  # npm 7+, extra double-dash is needed:
  npm create vite@latest my-vue-app -- --template vue
  
  # yarn
  yarn create vite my-vue-app --template vue
  
  # pnpm
  pnpm create vite my-vue-app --template vue
  `;
  const code5 = `
npx degit user/project my-project
cd my-project

npm install
npm run dev`;
  const code6 = `$ npx degit user/project#main my-project`;
  const code7 = `
{
  "scripts": {
    "dev": "vite", // start dev server, aliases: \`vite dev\`, \`vite serve\`
    "build": "vite build", // build for production
    "preview": "vite preview" // locally preview production build
  }
}`;
  const code8 = `
git clone https://github.com/vitejs/vite.git
cd vite
pnpm install
cd packages/vite
pnpm run build
pnpm link --global # use your preferred package manager for this step`;
  return (
    <div>
      <h1 className="text-center font-bold">Getting Started</h1>
      <h3>Overview</h3>
      <p>
        Vite (French word for "quick", pronounced /vit/, like "veet") is a build
        tool that aims to provide a faster and leaner development experience for
        modern web projects. It consists of two major parts:
      </p>
      <p>
        A dev server that provides rich feature enhancements over native ES
        modules, for example extremely fast Hot Module Replacement (HMR).
      </p>
      <p>
        A build command that bundles your code with Rollup, pre-configured to
        output highly optimized static assets for production.
      </p>
      <p>
        Vite is opinionated and comes with sensible defaults out of the box.
        Read about what's possible in the Features Guide. Support for frameworks
        or integration with other tools is possible through Plugins. The Config
        Section explains how to adapt Vite to your project if needed.
      </p>
      <p>
        Vite is also highly extensible via its Plugin API and JavaScript API
        with full typing support.
      </p>
      <p>
        You can learn more about the rationale behind the project in the Why
        Vite section.
      </p>
      <h3>Browser Support </h3>
      <p>
        The default build targets browsers that support native ES Modules,
        native ESM dynamic import, and import.meta. Legacy browsers can be
        supported via the official @vitejs/plugin-legacy - see the Building for
        Production section for more details.
      </p>
      <h3>Trying Vite Online </h3>
      <p>
        You can try Vite online on StackBlitz. It runs the Vite-based build
        setup directly in the browser, so it is almost identical to the local
        setup but doesn't require installing anything on your machine. You can
        navigate to vite.new/{`{template}`}to select which framework to use.
      </p>
      <p>The supported template presets are:</p>
      <br />
      <p>
        JavaScript TypeScript vanilla vanilla-ts vue vue-ts react react-ts
        preact preact-ts lit lit-ts svelte svelte-ts solid solid-ts qwik qwik-ts
      </p>
      <h3>Scaffolding Your First Vite Project </h3>
      <p>
        Compatibility Note Vite requires Node.js version 14.18+, 16+. However,
        some templates require a higher Node.js version to work, please upgrade
        if your package manager warns about it.
      </p>
      <p>With NPM:</p>
      <CodeBlock language="bash" content={code1} />
      <p>With Yarn:</p>
      <CodeBlock language="bash" content={code2} />
      <p>With PNPM:</p>
      <CodeBlock language="bash" content={code3} />
      <p>Then follow the prompts!</p>
      <p>
        You can also directly specify the project name and the template you want
        to use via additional command line options. For example, to scaffold a
        Vite + Vue project, run:
      </p>
      <CodeBlock language="bash" content={code4} />
      <p>
        See create-vite for more details on each supported template: vanilla,
        vanilla-ts, vue, vue-ts, react, react-ts, react-swc, react-swc-ts,
        preact, preact-ts, lit, lit-ts, svelte, svelte-ts, solid, solid-ts,
        qwik, qwik-ts.
      </p>
      <h3>Community Templates </h3>
      <p>
        create-vite is a tool to quickly start a project from a basic template
        for popular frameworks. Check out Awesome Vite for community maintained
        templates that include other tools or target different frameworks. You
        can use a tool like degit to scaffold your project with one of the
        templates.
      </p>
      <CodeBlock language="bash" content={code5} />
      <p>
        If the project uses main as the default branch, suffix the project repo
        with #main
      </p>
      <CodeBlock language="bash" content={code6} />
      <h3>index.html and Project Root </h3>
      <p>
        One thing you may have noticed is that in a Vite project, index.html is
        front-and-central instead of being tucked away inside public. This is
        intentional: during development Vite is a server, and index.html is the
        entry point to your application.
      </p>
      <p>
        Vite treats index.html as source code and part of the module graph. It
        resolves {`<script type="module" src="...">`} that references your
        JavaScript source code. Even inline {`<script type="module">`} and CSS
        referenced via {`<link href>`} also enjoy Vite-specific features. In
        addition, URLs inside index.html are automatically rebased so there's no
        need for special %PUBLIC_URL% placeholders.
      </p>
      <p>
        Similar to static http servers, Vite has the concept of a "root
        directory" which your files are served from. You will see it referenced
        as{` <root> `}throughout the rest of the docs. Absolute URLs in your
        source code will be resolved using the project root as base, so you can
        write code as if you are working with a normal static file server
        (except way more powerful!). Vite is also capable of handling
        dependencies that resolve to out-of-root file system locations, which
        makes it usable even in a monorepo-based setup.
      </p>
      <p>
        Vite also supports multi-page apps with multiple .html entry points.
      </p>
      <h4>Specifying Alternative Root </h4>
      <p>
        Running vite starts the dev server using the current working directory
        as root. You can specify an alternative root with vite serve
        some/sub/dir. Note that Vite will also resolve its config file (i.e.
        vite.config.js) inside the project root, so you'll need to move it if
        the root is changed.
      </p>
      <h3>Command Line Interface </h3>
      <p>
        In a project where Vite is installed, you can use the vite binary in
        your npm scripts, or run it directly with npx vite. Here are the default
        npm scripts in a scaffolded Vite project:
      </p>
      <CodeBlock language="json" content={code7} />
      <p>
        You can specify additional CLI options like --port or --https. For a
        full list of CLI options, run npx vite --help in your project.
      </p>
      <p>Learn more about the Command Line Interface</p>
      <h3>Using Unreleased Commits </h3>
      <p>
        If you can't wait for a new release to test the latest features, you
        will need to clone the vite repo to your local machine and then build
        and link it yourself (pnpm is required):
      </p>
      <CodeBlock language="bash" content={code8} />
      <p>
        Then go to your Vite based project and run pnpm link --global vite (or
        the package manager that you used to link vite globally). Now restart
        the development server to ride on the bleeding edge!
      </p>
      <h3>Community </h3>
      <p>
        If you have questions or need help, reach out to the community at
        Discord and GitHub Discussions.
      </p>
    </div>
  );
}
