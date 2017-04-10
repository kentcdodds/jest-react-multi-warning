import React from 'react';

const Foo = React.createClass({
  propTypes: {
    foo: React.PropTypes.string,
  },
  render() {
    return <div />;
  },
});

const ui = <Foo />;

test('passing', () => {});
