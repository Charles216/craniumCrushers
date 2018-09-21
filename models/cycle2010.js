//CYCLE2010
module.exports = function (sequelize, DataTypes) {
    var Cycle2010 = sequelize.define("cycle2010", {
        display_name: DataTypes.STRING,
        contributor_name: DataTypes.STRING,
        contributor_company: DataTypes.STRING,
        contributor_city: DataTypes.STRING,
        total_contribution: DataTypes.INTEGER,
        percent_to_dems: DataTypes.INTEGER,
        percent_to_reps: DataTypes.INTEGER
    });
    return Cycle2010;
};