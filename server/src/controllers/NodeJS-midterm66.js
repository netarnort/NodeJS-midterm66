module.exports = {

    que1(req, res) {
        x = parseInt(JSON.stringify(req.body.input1));
        result = x % 2;
        res.send('ผลลัพท์ :' + result);
    },

};
