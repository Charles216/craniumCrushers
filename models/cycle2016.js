//CYCLE2016
module.exports = function (sequelize, DataTypes) {
    var Cycle2016 = sequelize.define("cycle2016s", {
        display_name: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        contributor_name: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        contributor_company: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        contributor_city: {
            type: DataTypes.STRING,
            allowNUll: false
        },
        total_contribution: {
            type: DataTypes.INTEGER,
            allowNUll: false
        },
        percent_to_dems: {
            type: DataTypes.INTEGER,
            allowNUll: false
        },
        percent_to_reps: {
            type: DataTypes.INTEGER,
            allowNUll: false
        }
    });
    return Cycle2016;
};