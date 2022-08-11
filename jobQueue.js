
const { python, java, cpp } = require('compile-run');



const addJobToQueue = async (filepath, language) => {

  let output;

  if (language === "py") {
    output = await python.runFile(filepath, (err, result) => {
      if (err) return err; else return result;

    });
  } else
    if (language === "java") {
      output = await java.runFile(filepath, (err, result) => {
        if (err) return err; else return result;
      });
    } else
      if (language === "cpp") {
        output = await cpp.runFile(filepath, (err, result) => {
          if (err) return err; else return result;
        });
      }

  return { completedAt: new Date(), output: output, status: "success" }

};

module.exports = {
  addJobToQueue,
};
