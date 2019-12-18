const is = {
  object(value) {
    return value !== null && typeof value === 'object';
  },

  string(value) {
    return typeof value === 'string';
  }
};

const enforcement = {
  validate(Class, value) {
    if (value === undefined || value === null) {
      return false;
    }

    return Object.getPrototypeOf(value) === Class.prototype;
  },

  normalise(Class, value) {
    if ([ String, Number, Boolean, Symbol, BigInt ].includes(Class)) {
      if (value === undefined) {
        return Class();
      }

      return Class(value);
    }

    if (value === undefined) {
      return new Class();
    }

    return new Class(value);
  }
};

class TypeEnforcement {
  constructor(rules) {
    if (is.object(rules) === false) {
      throw new TypeError(`Unexpected argument or 'undefined' or 'null'`);
    }

    Object.freeze(rules);

    const schema = {};

    Object.keys(rules).forEach((i) => {
      const sample = rules[i];

      if (is.object(sample) === false) {
        throw new TypeError(
          `Unexpected sample '${i}' or 'undefined' or 'null'`
        );
      }

      const names = Object.keys(sample);

      for (const i of names) {
        if (sample[i] === undefined || sample[i] === null) {
          throw new TypeError(
            `The prototype object '${i}' must have a constructor function`
          );
        }

        if (typeof sample[i].prototype.constructor !== 'function') {
          throw new TypeError(`Order '${i}' not found`);
        }
      }

      schema[i] = names;
    });

    this.rules = rules;
    this.schema = schema;
  }

  validate(order, values, {skip = false} = {}) {
    if (is.string(order) === false || is.object(values) === false) {
      return new TypeError(`Unexpected argument or 'undefined' or 'null'`);
    }

    if (this.schema.hasOwnProperty(order) === false) {
      return new TypeError(`Order '${order}' not found`);
    }

    const fields = Object.keys(values);
    const rule = this.rules[order];
    const schema = this.schema[order];

    if (skip === false) {
      const missing = schema.filter((i) => {
        return fields.indexOf(i) === -1;
      });

      if (missing.length > 0) {
        return new TypeError(`Missing fields '${missing}' in order '${order}'`);
      }
    }

    const spare = fields.filter((i) => {
      return schema.indexOf(i) === -1;
    });

    if (spare.length > 0) {
      return new TypeError(`Redundant fields '${spare}' in order '${order}'`);
    }

    for (const i of fields) {
      const Class = rule[i];
      const value = values[i];

      if (enforcement.validate(Class, value) === false) {
        return new TypeError(
          `Invalid value '${i}' in order '${order}'. Expected ${Class.name}`
        );
      }
    }

    return null;
  }

  normalise(order, values) {
    if (is.string(order) === false || is.object(values) === false) {
      throw new TypeError(`Unexpected argument or 'undefined' or 'null'`);
    }

    if (this.schema.hasOwnProperty(order) === false) {
      throw new TypeError(`Order '${order}' not found`);
    }

    const fields = Object.keys(values);
    const rule = this.rules[order];
    const schema = this.schema[order];

    const spare = fields.filter((i) => {
      return schema.indexOf(i) === -1;
    });

    if (spare.length > 0) {
      throw new TypeError(`Redundant fields '${spare}' in order '${order}'`);
    }

    for (const i of fields) {
      const Class = rule[i];
      const value = values[i];

      values[i] = enforcement.normalise(Class, value);
    }

    return values;
  }
}

module.exports = TypeEnforcement;
