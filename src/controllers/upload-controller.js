"use strict";

const fs = require("fs");

exports.post = (req, res) => {
  const files = req.files;
  console.log(files.file.path.split("/")[0])
  console.log(files.file.originalFilename)

  fs.rename(files.file.path, `uploads\\${files.file.originalFilename}`, () => {
    console.log("Arquivo Renomeado");
  });
};