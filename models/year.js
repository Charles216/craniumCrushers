module.exports = function(sequelize, DataTypes) {
    var Year = sequelize.define("Year", {
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }      
    });
  
    Year.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Year.hasMany(models.InterestGroup, {
       
      });
    
    };
  
    return Year;
  };