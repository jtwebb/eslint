const isObject = (item) => item && typeof item === 'object' && !Array.isArray(item);

function merge(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return { ...target };
  }

  let output = { ...target };

  Object.keys(source).forEach((key) => {
    if (isObject(source[key]) && !(key in target)) {
      output = { ...output, [key]: source[key] };
    } else if (isObject(source[key])) {
      output[key] = merge(target[key], source[key]);
    } else {
      output = { ...output, [key]: source[key] };
    }
  });

  return output;
}

module.exports = merge;
