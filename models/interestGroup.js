module.exports = function(sequelize, DataTypes) {
    var InterestGroup = sequelize.define("InterestGroup", {
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
      interest_group: {
        type: DataTypes.STRING,
        allowNull: false,
        },
        total_donated: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        demPCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        repPCT: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    });
    InterestGroup.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        InterestGroup.belongsTo(models.Year, {
          foreignKey: {
            
            allowNull: false
          }
        });
      };
    return InterestGroup;
  };