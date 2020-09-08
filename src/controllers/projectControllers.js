const express = require('express');

module.exports = {
  async test(req, res) {
    res.send({ ok: true, user: req.userId });
  },
};
