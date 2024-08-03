const asynchandler = require("express-async-handler");
const Webinfo = require("../model/webinfo");

const getWebInfos = asynchandler(async (req, res) => {
  const webInformation = await Webinfo.find();
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
  console.log("get WebInfo called" + req.body);
  try {
    const webInformation = await Webinfo.findById(req.params.id);
    if (!webInformation) {
      res.status(404).json({ message: "Requested Information not found" });
    }
    res.status(200).json(webInformation);
  } catch (err) {
    res.status(404);
    throw new Error("Requestd web Information not found");
  }
});

const updateWebInfo = asynchandler(async (req, res) => {
  console.log("update WebInfo called" + req.params.id);
  try {
    const webInformation = await Webinfo.findById(req.params.id);
    if (!webInformation) {
      res.status(404).json({
        message: "Requested Information not found for id" + req.params.id,
      });
    }
    const updatedWebInfo = await Webinfo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedWebInfo);
  } catch (err) {
    res.status(404);
    throw new Error("Requestd web Information not found" + req.params.id);
  }
});

const deleteWebInfo = asynchandler(async (req, res) => {
  console.log("Delete WebInfo called" + req.params.id);
  try {
    const webInformation = await Webinfo.findById(req.params.id);
    console.log("WebInformation" + webInformation);
    if (!webInformation) {
      console.log("Inside webInfo not found");
      res.status(404).json({
        message: "Requested Information not found for id" + req.params.id,
      });
    }
    await Webinfo.findByIdAndDelete(req.params.id);
    res.status(200).json(webInformation);
  } catch (err) {
    console.log("Inside error Block" + err);
    res.status(404);
    throw new Error("Requestd web Information not found" + req.params.id);
  }
});

module.exports = {
  getWebInfos,
  createWebInfo,
  getWebInfo,
  updateWebInfo,
  deleteWebInfo,
};
