// module.exports = (sequelize, DataTypes) => {
//     const Comment = sequelize.define('comment', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,  
//         },
//         body: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         createComment: {
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
//     return Comment;    
// }