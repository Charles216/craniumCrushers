//CYCLE2012
module.exports = function (sequelize, DataTypes) {
    var Cycle2012 = sequelize.define("cycle2012", {
        display_name: DataTypes.STRING,
        contributor_name: DataTypes.STRING,
        contributor_company: DataTypes.STRING,
        contributor_city: DataTypes.STRING,
        total_contribution: DataTypes.INTEGER,
        percent_to_dems: DataTypes.INTEGER,
        percent_to_reps: DataTypes.INTEGER
    });
    return Cycle2012;
};