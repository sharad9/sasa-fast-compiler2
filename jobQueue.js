
const { python, java, cpp } = require('compile-run');



const addJobToQueue = async (filepath, language) => {

  let output;
  let startedAt;
  if (language === "py") {
    startedAt = new Date();
    output = await python.runFile(filepath, (err, result) => {
      if (err) return err; else return result;

    });
  } else
    if (language === "java") {
      startedAt = new Date();
      output = await java.runFile(filepath, (err, result) => {
        if (err) return err; else return result;
      });
    } else
      if (language === "cpp") {
        startedAt = new Date();
        output = await cpp.runFile(filepath, (err, result) => {
          if (err) return err; else return result;
        });
      }

  return { startedAt: startedAt, completedAt: new Date(), output: output, status: "success" }

};

module.exports = {
  addJobToQueue,
};
