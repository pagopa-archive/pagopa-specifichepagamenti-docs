# Powered File System

[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/woodger/pwd-fs/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/woodger/pwd-fs.svg?branch=master)](https://travis-ci.org/woodger/pwd-fs)
[![Build status](https://ci.appveyor.com/api/projects/status/dn30qhwxe845kpxe?svg=true)](https://ci.appveyor.com/project/woodger/pwd-fs)
[![Coverage Status](https://coveralls.io/repos/github/woodger/pwd-fs/badge.svg)](https://coveralls.io/github/woodger/pwd-fs)
[![Known Vulnerabilities](https://snyk.io/test/github/woodger/type-enforcement/badge.svg?targetFile=package.json)](https://snyk.io/test/github/woodger/type-enforcement?targetFile=package.json)

This module expands the [Node.js®](https://nodejs.org) module with the capabilities of declaring the `pwd` (present working directory) and `recursive` execution. By default all file system operations have asynchronous forms. API provides an alternative set of asynchronous file system methods that return `Promise` objects.

## Getting Started

### Installation

To use `Powered File System` in your project, run:

```bash
npm i pwd-fs
```

#### Table of Contents

[class PoweredFileSystem](#class-poweredfilesystem)

* [constructor: new PoweredFileSystem([path])](#constructor-new-poweredfilesystempath)
* [pfs.test(src[, options])](#pfstestsrc-options)
* [pfs.stat(src[, options])](#pfsstatsrc-options)
* [pfs.chmod(src, mode[, options])](#pfschmodsrc-mode-options)
* [pfs.chown(src, uid, gid[, options])](#pfschownsrc-uid-gid-options)
* [pfs.symlink(src, use[, options])](#pfssymlinksrc-use-options)
* [pfs.copy(src, dir[, options])](#pfscopysrc-dir-options)
* [pfs.rename(src, use[, options])](#pfsrenamesrc-use-options)
* [pfs.remove(src[, options])](#pfsremovesrc-options)
* [pfs.read(src[, options])](#pfsreadsrc-options)
* [pfs.write(src, data[, options])](#pfswritesrc-data-options)
* [pfs.append(src, data[, options])](#pfsappendsrc-data-options)
* [pfs.readdir(dir[, options])](#pfsreaddirdir-options)
* [pfs.mkdir(dir[, options])](#pfsmkdirdir-options)
* [static: bitmask(mode)](#static-bitmaskmode)
* [pfs.pwd](#pfspwd)

The scope `URI` of the class methods are divided into groups.

| URI                         | Methods                                                          |
|-----------------------------|------------------------------------------------------------------|
| Common (file and directory) | `chmod` `chown` `copy` `remove` `rename` `symlink` `stat` `test` |
| File only                   | `append` `read` `write`                                          |
| Directory only              | `mkdir` `readdir`                                                |


#### class PoweredFileSystem

This class implemented by following the [ECMAScript® 2018 Language Specification
](https://www.ecma-international.org/ecma-262/9.0/index.html) Standard.

#### constructor: new PoweredFileSystem([path])

- `path` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> absolute or relative dirname. `path` sets `pfs.pwd` value, by default [process.cwd()](https://nodejs.org/api/process.html#process_process_cwd).

String form paths are interpreted as UTF-8 character sequences identifying the absolute or relative filename.

```js
const PoweredFileSystem = require('pwd-fs');

/**
 * pfs.pwd === process.cwd()
 */

const pfs = new PoweredFileSystem();
```

Relative paths will be resolved relative to the current working directory as specified by `process.cwd()`:

```js
const PoweredFileSystem = require('pwd-fs');

/**
 * pfs.pwd === `${process.cwd()}/foo/bar`
 */

const pfs = new PoweredFileSystem('./foo/bar');
```

Absolute paths:

```js
const PoweredFileSystem = require('pwd-fs');

/**
 * pfs.pwd === __dirname
 */

const pfs = new PoweredFileSystem(__dirname);
```

#### pfs.test(src[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `flag` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is an optional string that specifies the accessibility checks to be performed. **Default:** `'e'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful read, the `Promise` is resolved with an value with a `boolean`.

Tests a user's permissions for the file or directory specified by path.

```js
const access = await pfs.test('./path');
console.log(test); // true
```
> Function `pfs.test()` return only `Promise.resolve()`

The following `flag` are meant for use with `pfs.test()`.

Flag | Description
-----|-------------
`'e'` | Source is visible
`'r'` | Permitted can be read
`'w'` | Permitted can be written
`'x'` | Permitted can be executed. This has no effect on Windows system (will behave like `e`).

#### pfs.stat(src[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful read, the `Promise` is resolved with an value with a `fs.Stats`.

> `fs.Stats` extended `bitmask` field.

These functions return information about a resource in the file system.

#### pfs.chmod(src, mode[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `mode` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> Is a numeric `bitmask` created using a logical `OR`.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful change, the `Promise` is resolved with an value with a `undefined`.

Asynchronously changes the permissions of a file.

```js
await pfs.chmod('./path', 0o750);
const info = await pfs.stat('./path');

console.log(info.bitmask === 0o750); // true
```

> **Caveats:** on Windows only the write permission can be changed, and the distinction among the permissions of group, owner or others is not implemented.

See manuals [chmod(2)](http://man7.org/linux/man-pages/man2/chmod.2.html)

#### pfs.chown(src, uid, gid[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `uid` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>
- `gid` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful change, the `Promise` is resolved with an value with a `undefined`.

Asynchronously changes owner and group of a file.
See manuals [chown(2)](http://man7.org/linux/man-pages/man2/chown.2.html).

#### pfs.symlink(src, use[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `use` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. If `use` exists, it will not be overwritten.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful created link, the `Promise` is resolved with an value with a `undefined`.

Asynchronously creates a new symbolic link (also known as a soft link) may point to an existing file or to a nonexistent one.

```js
await pfs.symlink('./path', './link');
const info = await pfs.stat('./link');

console.log(info.isSymbolicLink()); // true
```

See manuals [symlink(2)](http://man7.org/linux/man-pages/man2/symlink.2.html).

#### pfs.copy(src, dir[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `dir` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the directory to which the resource is to be copied.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `umask` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> Umask or file [mode creation mask](#mode-creation-mask) is a grouping of bits, each of which restricts how its corresponding permission is set for newly created files or directories. See manuals [umask(2)](http://man7.org/linux/man-pages/man2/umask.2.html). Not supported on Windows system. **Default:** `0o000`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful copied, the `Promise` is resolved with an value with a `undefined`.

Asynchronously recursively copy a file or directory.

```js
await pfs.copy('./path/file.txt', './dest');
const info = await pfs.stat('./dest/path/file.txt');

console.log(info.bitmask); // 0o666
```

#### pfs.rename(src, use[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `use` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful renamed, the `Promise` is resolved with an value with a `undefined`.

Rename file or directory. See manuals [rename(2)](http://man7.org/linux/man-pages/man2/rename.2.html).

```js
await pfs.rename('./path/old_name.txt', './path/new_name.txt');
```

#### pfs.remove(src[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful removed, the `Promise` is resolved with an value with a `undefined`.

Asynchronously recursively remove a file or directory. Will be `resolve` if the directory already not exists.

#### pfs.read(src[, options])]

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `encoding` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is the expected [string encoding](#string-encoding). **Default:** `'utf8'`.
  - `flag` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> See support of [file system flags](#file-system-flags). **Default:** `'r'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful read, the `Promise` is resolved with an value with a `string`.

Asynchronously reads the entire contents of a file.

```js
const content = await pfs.read('./file.txt');
console.log(content); // 'Lorem Ipsum...'
```

#### pfs.write(src, data[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `data` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `umask` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> Umask or file [mode creation mask](#mode-creation-mask) is a grouping of bits, each of which restricts how its corresponding permission is set for newly created files or directories. See manuals [umask(2)](http://man7.org/linux/man-pages/man2/umask.2.html). Not supported on Windows system. **Default:** `0o000`.
  - `encoding` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is the expected [string encoding](#string-encoding). **Default:** `'utf8'`.
  - `flag` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> See support of [file system flags](#file-system-flags). **Default:** `'w'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful write, the `Promise` is resolved with an value with a `undefined`.

Asynchronously writes `data` to a file, replacing the file if it already exists. if the file does not exist, it will create a new one.

```js
await pfs.write('./file.txt', '... some text');
```

> This function is limited to writing only `string`. For `stream`, `fs.createWriteStream()` is recommended.

#### pfs.append(src, data[, options])

- `src` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the resource in the file system. Relative paths will be resolved relative to the present working directory as specified by `pfs.pwd`.
- `data` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `umask` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> Umask or file [mode creation mask](#mode-creation-mask) is a grouping of bits, each of which restricts how its corresponding permission is set for newly created files or directories. See manuals [umask(2)](http://man7.org/linux/man-pages/man2/umask.2.html). Not supported on Windows system. **Default:** `0o000`.
  - `encoding` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is the expected [string encoding](#string-encoding). **Default:** `'utf8'`.
  - `flag` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> See support of [file system flags](#file-system-flags). **Default:** `'a'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful write, the `Promise` is resolved with an value with a `undefined`.

Asynchronously append data to a file, creating the file if it does not yet exist.

#### pfs.readdir(dir[, options]

- `dir` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the directory you want to read.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `encoding` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is the expected [string encoding](#string-encoding). **Default:** `'utf8'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful write, the `Promise` is resolved with an value with a `Array` of the names of the files in the directory excluding `'.'` and `'..'`.

Asynchronous reads the contents of a directory. The Gets an <[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)> of the names of the files in the directory excluding `'.'` and `'..'`. Returns an empty `Array` if the directory is empty. See manuals [readdir(3)](http://man7.org/linux/man-pages/man3/readdir.3.html).

```js
const list = await pfs.readdir('./files');
console.log(list); // ["icons", "logo.svg"]
```

#### pfs.mkdir(dir[, options])

- `dir` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Absolute or relative path to the directory you want to read.
- `options` <[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)>
  - `resolve` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Declaration whether relative paths will be resolved. **Default:** `true`.
  - `umask` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)> Umask or file [mode creation mask](#mode-creation-mask) is a grouping of bits, each of which restricts how its corresponding permission is set for newly created files or directories. See manuals [umask(2)](http://man7.org/linux/man-pages/man2/umask.2.html). Not supported on Windows system. **Default:** `0o000`.
  - `encoding` <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)> Is the expected [string encoding](#string-encoding). **Default:** `'utf8'`.
  - `sync` <[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)> Synchronous execution. **Default:** `false`.
- returns: <[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)> Following successful execution, the `Promise` is resolved with an value with a `undefined`.

Recursive directory creation. Will be `resolve` if the directory already exists.

```js
await pfs.mkdir('./static/images');
```

#### static: bitmask(mode)

- `mode` <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>
`fs.stat(path[, options], callback)` function provides information about the file system resource. A `stat.mode` is a bit-field that describes the type and mode of the file. Extends an instance of the standard module `fs.Stats` by adding a `bitmask` field.
- returns: <[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)>.

```js
const fs = require('fs');
const {bitmask} = require('pwd-fs');

fs.stat('./path', (err, stat) => {
  console.log(bitmask(stat.mode)); // 0o755
});
```

#### pfs.pwd

- <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>

The full path from the root directory to the present working directory: in the context of which relative paths will be resolved.

#### Mode creation mask

The following table shows some examples of how to set the extension `mode` or `umask` for files and directories.

Umask | Mode files | Mode directories
------|-------|------------
0o000 | 0o666 (rw-rw-rw-) | 0o777 (rwxrwxrwx)
0o002 | 0o664 (rw-rw-r--) | 0o775 (rwxrwxr-x)
0o007 | 0o660 (rw-rw----) | 0o770 (rwxrwx---)
0o022 | 0o644 (rw-r--r--) | 0o755 (rwxr-xr-x)
0o027 | 0o640 (rw-r-----) | 0o750 (rwxr-x---)
0o077 | 0o600 (rw-------) | 0o700 (rwx------)
0o277 | 0o400 (r--------) | 0o500 (r-x------)

#### String encoding

The following encoding are available wherever the encoding option takes a <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>.

Encoding | Description
---------|------------
`'ascii'` | Each alphabetic, numeric or special character is represented by a 7-bit binary number (a string of seven 0 or 1), which is assigned a number from 0 to 127.
`'base64'` | Three 8-bit bytes (i.e., a total of 24 bits) can be represented by four 6-bit digits. The full specification of this form is contained in IANA [RFC 1421](https://tools.ietf.org/html/rfc1421) and [RFC 2045](https://tools.ietf.org/html/rfc2045).
`'hex'` | Encode each byte as two hexadecimal characters.
`'ucs2` | 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.
`'utf16le'` | Like `'ucs2`.
`'utf8'` | Multibyte encoded Unicode characters. The first 128 characters of Unicode, which correspond one-to-one with `ascii`, are encoded using a single octet with the same binary value as `ascii`, so that valid `ascii` text is valid `utf8`-encoded Unicode as well.
`'latin1'` | Defined by the IANA in [RFC1345](https://tools.ietf.org/html/rfc1345), only in node 6.4.0+.
`'binary'` | Like `'latin1`.

#### File system flags

The following flags are available for `pfs.read`, `pfs.write` and `pfs.append` the flag option takes a <[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>.

Flag | Description
-----|------------
`'a'` | Open file for appending. The file is created if it does not exist.
`'ax'` | Like `'a'` but fails if the path exists.
`'a+'` | Open file for reading and appending. The file is created if it does not exist.
`'ax+'` | Like `'a+'` but fails if the path exists.
`'as'` | Open file for appending in synchronous mode. The file is created if it does not exist.
`'as+'` | Open file for reading and appending in synchronous mode. The file is created if it does not exist.
`'r'` | Open file for reading. An exception occurs if the file does not exist.
`'r+'` | Open file for reading and writing. An exception occurs if the file does not exist.
`'rs+'` | Open file for reading and writing in synchronous mode. Instructs the operating system to bypass the local file system cache. Using this flag is not recommended unless it is needed.
`'w'`| Open file for writing. The file is created (if it does not exist) or truncated (if it exists).
`'wx'` | Like `'w'` but fails if the path exists.
`'w+'` | Open file for reading and writing. The file is created (if it does not exist) or truncated (if it exists).
`'wx+'` | Like `'w+'` but fails if the path exists.

The behavior of some flags are platform-specific.
