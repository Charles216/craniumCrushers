module.exports = function(sequelize, DataTypes) {
    var InterestGroupName = sequelize.define("interestgroupname", {
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
  
    return InterestGroupName;
  };