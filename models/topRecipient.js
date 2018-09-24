module.exports = function(sequelize, DataTypes) {
    var TopRecipient = sequelize.define("toprecipient", {
      name: {
       type: DataTypes.STRING,
       allowNull: false,
      }      
    });
  
    TopRecipient.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      TopRecipient.hasMany(models.interestgroupname, {
        foreignKey: "name_id"
      });
    };
  
    return TopRecipient;
  };