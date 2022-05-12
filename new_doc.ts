// Copyright © 2022 Dpm Land. All Rights Reserved.

import Ask from 'https://deno.land/x/ask@1.0.6/mod.ts';
import * as colors from 'https://deno.land/std@0.135.0/fmt/colors.ts';
import { join } from 'https://deno.land/std@0.135.0/path/mod.ts';
import { dracoFiles } from 'https://deno.land/x/draco@0.1.3/mod.ts';

// Utilities

const ask = new Ask({
  suffix: '?',
  prefix: '>',
});

// Mini logger
const info = (msg: string) => {
  console.log(colors.cyan(msg));
};
const error = (msg: string) => {
  console.log(colors.red(msg));
  Deno.exit(2);
};
const warn = (msg: string) => {
  console.log(colors.yellow(msg));
};

// Start the helper!

const answers = await ask.prompt([
  {
    name: 'name',
    message:
      'Name of documentation to create: ( Answers like: about.info or about )',
  },
  {
    name: 'current',
    message:
      'Create this in the current directory or work with folders: ( Answers like: y -> directory or n -> folders )',
    type: 'confirm',
  },
]);
let docName = answers.name?.toString().split('.');

docName = (typeof docName == 'undefined') ? ['notExists'] : docName;

if (docName[0] == 'notExists') {
  error('Is necessary an argument!');
}

let name = docName[1]?.toUpperCase() || 'NO_NAME_PROVIDED';

if (answers.current) {
  if (docName.length == 1 && docName[0] != 'notExists') {
    name = docName[0]?.toUpperCase() || 'NO_NAME_PROVIDED';
    if (!dracoFiles.exists(`${docName[0]}.md`)) {
      if (docName[0] == '') {
        warn('Creating the file with the default name!');
      }
      await Deno.writeTextFile(
        `${join(Deno.cwd(), name)}.md`,
        '',
      );
      info('Writed successfully the new documentation file!');
    } else {
      error('This file already exists!');
    }
  }
}

if (docName.length == 2) {
  if (dracoFiles.exists(docName[0])) {
    info(`The ${docName[0]} directory exists!`);
    await Deno.writeTextFile(
      `${join(Deno.cwd(), docName[0], name)}.md`,
      '',
    );
    info('Writed successfully the new documentation file!');
  } else {
    warn(`Not found the ${docName[0]} directory!`);
    await Deno.mkdir(`${join(Deno.cwd(), docName[0])}`, { recursive: true });
    info(`Created succesfully the new directory! ${docName[0]}`);
    await Deno.writeTextFile(
      `${join(Deno.cwd(), docName[0], name)}.md`,
      '',
    );
    info('Writed successfully the new documentation file!');
  }
}
