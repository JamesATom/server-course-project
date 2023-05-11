// module.exports = (sequelize, DataTypes) => {
//     const Tag = sequelize.define('tag', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,  
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         }
//     });

//     Tag.associate = ((models) => {
//         Tag.belongsToMany(models.Review, {
//             through: ReviewTag
//         })
//     });

//     return Tag;
// }
