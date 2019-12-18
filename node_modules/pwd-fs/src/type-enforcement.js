const TypeEnforcement = require('type-enforcement');

module.exports = new TypeEnforcement({
  '#constructor()': {
    src: String
  },
  '#bitmask()': {
    mode: Number
  },
  '#test()': {
    src: String,
    flag: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#stat()': {
    src: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#chmod()': {
    src: String,
    mode: Number,
    resolve: Boolean,
    sync: Boolean
  },
  '#chown()': {
    src: String,
    uid: Number,
    gid: Number,
    resolve: Boolean,
    sync: Boolean
  },
  '#symlink()': {
    src: String,
    use: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#copy()': {
    src: String,
    dir: String,
    umask: Number,
    resolve: Boolean,
    sync: Boolean
  },
  '#rename()': {
    src: String,
    use: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#remove()': {
    src: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#read()': {
    src: String,
    encoding: String,
    flag: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#write()': {
    src: String,
    encoding: String,
    umask: Number,
    flag: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#append()': {
    src: String,
    encoding: String,
    umask: Number,
    flag: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#readdir()': {
    dir: String,
    encoding: String,
    resolve: Boolean,
    sync: Boolean
  },
  '#mkdir()': {
    dir: String,
    umask: Number,
    resolve: Boolean,
    sync: Boolean
  }
});
