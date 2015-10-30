::fis server start --type node --port 3000 --root ./www &
fis server start --port 3000 --root ./www & fis-zoo release --file fis-dev.js --dest local --watch
