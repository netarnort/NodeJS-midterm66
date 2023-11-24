module.exports = {

    que1(req, res) {
        x = parseInt(JSON.stringify(req.body.input1));
        result = x * x;
        res.send('ผลลัพท์ :' + result);
    },

    que2(req, res) {
        X = parseInt(JSON.stringify(req.body.input1));
        Y = parseInt(JSON.stringify(req.body.input2));

        for(i = X + Y; i > 0; i--) {
            if(Y % i == 0 && X % i == 0) {
                gcd = i;
                break;
            }
        }
        
        mid = X * Y;
        if(mid < 0) {
            mid = mid * -1;
        }
        result = mid / gcd;
        res.send('ผลลัพท์ :' + ' ' + result.toString());
    }
};
