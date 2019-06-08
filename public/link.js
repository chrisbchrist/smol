const mongoose = require('mongoose');
const Counter = require('./counter');

var urlSchema = new mongoose.Schema({
    original_url: String,
    short_url: String
});

var entitySchema = mongoose.Schema({
    testvalue: {type: String}
});

urlSchema.pre('save', function(next) {
    var doc = this;
    Counter.findByIdAndUpdate({_id: 'url_id'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.short_url = counter.seq;
        next();
    });
});



module.exports = mongoose.model("Link", urlSchema);