const dotenv = require('dotenv');
const appRootPath = require('app-root-path');
const configRowData = dotenv.config({
  path: `${appRootPath}/config/.env`,
});

module.exports = {
  ...configRowData.parsed,
};