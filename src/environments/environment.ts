// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAHoP4P-m3rFsKRp2dX91_PYYvUDqKanwE",
    authDomain: "hc-db-1d9cd.firebaseapp.com",
    databaseURL: "https://hc-db-1d9cd.firebaseio.com",
    storageBucket: "hc-db-1d9cd.appspot.com",
    messagingSenderId: "778695230482"
  },
  sendgrid: {
    apiKey: "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"
  }
};