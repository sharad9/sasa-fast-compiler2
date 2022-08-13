
const { python, java, cpp } = require('compile-run');



const addJobToQueue = async (filepath, language) => {
  try {
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

    return { output: output, status: "success" };
  } catch (err) {
    return { output: JSON.stringify(err), status: "error" }
  }
};

module.exports = {
  addJobToQueue,
};
