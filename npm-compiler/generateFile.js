const fs = require("fs");
const path = require("path");
const {generateCode} = require("./generateCode");

const dirCodes = path.join(__dirname, "codes");

if (!fs.existsSync(dirCodes)) {
  fs.mkdirSync(dirCodes, { recursive: true });
}

const generateFile = async (format, content, userName) => {

  const filename = `Execute.${format}`;
  const filepath = path.join(dirCodes, filename);
  await fs.writeFileSync(filepath, generateCode(format,content,userName));
  return filepath;
};

module.exports = {
  generateFile,
};
