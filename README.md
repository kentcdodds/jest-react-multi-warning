# jest-react-multi-warning

This demonstrates that even though React only logs once for warnings, because
Jest spawns each test in its own process, you'll see the error for every test
file.

If you run `npm test` then you'll see this output complete with the errors:

<details>
<summary>npm test output</summary>

```console
~/Desktop/jest-react-multi-warning
👾  $ npm test
 PASS  ./one.test.js
  ● Console

    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Foo: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.

 PASS  ./five.test.js
  ● Console

    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Foo: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.

 PASS  ./four.test.js
  ● Console

    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Foo: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.

 PASS  ./three.test.js
  ● Console

    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Foo: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.

 PASS  ./two.test.js
  ● Console

    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
    console.error node_modules/fbjs/lib/warning.js:36
      Warning: Foo: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.


Test Suites: 5 passed, 5 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.192s
Ran all test suites.
```

</details>
