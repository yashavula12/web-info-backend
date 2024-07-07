const asynchandler = require("express-async-handler");
const Webinfo = require("../model/webinfo");

const getWebInfos = asynchandler(async (req, res) => {
  console.log("inside get call");
  const webInformation = await Webinfo.find();
  console.log("webInfoData" + webInformation);
  res.status(200).json(webInformation);
});

const createWebInfo = asynchandler(async (req, res) => {
  console.log("web request Body" + req.body.emailId);
  const { emailId, name, pageUrl, password, domain, notes } = req.body;
  const webinfoToSave = await Webinfo.create({
    emailId,
    name,
    pageUrl,
    password,
    domain,
    notes,
  });
  res.status(201).json(webinfoToSave);
});

const getWebInfo = asynchandler(async (req, res) => {
  res.status(201).json({ message: "Contact cretaed" });
});

const updateWebInfo = asynchandler(async (req, res) => {
  res.status(201).json({ message: "Contact cretaed" });
});

const deleteWebInfo = asynchandler(async (req, res) => {
  res.status(201).json({ message: "Contact cretaed" });
});

module.exports = {
  getWebInfos,
  createWebInfo,
  getWebInfo,
  updateWebInfo,
  deleteWebInfo,
};
