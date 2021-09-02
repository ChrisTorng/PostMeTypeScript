# PostMeTypeScript
Demo "import [post-me](https://github.com/alesgenova/post-me) as a script" in TypeScript.

# Build
Run `tsc` each time after you changed `parent.ts`/`child.ts` to generate `.js`/`.js.map`.
Run `npx serve` then open [http://localhost:5000](http://localhost:5000).

# 1st commit
`tsc` failed with `error TS2304: Cannot find name 'PostMe'.`.

# 2nd commit
After added `export_post-me.d.ts`, `tsc` passed.

# 3rd commit
Fully strong typed with `interface.d.ts` added.

# 4th commit
Move `export_post-me.d.ts` into `post-me/dist`, and add reference in ts.