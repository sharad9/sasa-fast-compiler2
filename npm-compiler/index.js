const express = require("express");
const cors = require("cors");


const { generateFile } = require("./generateFile");

const { addJobToQueue } = require("./jobQueue");


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/run", async (req, res) => {
  const { language = "cpp", code, userName } = req.body;

  console.log(language, "Length:", code.length, userName);

  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }
  // need to generate a c++ file with content from the request
  const filepath = await generateFile(language, code, userName);
  // write into DB

  let result = await addJobToQueue(filepath, language);
  console.log(result)
  const array = result.output.stdout.split('\n');
  let executionTime = null;
  if (result.output.stdout.includes('Execution Time :')) {
    result.output.stdout = (result.output.stdout.substring(0, result.output.stdout.lastIndexOf('Execution Time :')))
    executionTime = array[array.length - 2];

  }



  if (executionTime == null) {
    res.status(201).json({ result: result, executionTime: 'Execution Time : No_result' });

  } else {

    res.status(201).json({ result: result, executionTime: executionTime });
  }
});



app.listen(process.env.PORT || 5000, () => {
  console.log(`Listening on port 5000!`);
});
