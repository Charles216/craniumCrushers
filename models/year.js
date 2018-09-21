module.exports = function(sequelize, DataTypes) {
    var Year = sequelize.define("InterestGroupYears", {
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }      
    });
  
    Year.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Year.hasMany(models.InterestGroupName, {
        foreignKey: "year_id"
      });
    };
  
    return Year;
  };