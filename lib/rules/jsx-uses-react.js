const JSX_ANNOTATION_REGEX = /@jsx\s+([^\s]+)/;
// Does not check for reserved keywords or unicode characters
const JS_IDENTIFIER_REGEX = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;

module.exports = {
  meta: {
    docs: {
      description: 'Prevent React to be marked as unused',
      category: 'Best Practices',
      recommended: true
    },
    schema: [],
    type: 'problem'
  },

  create(context) {
    const pragma = getFromContext(context);
    const fragment = getFragmentFromContext(context);

    function handleOpeningElement() {
      context.markVariableAsUsed(pragma);
    }

    return {
      JSXOpeningElement: handleOpeningElement,
      JSXOpeningFragment: handleOpeningElement,
      JSXFragment() {
        context.markVariableAsUsed(fragment);
      }
    };
  }
};

function getFragmentFromContext(context) {
  let pragma = 'Fragment';
  // .eslintrc shared settings (http://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  if (context.settings.react && context.settings.react.fragment) {
    pragma = context.settings.react.fragment;
  }
  if (!JS_IDENTIFIER_REGEX.test(pragma)) {
    throw new Error(`Fragment pragma ${pragma} is not a valid identifier`);
  }
  return pragma;
}

function getFromContext(context) {
  let pragma = 'React';

  const sourceCode = context.getSourceCode();
  const pragmaNode = sourceCode.getAllComments().find((node) => JSX_ANNOTATION_REGEX.test(node.value));

  if (pragmaNode) {
    const matches = JSX_ANNOTATION_REGEX.exec(pragmaNode.value);
    pragma = matches[1].split('.')[0];
    // .eslintrc shared settings (http://eslint.org/docs/user-guide/configuring#adding-shared-settings)
  } else if (context.settings.react && context.settings.react.pragma) {
    pragma = context.settings.react.pragma;
  }

  if (!JS_IDENTIFIER_REGEX.test(pragma)) {
    throw new Error(`React pragma ${pragma} is not a valid identifier`);
  }
  return pragma;
}
