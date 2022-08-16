
const { python, java, cpp } = require('compile-run');



const addJobToQueue = async (filepath, language,input) => {
  
  try {
    let output;
   
    if (language === "py") {
     
      output = await python.runFile(filepath, { stdin: input }, { maxBuffer: 1024 * 500 }, (err, result) => {
        if (err) return err; else return result;

      });
    } else
      if (language === "java") {
       
        output = await java.runFile(filepath, { stdin: input } ,(err, result) => {
          if (err) return err; else return result;
        });
      } else
        if (language === "cpp") {
       
          output = await cpp.runFile(filepath, { stdin: input }, (err, result) => {
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
