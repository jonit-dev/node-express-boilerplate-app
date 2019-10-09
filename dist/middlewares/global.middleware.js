"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LanguageHelper = require("../utils/LanguageHelper");
const checkMethods = (req, res, next) => {
    const { method, path } = req;
    if (method === "GET") {
        return res.status(401).send({
            status: "error",
            message: LanguageHelper.getLanguageString(null, "methodNotAllowed")
        });
    }
    else {
        console.log(`Express Middleware => ${method} / ${path}`);
        next();
    }
};
exports.checkMethods = checkMethods;
const maintenanceMode = (req, res, next) => {
    return res.status(503).send({
        status: "error",
        message: LanguageHelper.getLanguageString(null, "appMaintenanceMode")
    });
};
exports.maintenanceMode = maintenanceMode;