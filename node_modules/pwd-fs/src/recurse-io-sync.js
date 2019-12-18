const fs = require('fs');
const path = require('path');

const {sep} = path;
const cwd = process.cwd();

module.exports = {
  chmod(src, mode) {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
      const list = fs.readdirSync(src);

      for (let loc of list) {
        this.chmod(`${src}${sep}${loc}`, mode);
      }
    }

    fs.chmodSync(src, mode);
  },

  chown(src, uid, gid) {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
      const list = fs.readdirSync(src);

      for (let loc of list) {
        this.chown(`${src}${sep}${loc}`, uid, gid);
      }
    }

    fs.chownSync(src, uid, gid);
  },

  copy(src, dir, umask) {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
      const list = fs.readdirSync(src);

      const paths = src.split(sep);
      const loc = paths[paths.length - 1];
      const mode = 0o777 - umask;

      dir = `${dir}${sep}${loc}`;
      fs.mkdirSync(dir, mode);

      for (let loc of list) {
        this.copy(`${src}${sep}${loc}`, dir, umask);
      }
    }
    else {
      const loc = path.basename(src);
      const use = `${dir}${sep}${loc}`;

      fs.copyFileSync(src, use);
    }
  },

  remove(src) {
    const stat = fs.statSync(src);

    if (stat.isDirectory()) {
      const list = fs.readdirSync(src);

      for (let loc of list) {
        this.remove(`${src}${sep}${loc}`);
      }

      fs.rmdirSync(src);
    }
    else {
      fs.unlinkSync(src);
    }
  },

  mkdir(dir, umask) {
    const mode = 0o777 - umask;
    let use = '';

    if (dir.indexOf(cwd) === 0) {
      use = cwd;
      dir = dir.substr(cwd.length);
    }

    const ways = dir.split(sep).slice(1);

    for (let loc of ways) {
      use += `${sep}${loc}`;

      try {
        fs.mkdirSync(use, { mode });
      }
      catch (e) {
        if (e.errno !== -17) {
          throw e;
        }
      }
    }
  }
};
