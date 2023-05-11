
// module.exports = (Sequelize, DataTypes) => {
//     const Image = Sequelize.define('image', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,  
//         },
//         nameFile: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         pathToCloudStorage: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }
//     });

//     Image.associate = ((models) => {
//         Image.belongsToMany(models.Review, {
//             through: ReviewImage
//         });
//     });

//     return Image;
// }