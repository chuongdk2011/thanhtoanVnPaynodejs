var db = require('./db');

const tb_thanhtoanSchema = new db.mongoose.Schema(
    {
        vnp_TmnCode: {type: String, require: true},
        vnp_Amount: {type: String, require: true},
        vnp_OrderInfo: {type: String, require: true},
        vnp_Version: {type: String, require: true},
        vnp_Command:{type: String, require: true},
        vnp_CurrCode: {type: String, require: true},
        vnp_TxnRef: {type:String, require: true},
        vnp_OrderType:{type: String, require: true},
    },
    {
        collection: 'thanhtoan'
    }
);

//tạo model
let tb_thanhtoanModel = db.mongoose.model('thanhtoan', tb_thanhtoanSchema);

module.exports = {tb_thanhtoanModel};