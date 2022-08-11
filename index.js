const express = require("express");
const cors = require("cors");


const { generateFile } = require("./generateFile");

const { addJobToQueue } = require("./jobQueue");
const Job = require("./models/Job");

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
  const filepath = await generateFile(language, code,userName);
  // write into DB

  const result = await addJobToQueue(filepath,language);
  res.status(201).json({result:result});
});

app.get("/status", async (req, res) => {
	const jobId = req.query.id;

	if (jobId === undefined) {
		return res
			.status(400)
			.json({ success: false, error: "missing id query param" });
	}

	const job = await Job.findById(jobId);

	if (job === undefined) {
		return res.status(400).json({ success: false, error: "couldn't find job" });
	}

	return res.status(200).json({ success: true, job });
});

app.listen(5000, () => {
	console.log(`Listening on port 5000!`);
});
