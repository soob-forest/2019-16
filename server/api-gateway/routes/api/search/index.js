const express = require("express");
const router = express.Router();

const { makePacket } = require("../../../../lib/tcp/util");

module.exports = function (apiGateway) {
  router.get("studygroups/:searchWord/suggest", (req, res, next) => {
    const { searchWord } = req.params;

    req.packet = makePacket(
      "GET",
      "apigateway",
      "suggestQueries",
      "suggestQueries",
      { searchWord },
      {},
      req.resKey,
      apiGateway.context
    );

    next();
  });

  router.get(
    "/studygroups/:searchWord/mode/:mode/location/:lat/:lon/page/:page/:isRecruit",
    (req, res, next) => {
      const { searchWord, mode, lat, lon, page, isRecruit } = req.params;
      let packet;
      if (mode === "normal") {
        packet = makePacket(
          "GET",
          "apigateway",
          "searchStudyGroup",
          "searchStudyGroup",
          { searchWord, lat, lon, page, isRecruit },
          {},
          req.resKey,
          apiGateway.context
        );
      }
      if (mode === "tag") {
        packet = makePacket(
          "GET",
          "apigateway",
          "tagStudyGroup",
          "tagStudyGroup",
          { tags, lat, lon, page, isRecruit },
          {},
          req.resKey,
          apiGateway.context
        );
      }
      req.packet = packet;
      next();
    }
  );

  router.get(
    "/studygroups/:searchWord/mode/:mode/category/:category/location/:lat/:lon/page/:page/:isRecruit",
    (req, res, next) => {
      const {
        searchWord,
        mode,
        category,
        lat,
        lon,
        page,
        isRecruit
      } = req.params;
      let packet;
      if (mode === "normal") {
        packet = makePacket(
          "GET",
          "apigateway",
          "searchStudyGroupWithCategory",
          "searchStudyGroupWithCategory",
          { searchWord, category, lat, lon, page, isRecruit },
          {},
          req.resKey,
          apiGateway.context
        );
      }
      if (mode === "tag") {
        packet = makePacket(
          "GET",
          "apigateway",
          "tagStudyGroupWithCategory",
          "tagStudyGroupWithCategory",
          { tags, isRecruit, lat, lon, page, category },
          {},
          req.resKey,
          apiGateway.context
        );
      }
      req.packet = packet;

      next();
    }
  );

  router.get(
    "/studygroups/location/:lat/:lon/page/:page/:isRecruit",
    (req, res, next) => {
      const { lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "GET",
        "apigateway",
        "searchAllStudyGroup",
        "searchAllStudyGroup",
        { lat, lon, page, isRecruit },
        {},
        req.resKey,
        apiGateway.context
      );

      next();
    }
  );

  router.get(
    "/studygroups/category/:category/location/:lat/:lon/page/:page/:isRecruit",
    (req, res, next) => {
      const { category, lat, lon, page, isRecruit } = req.params;

      req.packet = makePacket(
        "GET",
        "apigateway",
        "searchAllStudyGroupWithCategory",
        "searchAllStudyGroupWithCategory",
        { category, lat, lon, page, isRecruit },
        {},
        req.resKey,
        apiGateway.context
      );

      next();
    }
  );
  return router;
};
