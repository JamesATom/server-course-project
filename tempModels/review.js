// module.exports = (sequelize, DataTypes) => {
//     const Review = sequelize.define('Reviews', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         group: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         body: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         createReview: {
//             type: DataTypes.DATE,
//         },
//         userId: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//     });

//     Review.associate = ((models) => {
//         Review.belongsTo(models.User, {
//             foreignKey: 'userId'
//         });
//     });

//     Review.associate = ((models) => {
//         Review.belongsToMany(models.Tag, {
//             through: ReviewTag 
//         });
//     });

//     Review.associate = ((models) => {
//         Review.belongsToMany(models.Image, {
//             through: ReviewImage
//         });
//     });

//     Review.associate = ((models) => {
//         Review.hasMany(models.Comment, {
//             foreignKey: 'reviewId'
//         });
//     });
    
//     return Review;
// }