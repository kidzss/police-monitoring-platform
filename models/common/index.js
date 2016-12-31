/* 数据库操作共用方法 */

function Common(model){
  this.model=model//mongoose.model
}

module.exports=Common

Common.prototype={
  findOne (searchObj,callback){
    this.model.findOne(searchObj,(err,doc)=>{
      if(err){
        return callback(err)
      }
      callback(null,doc)
    })
  },
  find (searchObj,callback){
    this.model.find(searchObj,(err,docs)=>{
      if(err){
        return callback(err)
      }
      callback(null,docs)
    })
  },
  upsertUpdate (searchObj,updateObj,callback){
    this.model.update(searchObj,{$set:updateObj},{upsert:true},callback)
  },
  update (searchObj,updateObj,callback){
    this.model.update(searchObj,{$set:updateObj},{upsert:false},callback)
  }
}