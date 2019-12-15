const express = require("express");
const router = express.Router();

const { makePacket } = require("../../lib/tcp/util");

module.exports = function(apigateway) {
  router.get(
    "/query/:searchWord/location/:lat/:lon/page/:page/:isRecruit",
    async (req, res, next) => {
      const { searchWord, lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "POST",
        "apigateway",
        "searchStudyGroup",
        "searchStudyGroup",
        { searchWord, lat, lon, page, isRecruit },
        {},
        req.resKey,
        apigateway.context
      );
      next();
    }
  );

  router.get(
    "/query/:searchWord/category/:category/location/:lat/:lon/page/:page/:isRecruit",
    async (req, res, next) => {
      const { searchWord, category, lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "POST",
        "apigateway",
        "searchStudyGroupWithCategory",
        "searchStudyGroupWithCategory",
        { searchWord, category, lat, lon, page, isRecruit },
        {},
        req.resKey,
        apigateway.context
      );

      next();
    }
  );

  router.post("/tags", async (req, res, next) => {
    const { tags, category, lat, lon, page, isRecruit } = req.body;

    if (category === undefined)
      req.packet = makePacket(
        "POST",
        "apigateway",
        "tagStudyGroup",
        "tagStudyGroup",
        { tags, lat, lon, page, isRecruit },
        {},
        req.resKey,
        apigateway.context
      );

    if (category !== undefined)
      req.packet = makePacket(
        "POST",
        "apigateway",
        "tagStudyGroupWithCategory",
        "tagStudyGroupWithCategory",
        { tags, isRecruit, lat, lon, page, category },
        {},
        req.resKey,
        apigateway.context
      );

    next();
  });

  router.get(
    "/all/location/:lat/:lon/page/:page/:isRecruit",
    async (req, res, next) => {
      const { lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "POST",
        "apigateway",
        "searchAllStudyGroup",
        "searchAllStudyGroup",
        { lat, lon, page, isRecruit },
        {},
        req.resKey,
        apigateway.context
      );

      next();
    }
  );

  router.get(
    "/all/category/:category/location/:lat/:lon/page/:page/:isRecruit",
    async (req, res, next) => {
      const { category, lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "POST",
        "apigateway",
        "searchAllStudyGroupWithCategory",
        "searchAllStudyGroupWithCategory",
        { category, lat, lon, page, isRecruit },
        {},
        req.resKey,
        apigateway.context
      );

      next();
    }
  );
  return router;
};
