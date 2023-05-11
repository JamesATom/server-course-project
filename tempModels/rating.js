// module.exports = (Sequelize, DataTypes) => {
//     const Rating = Sequelize.define('rating', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,  
//         },
//         rating: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         dateCreate: {
//             type: DataTypes.DATE,
//         },
//         userId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         reviewId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     });

//     Rating.associate = ((models) => {
//         Rating.belongsTo(models.User, {
//             foreignKey: 'userId' 
//         });
//     });

//     Rating.associate = ((models) => {
//         Rating.belongsTo(models.Review, {
//             foreignKey: 'reviewId'
//         });
//     });

//     return Rating;    
// }