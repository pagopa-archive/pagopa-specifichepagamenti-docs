const fs = require('fs');
const path = require('path');
const recurse = require('./src/recurse-io');
const recurseSync = require('./src/recurse-io-sync');
const te = require('./src/type-enforcement');

const cwd = process.cwd();
const flags = {
  test: {
    e: fs.constants.F_OK,
    r: fs.constants.R_OK,
    w: fs.constants.W_OK,
    x: fs.constants.X_OK
  }
};

class PoweredFileSystem {
  constructor(src = '') {
    if (src === '') {
      src = cwd;
    }

    const err = te.validate('#constructor()', {
      src
    });

    if (err) {
      throw err;
    }

    this.pwd = path.resolve(cwd, src);
  }

  static bitmask(mode) {
    const err = te.validate('#bitmask()', {
      mode
    });

    if (err) {
      throw err;
    }

    let mask = 0o000;

    if (mode & 256) {
      mask += 0o400;
    }

    if (mode & 128) {
      mask += 0o200;
    }

    if (mode & 64) {
      mask += 0o100;
    }

    if (mode & 32) {
      mask += 0o040;
    }

    if (mode & 16) {
      mask += 0o020;
    }

    if (mode & 8) {
      mask += 0o010;
    }

    if (mode & 4) {
      mask += 0o004;
    }

    if (mode & 2) {
      mask += 0o002;
    }

    if (mode & 1) {
      mask += 0o001;
    }

    return mask;
  }

  test(src, {flag = 'e', resolve = true, sync = false} = {}) {
    const err = te.validate('#test()', {
      src,
      flag,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (flags.test.hasOwnProperty(flag) === false) {
      throw new Error(`Unknown file test flag: ${flag}`);
    }

    flag = flags.test[flag];

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return fs.existsSync(src);
    }

    return new Promise((resolve, reject) => {
      fs.access(src, flag, (err) => {
        if (err) {
          resolve(false);
          return;
        }

        resolve(true);
      });
    });
  }

  stat(src, {resolve = true, sync = false} = {}) {
    const err = te.validate('#stat()', {
      src,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return fs.lstatSync(src);
    }

    return new Promise((resolve, reject) => {
      fs.lstat(src, (err, info) => {
        if (err) {
          reject(err);
          return;
        }

        info.bitmask = this.constructor.bitmask(info.mode);

        resolve(info);
      });
    });
  }

  chmod(src, mode, {resolve = true, sync = false} = {}) {
    const err = te.validate('#chmod()', {
      src,
      mode,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return recurseSync.chmod(src, mode);
    }

    return new Promise((resolve, reject) => {
      recurse.chmod(src, mode, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  chown(src, uid, gid, {resolve = true, sync = false} = {}) {
    const err = te.validate('#chown()', {
      src,
      uid,
      gid,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return recurseSync.chown(src, uid, gid);
    }

    return new Promise((resolve, reject) => {
      recurse.chown(src, uid, gid, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  symlink(src, use, {resolve = true, sync = false} = {}) {
    const err = te.validate('#symlink()', {
      src,
      use,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
      use = path.resolve(this.pwd, use);
    }

    if (sync) {
      return fs.symlinkSync(src, use);
    }

    return new Promise((resolve, reject) => {
      fs.symlink(src, use, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  copy(src, dir, {umask = 0o000, resolve = true, sync = false} = {}) {
    const err = te.validate('#copy()', {
      src,
      dir,
      umask,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
      dir = path.resolve(this.pwd, dir);
    }

    if (sync) {
      return recurseSync.copy(src, dir, umask);
    }

    return new Promise((resolve, reject) => {
      recurse.copy(src, dir, umask, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  rename(src, use, {resolve = true, sync = false} = {}) {
    const err = te.validate('#rename()', {
      src,
      use,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
      use = path.resolve(this.pwd, use);
    }

    if (sync) {
      return fs.renameSync(src, use);
    }

    return new Promise((resolve, reject) => {
      fs.rename(src, use, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  remove(src, {resolve = true, sync = false} = {}) {
    const err = te.validate('#remove()', {
      src,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return recurseSync.remove(src);
    }

    return new Promise((resolve, reject) => {
      recurse.remove(src, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  read(src, {encoding = 'utf8', flag = 'r', resolve = true, sync = false} = {}) {
    const err = te.validate('#read()', {
      src,
      encoding,
      flag,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    if (sync) {
      return fs.readFileSync(src, {
        encoding,
        flag
      });
    }

    return new Promise((resolve, reject) => {
      fs.readFile(src, {
        encoding,
        flag
      },
      (err, content) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(content);
      });
    });
  }

  write(src, data, {encoding = 'utf8', umask = 0o000, flag = 'w', resolve = true, sync = false} = {}) {
    const err = te.validate('#write()', {
      src,
      encoding,
      umask,
      flag,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    const mode = 0o666 - umask;

    if (sync) {
      return fs.writeFileSync(src, data, {
        encoding,
        mode,
        flag
      });
    }

    return new Promise((resolve, reject) => {
      fs.writeFile(src, data, {
        encoding,
        mode,
        flag
      },
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  append(src, data, {encoding = 'utf8', umask = 0o000, flag = 'a', resolve = true, sync = false} = {}) {
    const err = te.validate('#append()', {
      src,
      encoding,
      umask,
      flag,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      src = path.resolve(this.pwd, src);
    }

    const mode = 0o666 - umask;

    if (sync) {
      return fs.appendFileSync(src, data, {
        encoding,
        mode,
        flag
      });
    }

    return new Promise((resolve, reject) => {
      fs.appendFile(src, data, {
        encoding,
        mode,
        flag
      },
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }

  readdir(dir, {encoding = 'utf8', resolve = true, sync = false} = {}) {
    const err = te.validate('#readdir()', {
      dir,
      encoding,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      dir = path.resolve(this.pwd, dir);
    }

    if (sync) {
      return fs.readdirSync(dir, {
        encoding
      });
    }

    return new Promise((resolve, reject) => {
      fs.readdir(dir, {
        encoding
      },
      (err, list) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(list);
      });
    });
  }

  mkdir(dir, {umask = 0o000, resolve = true, sync = false} = {}) {
    const err = te.validate('#mkdir()', {
      dir,
      umask,
      resolve,
      sync
    });

    if (err) {
      throw err;
    }

    if (resolve) {
      dir = path.resolve(this.pwd, dir);
    }

    if (sync) {
      return recurseSync.mkdir(dir, umask);
    }

    return new Promise((resolve, reject) => {
      recurse.mkdir(dir, umask, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

module.exports = PoweredFileSystem;
