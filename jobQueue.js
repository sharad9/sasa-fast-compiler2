
const { python, java, cpp } = require('compile-run');



const addJobToQueue = async (filepath, language) => {
  try {
    let output;
    let startedAt;
    if (language === "py") {
      startedAt = Date.now();
      output = await python.runFile(filepath, (err, result) => {
        if (err) return err; else return result;

      });
    } else
      if (language === "java") {
        startedAt = Date.now();
        output = await java.runFile(filepath, (err, result) => {
          if (err) return err; else return result;
        });
      } else
        if (language === "cpp") {
          startedAt = Date.now();
          output = await cpp.runFile(filepath, (err, result) => {
            if (err) return err; else return result;
          });
        }

    return { startedAt: startedAt, completedAt: Date.now(), output: output, status: "success" };
  } catch (err) {
    return { startedAt: Date.now(), completedAt: Date.now(), output: JSON.stringify(err), status: "error" }
  }
};

module.exports = {
  addJobToQueue,
};
