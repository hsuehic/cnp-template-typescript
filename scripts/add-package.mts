import { $, cd } from 'zx';

$.verbose = false;

if (process.argv.length < 3) {
  console.log('Please add package name, use `pnpm run add-package <packageName>`');
  process.exit(0);
}

const packageName = process.argv[2];

const packageDir = `./packages/${packageName}`;
await $`mkdir -p ${packageDir}`;
await $`cp -r ./scripts/package-template/ ./packages/${packageName}`;
const packageJsonFields = ['bugs.url', 'homepage', 'repository.type', 'repository.url'];
const packageJsonFieldsValues = new Map<string,string>();
const promises = packageJsonFields.map(async (key: string) => {
  const value = await $`npm pkg get ${key} -ws=false | tr -d \\\"`;
  packageJsonFieldsValues.set(key, value.stdout.trimEnd())
});
await Promise.all(promises);
cd(packageDir);

await $`npm pkg set name=${packageName} -ws=false`
const setPromises = packageJsonFields.map(async (key) => {
  await $`npm pkg set ${key}=${packageJsonFieldsValues.get(key) as string} -ws=false`;
});
await Promise.all(setPromises);